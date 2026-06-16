# My Portfolio

This is a static portfolio site (HTML/CSS/JS).

## Deploy to Vercel (recommended)

Option A — via Vercel web UI:
1. Go to https://vercel.com and log in with GitHub.
2. Import Project → select `Haneesh3/my_portfolio`.
3. Framework Preset: `Other` (or `Static`), Root Directory: `/`.
4. Build & Output Settings: leave empty — `vercel.json` handles routing.
5. Deploy.

Option B — via Vercel CLI:

```bash
npm i -g vercel
vercel login
cd path/to/portfolio
vercel --prod
```

The site will be served at the provided Vercel URL after deployment.
