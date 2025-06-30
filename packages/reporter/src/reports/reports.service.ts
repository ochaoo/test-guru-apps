import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { Event } from '@prisma/client';
import { Event } from '../../generated/prisma/index';

interface EventFilters {
    from?: string;
    to?: string;
    source?: string;
    funnelStage?: string;
    eventType?: string;
}

interface RevenueFilters {
    from?: string;
    to?: string;
    source?: string;
    campaignId?: string;
}

interface DemographicsFilters {
    from?: string;
    to?: string;
    source?: string;
}

interface RawEventData {
    data?: {
        engagement?: {
            campaignId?: string;
            purchaseAmount?: string;
        };
        user?: any;
    };
}

@Injectable()
export class ReportsService {
    constructor(private readonly prisma: PrismaService) {}

    async getEvents(filters: EventFilters) {
        const where: Record<string, unknown> = {};

        if (filters.from || filters.to) {
            where.timestamp = {};
            if (filters.from) (where.timestamp as any).gte = new Date(filters.from);
            if (filters.to) (where.timestamp as any).lte = new Date(filters.to);
        }
        if (filters.source) where.source = filters.source;
        if (filters.funnelStage) where.funnelStage = filters.funnelStage;
        if (filters.eventType) where.eventType = filters.eventType;

        const grouped: {
            eventType: string;
            _count: { eventType: number };
        }[] = await this.prisma.event.groupBy({
            by: ['eventType'],
            where,
            _count: { eventType: true },
        });

        return grouped.map(g => ({
            eventType: g.eventType,
            count: g._count.eventType,
        }));
    }

    async getRevenue(filters: RevenueFilters) {
        const where: Record<string, unknown> = {};

        if (filters.from || filters.to) {
            where.timestamp = {};
            if (filters.from) (where.timestamp as any).gte = new Date(filters.from);
            if (filters.to) (where.timestamp as any).lte = new Date(filters.to);
        }
        if (filters.source) where.source = filters.source;
        if (filters.campaignId) {
            where.raw = {
                path: ['data', 'engagement', 'campaignId'],
                equals: filters.campaignId,
            };
        }

        const events: Event[] = await this.prisma.event.findMany({ where });

        let totalRevenue = 0;
        for (const e of events) {
            const raw = e.raw as RawEventData;
            const amount = raw.data?.engagement?.purchaseAmount;
            if (amount) {
                totalRevenue += parseFloat(amount);
            }
        }

        return { totalRevenue };
    }

    async getDemographics(filters: DemographicsFilters) {
        const where: Record<string, unknown> = {};

        if (filters.from || filters.to) {
            where.timestamp = {};
            if (filters.from) (where.timestamp as any).gte = new Date(filters.from);
            if (filters.to) (where.timestamp as any).lte = new Date(filters.to);
        }
        if (filters.source) where.source = filters.source;

        const events: Event[] = await this.prisma.event.findMany({ where });

        if (filters.source === 'facebook' || filters.source === 'tiktok') {
            const demographics = events
                .map(e => (e.raw as RawEventData).data?.user)
                .filter((v): v is NonNullable<typeof v> => Boolean(v));

            return demographics;
        } else {
            return [];
        }
    }
}
