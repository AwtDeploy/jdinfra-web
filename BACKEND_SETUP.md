# Enquiry backend setup (MongoDB + SMTP)

Contact form submissions are saved to MongoDB Atlas and emailed to the client via SMTP.

## 1. Environment variables

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | Atlas connection string |
| `MONGODB_DB_NAME` | Database name (default: `jdinfra`) |
| `MONGODB_COLLECTION` | Collection name (default: `enquiries`) |
| `SMTP_HOST` | e.g. `smtp.gmail.com` |
| `SMTP_PORT` | `587` for TLS |
| `SMTP_SECURE` | `false` for port 587 |
| `SMTP_USER` | Sender Gmail address |
| `SMTP_PASS` | Gmail **App Password** (not normal password) |
| `SMTP_FROM` | Display name for outgoing mail |
| `CLIENT_EMAIL` | Where enquiries are sent (`jdinfradeveloper@gmail.com`) |

### Gmail App Password

1. Enable 2-Step Verification on the Google account.
2. Google Account → Security → App passwords.
3. Create a password for “Mail” and paste it into `SMTP_PASS`.

## 2. MongoDB Atlas

1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Database Access → add a user with read/write on your database.
3. Network Access → allow your IP (or `0.0.0.0/0` for quick demos).
4. Connect → Drivers → copy the connection string into `MONGODB_URI`.

Collection `enquiries` is created automatically on first submit.

## 3. Local development

```bash
npm install
npm run dev
```

Open `/contact`, submit a test enquiry, then verify:

- Document appears in Atlas (`enquiries` collection).
- Email arrives at `CLIENT_EMAIL` (check spam).

## 4. Deploy (Vercel recommended)

This project uses Nitro **`vercel`** preset ([`nitro.config.ts`](nitro.config.ts)) so SMTP and MongoDB work on Node.

**Secrets on Vercel:** `.env` stays on your machine (gitignored). Copy each variable into Vercel → **Settings → Environment Variables**, then redeploy. Step-by-step: [**VERCEL_DEPLOY.md**](VERCEL_DEPLOY.md).

1. Push the repo to GitHub (no `.env` in the repo).
2. Import project in [Vercel](https://vercel.com).
3. Add all variables from `.env` in Project → Settings → Environment Variables.
4. Deploy.

Do **not** deploy to Cloudflare Workers only if you need SMTP; Workers cannot open SMTP ports.

## 5. API flow

- Client: [`src/routes/contact.tsx`](src/routes/contact.tsx) calls `submitEnquiry`.
- Server: [`src/lib/api/enquiry.functions.ts`](src/lib/api/enquiry.functions.ts) validates with Zod, inserts via [`src/lib/db.server.ts`](src/lib/db.server.ts), emails via [`src/lib/mail.server.ts`](src/lib/mail.server.ts).
