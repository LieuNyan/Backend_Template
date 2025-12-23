import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import path from 'node:path';
import { config as dotenvFlowConfig } from 'dotenv-flow';

// Monorepo root directory
const rootDir = path.resolve(__dirname, '../../..');

// Load environment variables from root directory
dotenvFlowConfig({
  path: rootDir,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_MAINSERVICE ?? 3000);
}
bootstrap();

// app.enableShutdownHooks()
