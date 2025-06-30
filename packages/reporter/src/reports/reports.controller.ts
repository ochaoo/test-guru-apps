import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { MetricsService } from '../metrics/metrics.service';

@Controller('/reports')
export class ReportsController {
    constructor(
        private readonly reports: ReportsService,
        private readonly metrics: MetricsService,
    ) {}

    @Get('/events')
    async getEvents(
        @Query('from') from?: string,
        @Query('to') to?: string,
        @Query('source') source?: string,
        @Query('funnelStage') funnelStage?: string,
        @Query('eventType') eventType?: string,
    ) {
        const end = this.metrics.reportsLatency.startTimer({ route: 'events' });
        const result = await this.reports.getEvents({ from, to, source, funnelStage, eventType });
        end();
        return result;
    }

    @Get('/revenue')
    async getRevenue(
        @Query('from') from?: string,
        @Query('to') to?: string,
        @Query('source') source?: string,
        @Query('campaignId') campaignId?: string,
    ) {
        const end = this.metrics.reportsLatency.startTimer({ route: 'revenue' });
        const result = await this.reports.getRevenue({ from, to, source, campaignId });
        end();
        return result;
    }

    @Get('/demographics')
    async getDemographics(@Query('from') from?: string, @Query('to') to?: string, @Query('source') source?: string) {
        const end = this.metrics.reportsLatency.startTimer({ route: 'demographics' });
        const result = await this.reports.getDemographics({ from, to, source });
        end();
        return result;
    }
}
