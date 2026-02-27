# Portfolio

A bilingual personal portfolio built with Next.js App Router.

## Tech Stack

- Next.js 15.2.4
- React 19
- TypeScript 5
- Tailwind CSS 4

## Routes

- `/{locale}`: home page (includes About + Skills sections)
- `/{locale}/career`: career page
- `/{locale}/about` -> redirects to `/{locale}/#about`
- `/{locale}/skills` -> redirects to `/{locale}/#skills`
- `/{locale}/status` -> redirects to `/{locale}`

Supported locales:

- `zh-HK` (default)
- `en`

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Test

```bash
npm test
```

## Deployment Guides

- CapRover: `deploy.md`
- Cloudflare Pages: `docs/deploy-cloudflare-pages.md`
