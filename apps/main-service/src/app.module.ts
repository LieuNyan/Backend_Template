import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './core/prisma/prisma.module';

@Module({
  imports: [HealthModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
