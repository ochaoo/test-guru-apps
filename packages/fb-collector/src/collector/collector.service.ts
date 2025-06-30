import { Injectable, OnModuleInit } from '@nestjs/common';
import { NatsService } from '../nats/nats.service';
import { PrismaService } from '../prisma/prisma.service';
import { MetricsService } from '../metrics/metrics.service';
import { FacebookEventSchema } from '@event-system/common';

@Injectable()
export class CollectorService implements OnModuleInit {
    constructor(
        private readonly natsService: NatsService,
        private readonly prisma: PrismaService,
        private readonly metrics: MetricsService,
    ) {}

    async onModuleInit() {
        await this.natsService.subscribe('events.facebook', async data => {
            try {
                const event = FacebookEventSchema.parse(data);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                await this.prisma.event.create({
                    data: {
                        eventId: event.eventId,
                        timestamp: new Date(event.timestamp),
                        source: event.source,
                        funnelStage: event.funnelStage,
                        eventType: event.eventType,
                        raw: event,
                    },
                });
                this.metrics.processed.inc();
            } catch (e) {
                console.error('Facebook validation/DB error', e);
                this.metrics.failed.inc();
            }
        });
    }
}
