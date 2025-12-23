import { Injectable } from '@nestjs/common';
import { HealthCheckResult } from '@nestjs/terminus';

@Injectable()
export class HealthService {
  checkHealth(): HealthCheckResult {
    return {
      status: 'ok',
      info: {},
      error: {},
      details: {},
    };
  }
}
