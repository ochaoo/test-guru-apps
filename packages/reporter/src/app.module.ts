import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { MetricsModule } from './metrics/metrics.module';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';

@Module({
    imports: [ReportsModule, MetricsModule, PrismaModule, HealthModule],
})
export class AppModule {}
