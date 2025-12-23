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
    url: env('DATABASE_URL'),
  },
}) satisfies PrismaConfig;
