import { Injectable } from '@nestjs/common';
import { HealthIndicatorResult } from '@nestjs/terminus';
import { PrismaService } from '../core/prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private readonly prismaService: PrismaService) {}

  async ping(): Promise<HealthIndicatorResult> {
    return { app: { status: 'up' } };
  }

  async prisma(): Promise<HealthIndicatorResult> {
    try {
      await this.prismaService.$queryRaw`SELECT 1`;
      return { prisma: { status: 'up' } };
    } catch (e) {
      throw e;
    }
  }
}
