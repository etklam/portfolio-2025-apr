# Deploy to CapRover

## Prerequisites

- CapRover server running
- Domain configured with CapRover
- Git repository with the project code

## Steps

### 1. Create next.config.mjs

Add `output: 'standalone'` for optimal Docker image size:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

### 2. Create Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

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

### 3. Create .dockerignore

Create a `.dockerignore` file to speed up builds:

```
.next
node_modules
npm-debug.log
.git
.gitignore
README.md
.deployment
```

### 4. Deploy via CapRover Dashboard

1. Login to your CapRover dashboard
2. Click **Create New App**
3. Set an app name (e.g., `portfolio`)
4. Go to the app's **Deployment** tab
5. Select **Deployment Method: GitHub/GitLab/Bitbucket**
6. Connect your repository
7. Set **Branch** to `main`
8. Set **Container HTTP Port** to `3000`
9. Click **Save & Deploy**

### 5. Configure Environment Variables

Add these in **Config Variables**:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 6. Enable HTTPS

1. Go to **Domains / HTTPS** tab
2. Enable **Force HTTPS** if needed
3. CapRover will automatically provision SSL certificate

## Troubleshooting

### Build Retries / Network Issues

If you see `Retrying 1/3...` errors:

**Option 1: Pre-build locally**
```bash
npm run build
```
Then commit and push - CapRover will use the pre-built `.next` folder.

**Option 2: Increase timeout**
In CapRover **Config Variables**, add:
```
CAPROVER_CI_TIMEOUT=600000
```

**Option 3: Disable telemetry**
Already included in Dockerfile via `NEXT_TELEMETRY_DISABLED=1`

### Port Issues

Ensure **Container HTTP Port** is set to `3000` in CapRover app settings.

## Verify

After deployment, visit your domain to verify the site is running.
