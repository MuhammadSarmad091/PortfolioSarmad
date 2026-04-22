# Muhammad Sarmad — Portfolio

Standalone Vite + React + Tailwind v4 build, ready to deploy to Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
```

The production bundle is written to `dist/`.

## Deploy to Vercel

### Option A — via the Vercel website (easiest)

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Done.

### Option B — via the Vercel CLI

```bash
npm i -g vercel
vercel            # first deploy (preview)
vercel --prod     # production deploy
```

A `vercel.json` is included so client-side routes always fall back to `index.html`.

## Project structure

- `src/` — React app (components, sections, pages)
- `assets/` — images imported via the `@assets/...` alias
- `public/` — static files served from the site root (favicon, og image)
- `index.html` — Vite entry HTML
- `vite.config.ts` — Vite config (aliases for `@` and `@assets`)
- `vercel.json` — Vercel SPA rewrite config
