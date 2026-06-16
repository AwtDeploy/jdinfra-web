import { defineNitroConfig } from "nitro/config";

// Node preset required for MongoDB driver + Nodemailer SMTP (TCP).
// Cloudflare Workers cannot use traditional SMTP.
export default defineNitroConfig({
  preset: "vercel",
  publicAssets: [
    {
      baseURL: "/",
      dir: "dist",
    },
  ],
});
