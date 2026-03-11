# Davor Denikj Portfolio

Production portfolio site for [https://davordenikj.com](https://davordenikj.com).

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- ESLint

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Quality Checks

```bash
npm run lint
```

## SEO

- Canonical/Open Graph/Twitter metadata configured in `src/app/layout.tsx`.
- Structured data (`Person`, `WebSite`) included.
- Auto-generated routes:
  - `/robots.txt`
  - `/sitemap.xml`
  - `/manifest.webmanifest`
