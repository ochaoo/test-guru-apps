import { Injectable } from '@nestjs/common';
import { Registry, Counter } from 'prom-client';

@Injectable()
export class MetricsService {
    private registry = new Registry();

    public readonly processed = new Counter({
        name: 'ttk_collector_events_processed_total',
        help: 'Processed TikTok events',
    });
    public readonly failed = new Counter({
        name: 'ttk_collector_events_failed_total',
        help: 'Failed TikTok events',
    });

    constructor() {
        this.registry.registerMetric(this.processed);
        this.registry.registerMetric(this.failed);
    }

    getMetrics(): Promise<string> {
        return this.registry.metrics();
    }
}
