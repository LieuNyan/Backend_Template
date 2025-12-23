import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @HealthCheck()
  @Get()
  checkHealth(): HealthCheckResult {
    return this.healthService.checkHealth();
  }
}
