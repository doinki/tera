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
RUN pnpm --filter remix build && pnpm --filter remix deploy --prod dist

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=builder --chown=nodejs:nodejs /app/dist ./

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000
CMD node server/server.production.js
