import { Module } from '@nestjs/common';
import { CollectorModule } from './collector/collector.module';
import { MetricsModule } from './metrics/metrics.module';
import { NatsModule } from './nats/nats.module';
import { HealthController } from './health/health.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [PrismaModule, CollectorModule, MetricsModule, NatsModule],
    controllers: [HealthController],
})
export class AppModule {}
