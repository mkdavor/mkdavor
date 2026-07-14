# Davor Denikj Portfolio

Production portfolio site for [https://davordenikj.com](https://davordenikj.com).

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- ESLint
- Resend

## Run Locally

```bash
npm install
npm run dev
```

## Contact Form Email

Contact form submissions are sent through Resend to `davordenikj@outlook.com`. The visitor's
email is set as the reply-to address, so replying to the notification responds directly to them.

For local development, use the private `.env.local` file:

```text
RESEND_API_KEY=
RESEND_FROM_EMAIL_CONTACT="Davor Denikj Website <onboarding@resend.dev>"
RESEND_TO_EMAIL=davordenikj@outlook.com
```

The repository ignores both `.env` and `.env.local`. Add the private Resend API key to
`.env.local` before testing. Next.js gives `.env.local` precedence over `.env` locally.

The private `.env` file records the intended production values. Configure these same variable
names in the production server's environment settings:

```text
RESEND_API_KEY=
RESEND_FROM_EMAIL_CONTACT="Davor Denikj Website <contact@davordenikj.com>"
RESEND_TO_EMAIL=davordenikj@outlook.com
```

The production sender address must belong to a domain verified in Resend. If a different sender
is verified, replace `contact@davordenikj.com` with that address. Never commit the API key.

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
