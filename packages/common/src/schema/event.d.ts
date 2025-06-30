import { z } from "zod";
declare const FunnelStageSchema: z.ZodEnum<["top", "bottom"]>;
declare const FacebookUserLocationSchema: z.ZodObject<{
    country: z.ZodString;
    city: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    city: string;
}, {
    country: string;
    city: string;
}>;
declare const FacebookUserSchema: z.ZodObject<{
    userId: z.ZodString;
    name: z.ZodString;
    age: z.ZodNumber;
    gender: z.ZodEnum<["male", "female", "non-binary"]>;
    location: z.ZodObject<{
        country: z.ZodString;
        city: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country: string;
        city: string;
    }, {
        country: string;
        city: string;
    }>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    name: string;
    age: number;
    gender: "male" | "female" | "non-binary";
    location: {
        country: string;
        city: string;
    };
}, {
    userId: string;
    name: string;
    age: number;
    gender: "male" | "female" | "non-binary";
    location: {
        country: string;
        city: string;
    };
}>;
declare const FacebookTopEventTypeSchema: z.ZodEnum<["ad.view", "page.like", "comment", "video.view"]>;
declare const FacebookBottomEventTypeSchema: z.ZodEnum<["ad.click", "form.submission", "checkout.complete"]>;
declare const FacebookEventTypeSchema: z.ZodUnion<[z.ZodEnum<["ad.view", "page.like", "comment", "video.view"]>, z.ZodEnum<["ad.click", "form.submission", "checkout.complete"]>]>;
declare const FacebookEngagementTopSchema: z.ZodObject<{
    actionTime: z.ZodString;
    referrer: z.ZodEnum<["newsfeed", "marketplace", "groups"]>;
    videoId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    actionTime: string;
    referrer: "newsfeed" | "marketplace" | "groups";
    videoId: string | null;
}, {
    actionTime: string;
    referrer: "newsfeed" | "marketplace" | "groups";
    videoId: string | null;
}>;
declare const FacebookEngagementBottomSchema: z.ZodObject<{
    adId: z.ZodString;
    campaignId: z.ZodString;
    clickPosition: z.ZodEnum<["top_left", "bottom_right", "center"]>;
    device: z.ZodEnum<["mobile", "desktop"]>;
    browser: z.ZodEnum<["Chrome", "Firefox", "Safari"]>;
    purchaseAmount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    adId: string;
    campaignId: string;
    clickPosition: "top_left" | "bottom_right" | "center";
    device: "mobile" | "desktop";
    browser: "Chrome" | "Firefox" | "Safari";
    purchaseAmount: string | null;
}, {
    adId: string;
    campaignId: string;
    clickPosition: "top_left" | "bottom_right" | "center";
    device: "mobile" | "desktop";
    browser: "Chrome" | "Firefox" | "Safari";
    purchaseAmount: string | null;
}>;
declare const FacebookEngagementSchema: z.ZodUnion<[z.ZodObject<{
    actionTime: z.ZodString;
    referrer: z.ZodEnum<["newsfeed", "marketplace", "groups"]>;
    videoId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    actionTime: string;
    referrer: "newsfeed" | "marketplace" | "groups";
    videoId: string | null;
}, {
    actionTime: string;
    referrer: "newsfeed" | "marketplace" | "groups";
    videoId: string | null;
}>, z.ZodObject<{
    adId: z.ZodString;
    campaignId: z.ZodString;
    clickPosition: z.ZodEnum<["top_left", "bottom_right", "center"]>;
    device: z.ZodEnum<["mobile", "desktop"]>;
    browser: z.ZodEnum<["Chrome", "Firefox", "Safari"]>;
    purchaseAmount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    adId: string;
    campaignId: string;
    clickPosition: "top_left" | "bottom_right" | "center";
    device: "mobile" | "desktop";
    browser: "Chrome" | "Firefox" | "Safari";
    purchaseAmount: string | null;
}, {
    adId: string;
    campaignId: string;
    clickPosition: "top_left" | "bottom_right" | "center";
    device: "mobile" | "desktop";
    browser: "Chrome" | "Firefox" | "Safari";
    purchaseAmount: string | null;
}>]>;
declare const FacebookEventSchema: z.ZodObject<{
    eventId: z.ZodString;
    timestamp: z.ZodString;
    source: z.ZodLiteral<"facebook">;
    funnelStage: z.ZodEnum<["top", "bottom"]>;
    eventType: z.ZodUnion<[z.ZodEnum<["ad.view", "page.like", "comment", "video.view"]>, z.ZodEnum<["ad.click", "form.submission", "checkout.complete"]>]>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            userId: z.ZodString;
            name: z.ZodString;
            age: z.ZodNumber;
            gender: z.ZodEnum<["male", "female", "non-binary"]>;
            location: z.ZodObject<{
                country: z.ZodString;
                city: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                country: string;
                city: string;
            }, {
                country: string;
                city: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        }, {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        }>;
        engagement: z.ZodUnion<[z.ZodObject<{
            actionTime: z.ZodString;
            referrer: z.ZodEnum<["newsfeed", "marketplace", "groups"]>;
            videoId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        }, {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        }>, z.ZodObject<{
            adId: z.ZodString;
            campaignId: z.ZodString;
            clickPosition: z.ZodEnum<["top_left", "bottom_right", "center"]>;
            device: z.ZodEnum<["mobile", "desktop"]>;
            browser: z.ZodEnum<["Chrome", "Firefox", "Safari"]>;
            purchaseAmount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        }, {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    }, {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    eventId: string;
    timestamp: string;
    source: "facebook";
    funnelStage: "top" | "bottom";
    eventType: "ad.view" | "page.like" | "comment" | "video.view" | "ad.click" | "form.submission" | "checkout.complete";
    data: {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    };
}, {
    eventId: string;
    timestamp: string;
    source: "facebook";
    funnelStage: "top" | "bottom";
    eventType: "ad.view" | "page.like" | "comment" | "video.view" | "ad.click" | "form.submission" | "checkout.complete";
    data: {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    };
}>;
declare const TiktokTopEventTypeSchema: z.ZodEnum<["video.view", "like", "share", "comment"]>;
declare const TiktokBottomEventTypeSchema: z.ZodEnum<["profile.visit", "purchase", "follow"]>;
declare const TiktokEventTypeSchema: z.ZodUnion<[z.ZodEnum<["video.view", "like", "share", "comment"]>, z.ZodEnum<["profile.visit", "purchase", "follow"]>]>;
declare const TiktokUserSchema: z.ZodObject<{
    userId: z.ZodString;
    username: z.ZodString;
    followers: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    userId: string;
    username: string;
    followers: number;
}, {
    userId: string;
    username: string;
    followers: number;
}>;
declare const TiktokEngagementTopSchema: z.ZodObject<{
    watchTime: z.ZodNumber;
    percentageWatched: z.ZodNumber;
    device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
    country: z.ZodString;
    videoId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    videoId: string;
    device: "Android" | "iOS" | "Desktop";
    watchTime: number;
    percentageWatched: number;
}, {
    country: string;
    videoId: string;
    device: "Android" | "iOS" | "Desktop";
    watchTime: number;
    percentageWatched: number;
}>;
declare const TiktokEngagementBottomSchema: z.ZodObject<{
    actionTime: z.ZodString;
    profileId: z.ZodNullable<z.ZodString>;
    purchasedItem: z.ZodNullable<z.ZodString>;
    purchaseAmount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    actionTime: string;
    purchaseAmount: string | null;
    profileId: string | null;
    purchasedItem: string | null;
}, {
    actionTime: string;
    purchaseAmount: string | null;
    profileId: string | null;
    purchasedItem: string | null;
}>;
declare const TiktokEngagementSchema: z.ZodUnion<[z.ZodObject<{
    watchTime: z.ZodNumber;
    percentageWatched: z.ZodNumber;
    device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
    country: z.ZodString;
    videoId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    videoId: string;
    device: "Android" | "iOS" | "Desktop";
    watchTime: number;
    percentageWatched: number;
}, {
    country: string;
    videoId: string;
    device: "Android" | "iOS" | "Desktop";
    watchTime: number;
    percentageWatched: number;
}>, z.ZodObject<{
    actionTime: z.ZodString;
    profileId: z.ZodNullable<z.ZodString>;
    purchasedItem: z.ZodNullable<z.ZodString>;
    purchaseAmount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    actionTime: string;
    purchaseAmount: string | null;
    profileId: string | null;
    purchasedItem: string | null;
}, {
    actionTime: string;
    purchaseAmount: string | null;
    profileId: string | null;
    purchasedItem: string | null;
}>]>;
declare const TiktokEventSchema: z.ZodObject<{
    eventId: z.ZodString;
    timestamp: z.ZodString;
    source: z.ZodLiteral<"tiktok">;
    funnelStage: z.ZodEnum<["top", "bottom"]>;
    eventType: z.ZodUnion<[z.ZodEnum<["video.view", "like", "share", "comment"]>, z.ZodEnum<["profile.visit", "purchase", "follow"]>]>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            userId: z.ZodString;
            username: z.ZodString;
            followers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            username: string;
            followers: number;
        }, {
            userId: string;
            username: string;
            followers: number;
        }>;
        engagement: z.ZodUnion<[z.ZodObject<{
            watchTime: z.ZodNumber;
            percentageWatched: z.ZodNumber;
            device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
            country: z.ZodString;
            videoId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        }, {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        }>, z.ZodObject<{
            actionTime: z.ZodString;
            profileId: z.ZodNullable<z.ZodString>;
            purchasedItem: z.ZodNullable<z.ZodString>;
            purchaseAmount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        }, {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    }, {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    eventId: string;
    timestamp: string;
    source: "tiktok";
    funnelStage: "top" | "bottom";
    eventType: "comment" | "video.view" | "like" | "share" | "profile.visit" | "purchase" | "follow";
    data: {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    };
}, {
    eventId: string;
    timestamp: string;
    source: "tiktok";
    funnelStage: "top" | "bottom";
    eventType: "comment" | "video.view" | "like" | "share" | "profile.visit" | "purchase" | "follow";
    data: {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    };
}>;
declare const EventSchema: z.ZodUnion<[z.ZodObject<{
    eventId: z.ZodString;
    timestamp: z.ZodString;
    source: z.ZodLiteral<"facebook">;
    funnelStage: z.ZodEnum<["top", "bottom"]>;
    eventType: z.ZodUnion<[z.ZodEnum<["ad.view", "page.like", "comment", "video.view"]>, z.ZodEnum<["ad.click", "form.submission", "checkout.complete"]>]>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            userId: z.ZodString;
            name: z.ZodString;
            age: z.ZodNumber;
            gender: z.ZodEnum<["male", "female", "non-binary"]>;
            location: z.ZodObject<{
                country: z.ZodString;
                city: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                country: string;
                city: string;
            }, {
                country: string;
                city: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        }, {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        }>;
        engagement: z.ZodUnion<[z.ZodObject<{
            actionTime: z.ZodString;
            referrer: z.ZodEnum<["newsfeed", "marketplace", "groups"]>;
            videoId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        }, {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        }>, z.ZodObject<{
            adId: z.ZodString;
            campaignId: z.ZodString;
            clickPosition: z.ZodEnum<["top_left", "bottom_right", "center"]>;
            device: z.ZodEnum<["mobile", "desktop"]>;
            browser: z.ZodEnum<["Chrome", "Firefox", "Safari"]>;
            purchaseAmount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        }, {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    }, {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    eventId: string;
    timestamp: string;
    source: "facebook";
    funnelStage: "top" | "bottom";
    eventType: "ad.view" | "page.like" | "comment" | "video.view" | "ad.click" | "form.submission" | "checkout.complete";
    data: {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    };
}, {
    eventId: string;
    timestamp: string;
    source: "facebook";
    funnelStage: "top" | "bottom";
    eventType: "ad.view" | "page.like" | "comment" | "video.view" | "ad.click" | "form.submission" | "checkout.complete";
    data: {
        user: {
            userId: string;
            name: string;
            age: number;
            gender: "male" | "female" | "non-binary";
            location: {
                country: string;
                city: string;
            };
        };
        engagement: {
            actionTime: string;
            referrer: "newsfeed" | "marketplace" | "groups";
            videoId: string | null;
        } | {
            adId: string;
            campaignId: string;
            clickPosition: "top_left" | "bottom_right" | "center";
            device: "mobile" | "desktop";
            browser: "Chrome" | "Firefox" | "Safari";
            purchaseAmount: string | null;
        };
    };
}>, z.ZodObject<{
    eventId: z.ZodString;
    timestamp: z.ZodString;
    source: z.ZodLiteral<"tiktok">;
    funnelStage: z.ZodEnum<["top", "bottom"]>;
    eventType: z.ZodUnion<[z.ZodEnum<["video.view", "like", "share", "comment"]>, z.ZodEnum<["profile.visit", "purchase", "follow"]>]>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            userId: z.ZodString;
            username: z.ZodString;
            followers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            username: string;
            followers: number;
        }, {
            userId: string;
            username: string;
            followers: number;
        }>;
        engagement: z.ZodUnion<[z.ZodObject<{
            watchTime: z.ZodNumber;
            percentageWatched: z.ZodNumber;
            device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
            country: z.ZodString;
            videoId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        }, {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        }>, z.ZodObject<{
            actionTime: z.ZodString;
            profileId: z.ZodNullable<z.ZodString>;
            purchasedItem: z.ZodNullable<z.ZodString>;
            purchaseAmount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        }, {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    }, {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    eventId: string;
    timestamp: string;
    source: "tiktok";
    funnelStage: "top" | "bottom";
    eventType: "comment" | "video.view" | "like" | "share" | "profile.visit" | "purchase" | "follow";
    data: {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    };
}, {
    eventId: string;
    timestamp: string;
    source: "tiktok";
    funnelStage: "top" | "bottom";
    eventType: "comment" | "video.view" | "like" | "share" | "profile.visit" | "purchase" | "follow";
    data: {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            country: string;
            videoId: string;
            device: "Android" | "iOS" | "Desktop";
            watchTime: number;
            percentageWatched: number;
        } | {
            actionTime: string;
            purchaseAmount: string | null;
            profileId: string | null;
            purchasedItem: string | null;
        };
    };
}>]>;
export { FunnelStageSchema, FacebookUserLocationSchema, FacebookUserSchema, FacebookTopEventTypeSchema, FacebookBottomEventTypeSchema, FacebookEventTypeSchema, FacebookEngagementTopSchema, FacebookEngagementBottomSchema, FacebookEngagementSchema, FacebookEventSchema, TiktokTopEventTypeSchema, TiktokBottomEventTypeSchema, TiktokEventTypeSchema, TiktokUserSchema, TiktokEngagementTopSchema, TiktokEngagementBottomSchema, TiktokEngagementSchema, TiktokEventSchema, EventSchema, };
//# sourceMappingURL=event.d.ts.map