import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [HealthModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
