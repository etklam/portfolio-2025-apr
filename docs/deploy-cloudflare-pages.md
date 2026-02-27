# Deploy to Cloudflare Pages (Next.js)

This project uses Next.js App Router with `middleware.ts` and server-side redirects, so deploy it as a full-stack Next.js app on Cloudflare Pages using `@cloudflare/next-on-pages`.

## 1. Prerequisites

- Cloudflare account
- Project pushed to GitHub/GitLab
- Node.js 20+ locally (recommended)

## 2. Create a Pages project

1. Go to **Cloudflare Dashboard** -> **Workers & Pages** -> **Create** -> **Pages**.
2. Connect your Git repository.
3. Select the branch to deploy (for example `main`).

## 3. Build settings

Use these values in Cloudflare Pages:

- Framework preset: `None`
- Build command: `npx @cloudflare/next-on-pages@1`
- Build output directory: `.vercel/output/static`
- Root directory: (leave empty unless your app is in a subfolder)

## 4. Environment variables

Set at least:

- `NODE_VERSION=20`
- `NEXT_TELEMETRY_DISABLED=1`

If your site URL is needed for sitemap/meta, set:

- `NEXT_PUBLIC_SITE_URL=https://<your-domain>`

## 5. Deploy

1. Save settings and trigger the first deployment.
2. Wait for build to finish.
3. Open the generated `*.pages.dev` URL to verify.

## 6. Attach custom domain (optional)

1. In the Pages project, open **Custom domains**.
2. Add your domain and follow DNS setup.
3. Cloudflare will provision SSL automatically.

## 7. Verification checklist

- `/{locale}` loads correctly (for example `/zh-HK` and `/en`)
- `/{locale}/career` works
- `/{locale}/about` redirects to `/{locale}/#about`
- `/{locale}/skills` redirects to `/{locale}/#skills`
- `/{locale}/status` redirects to `/{locale}`

## Troubleshooting

- Build fails on Node version:
  - Confirm `NODE_VERSION=20` in Pages environment variables.
- Blank page or missing routes:
  - Confirm build command is `npx @cloudflare/next-on-pages@1` and output directory is `.vercel/output/static`.
- Wrong canonical/sitemap host:
  - Set `NEXT_PUBLIC_SITE_URL` to your production URL.
