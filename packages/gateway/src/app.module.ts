import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { NatsModule } from './nats/nats.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), EventsModule, MetricsModule, HealthModule, NatsModule],
})
export class AppModule {}
