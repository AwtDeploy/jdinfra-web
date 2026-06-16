import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { insertEnquiry } from "../db.server";
import { sendEnquiryEmail } from "../mail.server";

const enquirySchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  budget: z.string().min(1),
  message: z.string().max(2000).optional().default(""),
});

export type SubmitEnquiryResult = { ok: true; emailSent: boolean } | { ok: false; message: string };

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator(enquirySchema)
  .handler(async ({ data }): Promise<SubmitEnquiryResult> => {
    const enquiryDoc = {
      name: data.name,
      phone: data.phone,
      budget: data.budget,
      message: data.message,
      createdAt: new Date(),
      source: "contact_page" as const,
    };

    try {
      const [dbResult, emailResult] = await Promise.allSettled([
        insertEnquiry(enquiryDoc),
        sendEnquiryEmail(data),
      ]);

      const dbOk = dbResult.status === "fulfilled";
      const emailOk = emailResult.status === "fulfilled";

      if (!dbOk) console.error("MongoDB insert failed:", dbResult.reason);
      if (!emailOk) console.error("SMTP email failed:", emailResult.reason);

      if (dbOk && emailOk) return { ok: true, emailSent: true };
      if (dbOk) return { ok: true, emailSent: false };
      if (emailOk) return { ok: true, emailSent: true };

      return {
        ok: false,
        message: "Could not submit your enquiry. Please call us at 9642166456.",
      };
    } catch (error) {
      console.error("submitEnquiry failed:", error);
      return {
        ok: false,
        message: "Could not submit your enquiry. Please call us at 9642166456.",
      };
    }
  });
