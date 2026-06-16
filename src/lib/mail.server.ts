import { Resend } from "resend";

import { getServerConfig } from "./config.server";

export type EnquiryPayload = {
  name: string;
  phone: string;
  budget: string;
  message: string;
};

let resendClient: Resend | undefined;

function getResend(): Resend | null {
  if (resendClient) return resendClient;
  const config = getServerConfig();
  if (!config.resendApiKey) {
    return null;
  }
  resendClient = new Resend(config.resendApiKey);
  return resendClient;
}

function buildEmailBodies(enquiry: EnquiryPayload) {
  const lines = [
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Budget: ${enquiry.budget}`,
    `Message: ${enquiry.message || "(none)"}`,
  ];
  const text = lines.join("\n");
  const html = `
    <h2>New Vishnu Kuteer enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(enquiry.budget)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(enquiry.message || "(none)")}</p>
  `.trim();
  return { text, html };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendEnquiryEmail(enquiry: EnquiryPayload): Promise<void> {
  const config = getServerConfig();
  const { text, html } = buildEmailBodies(enquiry);
  const client = getResend();

  if (!client) {
    console.log("Email not configured, logging enquiry:", { name: enquiry.name, phone: enquiry.phone, budget: enquiry.budget });
    return;
  }

  await client.emails.send({
    from: config.smtpFrom,
    to: config.clientEmail,
    subject: `New Vishnu Kuteer enquiry from ${enquiry.name}`,
    text,
    html,
  });
}