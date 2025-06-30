import { Injectable } from '@nestjs/common';
import { Registry, Counter } from 'prom-client';

@Injectable()
export class MetricsService {
    private registry = new Registry();

    public readonly processed = new Counter({
        name: 'fb_collector_events_processed_total',
        help: 'Processed Facebook events',
    });

    public readonly failed = new Counter({
        name: 'fb_collector_events_failed_total',
        help: 'Failed Facebook events',
    });

    constructor() {
        this.registry.registerMetric(this.processed);
        this.registry.registerMetric(this.failed);
    }

    getMetrics(): Promise<string> {
        return this.registry.metrics();
    }
}
