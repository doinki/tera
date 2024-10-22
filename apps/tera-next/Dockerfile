FROM node:22-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY pnpm-lock.yaml ./

RUN corepack enable pnpm && pnpm config set store-dir .pnpm && pnpm fetch

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/.pnpm ./.pnpm
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm config set store-dir .pnpm && pnpm install --frozen-lockfile --offline
RUN pnpm --filter next build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=builder --chown=nodejs:nodejs /app/apps/tera-next/.next/standalone ./
COPY --from=builder --chown=nodejs:nodejs /app/apps/tera-next/.next/static ./apps/tera-next/.next/static
COPY --from=builder --chown=nodejs:nodejs /app/apps/tera-next/public ./apps/tera-next/public

USER nodejs

EXPOSE 3010

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3010
ENV NEXT_TELEMETRY_DISABLED=1
CMD node apps/tera-next/server.js