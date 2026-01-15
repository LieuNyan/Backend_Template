import { envSchema, type Env } from './schema';

import { config as dotenvFlowConfig } from 'dotenv-flow';
import path from 'node:path';

// Monorepo root directory
const rootDir = path.resolve(process.cwd(), '../..');

// Load environment variables from root directory
dotenvFlowConfig({
  path: rootDir,
});

export function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    console.error('❌ Environment validation failed');
    for (const issue of result.error.issues) {
      console.error(`- ${issue.path.join('.')}: ${issue.message}`);
    }
    process.exit(1);
  }

  return result.data;
}

/** 환경 변수
 * @description 앱 내에서 사용하는 환경 변수 객체
 * @note 앱 내 싱글톤 패턴으로 존재하며, 앱 시작 시 한번만 파싱됩니다.
 * @note 앱 시작 시 값이 존재하지 않을 경우 앱이 강제 종료됩니다.
 */
export const envConfig = validateEnv();
