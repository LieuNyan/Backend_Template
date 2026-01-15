import path from 'node:path';
import { PrismaConfig, defineConfig, env } from 'prisma/config';
import { config as dotenvFlowConfig } from 'dotenv-flow';

// Monorepo root directory
const rootDir = path.resolve(__dirname, '../..');

// Load environment variables from root directory
dotenvFlowConfig({
  path: rootDir,
});

// Prisma config
export default defineConfig({
  schema: path.join(__dirname, 'models'),
  migrations: {
    path: path.join(__dirname, 'migrations'),
  },
  datasource: {
    /**
     * 빌드 시 PRISMA_SKIP_DATASOURCE가 1로 설정되면, 데이터베이스 연결 정보를 무시합니다.
     * @note For Docker image build
     */
    url: process.env.PRISMA_SKIP_DATASOURCE === '1' ? undefined : env('DATABASE_URL'),
  },
}) satisfies PrismaConfig;
