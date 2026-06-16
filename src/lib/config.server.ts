import process from "node:process";

export type ServerConfig = {
  nodeEnv: string | undefined;
  mongodbUri: string | undefined;
  mongodbDbName: string;
  mongodbCollection: string;
  smtpHost: string | undefined;
  smtpPort: number;
  smtpSecure: boolean;
  smtpUser: string | undefined;
  smtpPass: string | undefined;
  smtpFrom: string;
  clientEmail: string;
  resendApiKey: string | undefined;
};

export function getServerConfig(): ServerConfig {
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  return {
    nodeEnv: process.env.NODE_ENV,
    mongodbUri: process.env.MONGODB_URI,
    mongodbDbName: process.env.MONGODB_DB_NAME ?? "jdinfra",
    mongodbCollection: process.env.MONGODB_COLLECTION ?? "enquiries",
    smtpHost: process.env.SMTP_HOST,
    smtpPort: Number.isFinite(smtpPort) ? smtpPort : 587,
    smtpSecure: process.env.SMTP_SECURE === "true",
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpFrom: process.env.SMTP_FROM ?? "JD Infra Website <onboarding@resend.dev>",
    clientEmail: process.env.CLIENT_EMAIL ?? "jdinfradeveloper@gmail.com",
    resendApiKey: process.env.RESEND_API_KEY,
  };
}

export function assertEnquiryConfig(config: ServerConfig): void {
  const missing: string[] = [];
  if (!config.mongodbUri) missing.push("MONGODB_URI");
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
