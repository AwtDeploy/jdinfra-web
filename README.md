# JD Infra Developers — Vishnu Kuteer Website

Marketing site for JD Infra Developers (TanStack Start + React).

## Local development

```bash
npm install
cp .env.example .env
# Edit .env with MongoDB Atlas URI and Gmail App Password
npm run dev
```

Contact form: `/contact` — saves to MongoDB and emails the client.

## Environment variables

- **Local:** copy [`.env.example`](.env.example) to `.env` (`.env` is gitignored).
- **Vercel:** add the same keys in the Vercel dashboard — see [**VERCEL_DEPLOY.md**](VERCEL_DEPLOY.md).

Never commit `.env` or paste passwords in GitHub.

## Deploy

Deploy to **Vercel** (Node runtime for MongoDB + SMTP). Full steps: [**VERCEL_DEPLOY.md**](VERCEL_DEPLOY.md).

Backend details: [**BACKEND_SETUP.md**](BACKEND_SETUP.md).
