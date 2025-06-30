import { Injectable } from '@nestjs/common';
import { Registry, Counter } from 'prom-client';

@Injectable()
export class MetricsService {
    private readonly registry = new Registry();

    public readonly eventsReceived = new Counter({
        name: 'gateway_events_received_total',
        help: 'Total number of events received by the gateway',
    });

    constructor() {
        this.registry.registerMetric(this.eventsReceived);
    }

    getMetrics(): Promise<string> {
        return this.registry.metrics();
    }
}
