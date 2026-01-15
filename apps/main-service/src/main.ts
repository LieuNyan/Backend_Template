import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnv } from './config/env';

// Validate environment variables when the application starts
validateEnv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_MAINSERVICE ?? 3000);
}
bootstrap();

// app.enableShutdownHooks()
