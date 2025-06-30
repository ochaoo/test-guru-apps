"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = exports.TiktokEventSchema = exports.TiktokEngagementSchema = exports.TiktokEngagementBottomSchema = exports.TiktokEngagementTopSchema = exports.TiktokUserSchema = exports.TiktokEventTypeSchema = exports.TiktokBottomEventTypeSchema = exports.TiktokTopEventTypeSchema = exports.FacebookEventSchema = exports.FacebookEngagementSchema = exports.FacebookEngagementBottomSchema = exports.FacebookEngagementTopSchema = exports.FacebookEventTypeSchema = exports.FacebookBottomEventTypeSchema = exports.FacebookTopEventTypeSchema = exports.FacebookUserSchema = exports.FacebookUserLocationSchema = exports.FunnelStageSchema = void 0;
const zod_1 = require("zod");
const FunnelStageSchema = zod_1.z.enum(["top", "bottom"]);
exports.FunnelStageSchema = FunnelStageSchema;
const FacebookUserLocationSchema = zod_1.z.object({
    country: zod_1.z.string(),
    city: zod_1.z.string(),
});
exports.FacebookUserLocationSchema = FacebookUserLocationSchema;
const FacebookUserSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    gender: zod_1.z.enum(["male", "female", "non-binary"]),
    location: FacebookUserLocationSchema,
});
exports.FacebookUserSchema = FacebookUserSchema;
const FacebookTopEventTypeSchema = zod_1.z.enum(["ad.view", "page.like", "comment", "video.view"]);
exports.FacebookTopEventTypeSchema = FacebookTopEventTypeSchema;
const FacebookBottomEventTypeSchema = zod_1.z.enum(["ad.click", "form.submission", "checkout.complete"]);
exports.FacebookBottomEventTypeSchema = FacebookBottomEventTypeSchema;
const FacebookEventTypeSchema = zod_1.z.union([FacebookTopEventTypeSchema, FacebookBottomEventTypeSchema]);
exports.FacebookEventTypeSchema = FacebookEventTypeSchema;
const FacebookEngagementTopSchema = zod_1.z.object({
    actionTime: zod_1.z.string(),
    referrer: zod_1.z.enum(["newsfeed", "marketplace", "groups"]),
    videoId: zod_1.z.string().nullable(),
});
exports.FacebookEngagementTopSchema = FacebookEngagementTopSchema;
const FacebookEngagementBottomSchema = zod_1.z.object({
    adId: zod_1.z.string(),
    campaignId: zod_1.z.string(),
    clickPosition: zod_1.z.enum(["top_left", "bottom_right", "center"]),
    device: zod_1.z.enum(["mobile", "desktop"]),
    browser: zod_1.z.enum(["Chrome", "Firefox", "Safari"]),
    purchaseAmount: zod_1.z.string().nullable(),
});
exports.FacebookEngagementBottomSchema = FacebookEngagementBottomSchema;
const FacebookEngagementSchema = zod_1.z.union([FacebookEngagementTopSchema, FacebookEngagementBottomSchema]);
exports.FacebookEngagementSchema = FacebookEngagementSchema;
const FacebookEventSchema = zod_1.z.object({
    eventId: zod_1.z.string(),
    timestamp: zod_1.z.string(),
    source: zod_1.z.literal("facebook"),
    funnelStage: FunnelStageSchema,
    eventType: FacebookEventTypeSchema,
    data: zod_1.z.object({
        user: FacebookUserSchema,
        engagement: FacebookEngagementSchema,
    }),
});
exports.FacebookEventSchema = FacebookEventSchema;
const TiktokTopEventTypeSchema = zod_1.z.enum(["video.view", "like", "share", "comment"]);
exports.TiktokTopEventTypeSchema = TiktokTopEventTypeSchema;
const TiktokBottomEventTypeSchema = zod_1.z.enum(["profile.visit", "purchase", "follow"]);
exports.TiktokBottomEventTypeSchema = TiktokBottomEventTypeSchema;
const TiktokEventTypeSchema = zod_1.z.union([TiktokTopEventTypeSchema, TiktokBottomEventTypeSchema]);
exports.TiktokEventTypeSchema = TiktokEventTypeSchema;
const TiktokUserSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    username: zod_1.z.string(),
    followers: zod_1.z.number(),
});
exports.TiktokUserSchema = TiktokUserSchema;
const TiktokEngagementTopSchema = zod_1.z.object({
    watchTime: zod_1.z.number(),
    percentageWatched: zod_1.z.number(),
    device: zod_1.z.enum(["Android", "iOS", "Desktop"]),
    country: zod_1.z.string(),
    videoId: zod_1.z.string(),
});
exports.TiktokEngagementTopSchema = TiktokEngagementTopSchema;
const TiktokEngagementBottomSchema = zod_1.z.object({
    actionTime: zod_1.z.string(),
    profileId: zod_1.z.string().nullable(),
    purchasedItem: zod_1.z.string().nullable(),
    purchaseAmount: zod_1.z.string().nullable(),
});
exports.TiktokEngagementBottomSchema = TiktokEngagementBottomSchema;
const TiktokEngagementSchema = zod_1.z.union([TiktokEngagementTopSchema, TiktokEngagementBottomSchema]);
exports.TiktokEngagementSchema = TiktokEngagementSchema;
const TiktokEventSchema = zod_1.z.object({
    eventId: zod_1.z.string(),
    timestamp: zod_1.z.string(),
    source: zod_1.z.literal("tiktok"),
    funnelStage: FunnelStageSchema,
    eventType: TiktokEventTypeSchema,
    data: zod_1.z.object({
        user: TiktokUserSchema,
        engagement: TiktokEngagementSchema,
    }),
});
exports.TiktokEventSchema = TiktokEventSchema;
const EventSchema = zod_1.z.union([FacebookEventSchema, TiktokEventSchema]);
exports.EventSchema = EventSchema;
//# sourceMappingURL=event.js.map