# ---- base ----
FROM node:22-alpine AS base
WORKDIR /repo
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate

# ---- deps ----
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/main-service/package.json apps/main-service/package.json
COPY packages/prisma/package.json packages/prisma/package.json
RUN pnpm install --frozen-lockfile

# ---- build ----
FROM deps AS build
COPY . .

ENV PRISMA_SKIP_DATASOURCE=1
RUN pnpm --filter @backend-template/prisma generate
RUN pnpm --filter @backend-template/main-service build

# ---- deploy ----
FROM build AS deploy

# main-service 런타임 번들
RUN pnpm --filter @backend-template/main-service deploy --prod --legacy /out/apps/main-service

# prisma 런타임 번들
RUN pnpm --filter @backend-template/prisma deploy --prod --legacy /out/packages/prisma

# dist는 deploy 결과에 없으면 "내용물만" 복사
RUN mkdir -p /out/apps/main-service/dist \
 && cp -r apps/main-service/dist/* /out/apps/main-service/dist/

# prisma generated도 포함 (deploy에 이미 들어있으면 생략 가능)
RUN mkdir -p /out/packages/prisma/generated \
 && cp -r packages/prisma/generated/* /out/packages/prisma/generated/

# ---- runtime ----
FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=deploy /out/ /app/

WORKDIR /app/apps/main-service
CMD ["node", "dist/main.js"]

EXPOSE 3000