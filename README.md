# Zahbro Sports

Phase 1 of the new Zahbro Sports web experience: a production-ready Next.js foundation, brand system, responsive global navigation, footer and GSAP animation architecture.

## Requirements

- Node.js 22+
- npm

## Local development

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Staging is non-indexable by default; only set `NEXT_PUBLIC_STAGING=false` when the final production domain is approved.

## Validation

```bash
npm ci
npx tsc --noEmit
npm run build
git diff --check
```

## Deployment

`next.config.ts` produces a standalone Node.js server compatible with Hostinger Business Web Hosting. Upload `.next/standalone`, `.next/static`, and `public`, then run the generated `server.js` with Node.js 22. Supply environment values in the hosting dashboard—never commit credentials.
