import path from "node:path";
import { PrismaConfig, defineConfig, env } from "prisma/config";
import { config as dotenvFlowConfig } from "dotenv-flow";

const rootDir = path.resolve(__dirname, "../..");

dotenvFlowConfig({
  path: rootDir,
  node_env: process.env.NODE_ENV,
});

export default defineConfig({
  schema: path.join(__dirname, "models"),
  migrations: {
    path: path.join(__dirname, "migrations"),
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
}) satisfies PrismaConfig;
