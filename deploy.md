# Deploy to CapRover

## Prerequisites

- CapRover server running
- Domain configured with CapRover
- Git repository with the project code

## Steps

### 1. Build the Project

```bash
npm run build
```

### 2. Create Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 3. Update next.config.js

Add `output: 'standalone'` for optimal Docker image size:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

### 4. Deploy via CapRover Dashboard

1. Login to your CapRover dashboard
2. Click **Create New App**
3. Set an app name (e.g., `portfolio`)
4. Go to the app's **Deployment** tab
5. Select **Deployment Method: GitHub/GitLab/Bitbucket**
6. Connect your repository
7. Set **Branch** to `main`
8. Set **Build Command** to `npm run build`
9. Set **Output Directory** to `/`
10. Click **Save & Deploy**

### 5. Configure Environment (Optional)

Add any environment variables in the **Config Variables** section if needed.

### 6. Enable HTTPS

1. Go to **Domains / HTTPS** tab
2. Enable **Force HTTPS** if needed
3. CapRover will automatically provision SSL certificate

## Verify

After deployment, visit your domain to verify the site is running.
