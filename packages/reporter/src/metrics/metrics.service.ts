import { Injectable } from '@nestjs/common';
import { Registry, Histogram } from 'prom-client';

@Injectable()
export class MetricsService {
    private readonly registry = new Registry();

    public readonly reportsLatency = new Histogram({
        name: 'reporter_reports_latency_seconds',
        help: 'Latency of report endpoints',
        labelNames: ['route'],
        buckets: [0.1, 0.3, 0.5, 1, 2, 5],
    });

    constructor() {
        this.registry.registerMetric(this.reportsLatency);
    }

    async getMetrics(): Promise<string> {
        return this.registry.metrics();
    }
}
