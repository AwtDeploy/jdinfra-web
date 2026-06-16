import { MongoClient, type Db } from "mongodb";

import { assertEnquiryConfig, getServerConfig } from "./config.server";

export type EnquiryDocument = {
  name: string;
  phone: string;
  budget: string;
  message: string;
  createdAt: Date;
  source: "contact_page";
};

let clientPromise: Promise<MongoClient> | undefined;

function getClient(): Promise<MongoClient> {
  if (!clientPromise) {
    const config = getServerConfig();
    assertEnquiryConfig(config);
    const client = new MongoClient(config.mongodbUri!);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const config = getServerConfig();
  const client = await getClient();
  return client.db(config.mongodbDbName);
}

export async function insertEnquiry(doc: EnquiryDocument): Promise<{ insertedId: string }> {
  const config = getServerConfig();
  const db = await getDb();
  const result = await db.collection(config.mongodbCollection).insertOne(doc);
  return { insertedId: result.insertedId.toString() };
}
