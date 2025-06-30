import { Controller, Post, Body, Logger, BadRequestException } from '@nestjs/common';
import { EventSchema } from './schemas/zodSchema';
import { MetricsService } from '../metrics/metrics.service';
import { NatsService } from '../nats/nats.service';

@Controller('events')
export class EventsController {
    constructor(
        private readonly metricsService: MetricsService,
        private readonly natsService: NatsService,
    ) {}

    @Post()
    async handleEvent(@Body() body: unknown) {
        try {
            // 🧪 Validate with Zod
            const parsedEvent = EventSchema.parse(body);

            // 📤 Send to NATS
            const subject = parsedEvent.source === 'facebook' ? 'events.facebook' : 'events.tiktok';

            await this.natsService.publish(subject, parsedEvent);

            // 📈 Prometheus metric
            this.metricsService.eventsReceived.inc();

            return { status: 'accepted' };
        } catch (error) {
            Logger.error('Invalid event payload', error);
            throw new BadRequestException('Invalid event structure');
        }
    }
}
