import { z } from 'zod';

const FunnelStageSchema = z.enum(['top', 'bottom']);

const FacebookUserLocationSchema = z.object({
    country: z.string(),
    city: z.string(),
});

const FacebookUserSchema = z.object({
    userId: z.string(),
    name: z.string(),
    age: z.number(),
    gender: z.enum(['male', 'female', 'non-binary']),
    location: FacebookUserLocationSchema,
});

const FacebookTopEventTypeSchema = z.enum(['ad.view', 'page.like', 'comment', 'video.view']);
const FacebookBottomEventTypeSchema = z.enum(['ad.click', 'form.submission', 'checkout.complete']);
const FacebookEventTypeSchema = z.union([FacebookTopEventTypeSchema, FacebookBottomEventTypeSchema]);

const FacebookEngagementTopSchema = z.object({
    actionTime: z.string(),
    referrer: z.enum(['newsfeed', 'marketplace', 'groups']),
    videoId: z.string().nullable(),
});

const FacebookEngagementBottomSchema = z.object({
    adId: z.string(),
    campaignId: z.string(),
    clickPosition: z.enum(['top_left', 'bottom_right', 'center']),
    device: z.enum(['mobile', 'desktop']),
    browser: z.enum(['Chrome', 'Firefox', 'Safari']),
    purchaseAmount: z.string().nullable(),
});

const FacebookEngagementSchema = z.union([FacebookEngagementTopSchema, FacebookEngagementBottomSchema]);

const FacebookEventSchema = z.object({
    eventId: z.string(),
    timestamp: z.string(),
    source: z.literal('facebook'),
    funnelStage: FunnelStageSchema,
    eventType: FacebookEventTypeSchema,
    data: z.object({
        user: FacebookUserSchema,
        engagement: FacebookEngagementSchema,
    }),
});

const TiktokTopEventTypeSchema = z.enum(['video.view', 'like', 'share', 'comment']);
const TiktokBottomEventTypeSchema = z.enum(['profile.visit', 'purchase', 'follow']);
const TiktokEventTypeSchema = z.union([TiktokTopEventTypeSchema, TiktokBottomEventTypeSchema]);

const TiktokUserSchema = z.object({
    userId: z.string(),
    username: z.string(),
    followers: z.number(),
});

const TiktokEngagementTopSchema = z.object({
    watchTime: z.number(),
    percentageWatched: z.number(),
    device: z.enum(['Android', 'iOS', 'Desktop']),
    country: z.string(),
    videoId: z.string(),
});

const TiktokEngagementBottomSchema = z.object({
    actionTime: z.string(),
    profileId: z.string().nullable(),
    purchasedItem: z.string().nullable(),
    purchaseAmount: z.string().nullable(),
});

const TiktokEngagementSchema = z.union([TiktokEngagementTopSchema, TiktokEngagementBottomSchema]);

const TiktokEventSchema = z.object({
    eventId: z.string(),
    timestamp: z.string(),
    source: z.literal('tiktok'),
    funnelStage: FunnelStageSchema,
    eventType: TiktokEventTypeSchema,
    data: z.object({
        user: TiktokUserSchema,
        engagement: TiktokEngagementSchema,
    }),
});

const EventSchema = z.union([FacebookEventSchema, TiktokEventSchema]);

export {
    FunnelStageSchema,
    FacebookUserLocationSchema,
    FacebookUserSchema,
    FacebookTopEventTypeSchema,
    FacebookBottomEventTypeSchema,
    FacebookEventTypeSchema,
    FacebookEngagementTopSchema,
    FacebookEngagementBottomSchema,
    FacebookEngagementSchema,
    FacebookEventSchema,
    TiktokTopEventTypeSchema,
    TiktokBottomEventTypeSchema,
    TiktokEventTypeSchema,
    TiktokUserSchema,
    TiktokEngagementTopSchema,
    TiktokEngagementBottomSchema,
    TiktokEngagementSchema,
    TiktokEventSchema,
    EventSchema,
};
