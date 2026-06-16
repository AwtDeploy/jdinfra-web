# Vercel Deployment Guide

## Quick Deploy

1. Push this repo to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) → Add New Project → Import your repo
3. Vercel auto-detects TanStack Start + Nitro
4. **Build Command**: `npm run build` (auto-detected)
5. **Output Directory**: `.vercel/output` (auto-detected)
6. **Framework**: Other (or Nitro)

## Environment Variables (Required)

Add these in Vercel Project → Settings → Environment Variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `MONGODB_URI` | `mongodb+srv://...` | MongoDB Atlas connection string |
| `MONGODB_DB_NAME` | `jdinfra` | Database name |
| `MONGODB_COLLECTION` | `enquiries` | Collection name |
| `RESEND_API_KEY` | `re_xxxxxxxxx` | From [Resend Dashboard](https://resend.com/api-keys) |
| `SMTP_FROM` | `JD Infra Website <onboarding@resend.dev>` | Sender email |
| `CLIENT_EMAIL` | `jdinfradeveloper@gmail.com` | Where enquiries go |

## Domain Setup

1. In Vercel Project → Settings → Domains → Add your domain
2. Add DNS records as instructed (CNAME to `cname.vercel-dns.com`)
3. SSL auto-provisions

## Notes

- **No SMTP needed** - Uses Resend API (works on Vercel Functions)
- **MongoDB** - Ensure IP allowlist includes `0.0.0.0/0` (Vercel IPs are dynamic)
- **Build** - Runs on Vercel's Linux servers (no Windows native module issues)
- **TanStack Start** - SSR works automatically with Nitro preset

## Local Development

```bash
cp .env.example .env
# Edit .env with your values
npm run dev
```