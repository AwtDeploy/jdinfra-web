# Sync with GitHub & Lovable

This project is linked to: **https://github.com/gayathriparsam/JDInfra_website**

Lovable reads from that GitHub repo. Changes pushed to `main` appear in Lovable after it syncs.

## Push your Cursor changes to GitHub

From this folder (`JDInfra_website-main`):

```powershell
git add .
git status
# Confirm .env is NOT listed
git commit -m "Describe your change"
git push origin main
```

## Pull Lovable / GitHub changes into Cursor

```powershell
git pull origin main
```

## Secrets

| File | Git? |
|------|------|
| `.env` | **Never** — local only |
| `.env.example` | Yes — template only |
| Vercel | Dashboard env vars — see `VERCEL_DEPLOY.md` |

## If git shows wrong files (home folder)

Run git only inside this project folder, not `C:\Users\DELL`.
