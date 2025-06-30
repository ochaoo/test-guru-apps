import { Module } from '@nestjs/common';
import { CollectorService } from './collector.service';
import { NatsModule } from '../nats/nats.module';
import { PrismaModule } from '../prisma/prisma.module';
import { MetricsModule } from '../metrics/metrics.module';

@Module({
    imports: [NatsModule, PrismaModule, MetricsModule],
    providers: [CollectorService],
})
export class CollectorModule {}
