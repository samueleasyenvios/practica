export interface SessionSummaryType {
    id: number;
    website: string;
    stats: string;
    progressVariant: string;
    progressValue: number;
}

export interface BrowserTypes {
    browser: {
        name: string;
        icon: string;
        variant: string;
    };
    sessions: {
        value: number;
        rate: string;
    };
    bounce_rate: number;
    transactions: {
        value: number;
        rate: string;
    };
}

export interface TrafficSourceType {
    channel: string;
    sessions: {
        value: number;
        rate: string;
    };
    previewPeriod: {
        value: number;
        rate: string;
    };
    change: {
        value: string;
        direction: 'up' | 'down';
    };
}

export interface ChannelsTypes {
    channel: string;
    visits: string;
    progress: {
        value: number;
        variant?: string;
    };
}

export interface SocialMediaTrafficType {
    network: string;
    visits: string;
    progress: number;
}

export interface EngagementOverviewsTypes {
    duration: string;
    sessions: string;
    views: string;
}

const sessionSummary: SessionSummaryType[] = [
    {
        id: 1,
        website: 'www.getbootstrap.com',
        stats: '1,12,540',
        progressValue: 72,
        progressVariant: 'primary',
    },
    {
        id: 2,
        website: 'www.youtube.com',
        stats: '51,480',
        progressValue: 65,
        progressVariant: 'success',
    },
    {
        id: 3,
        website: 'www.dribbble.com',
        stats: '45,760',
        progressValue: 48,
        progressVariant: 'warning',
    },
    {
        id: 4,
        website: 'www.behance.net',
        stats: '98,512',
        progressValue: 59,
        progressVariant: 'primary',
    },
    {
        id: 5,
        website: 'www.vimeo.com',
        stats: '2,154',
        progressValue: 21,
        progressVariant: 'danger',
    },
];

const browserUsageData: BrowserTypes[] = [
    {
        browser: {
            name: 'Chrome',
            icon: 'chrome',
            variant: 'success',
        },
        sessions: {
            value: 10853,
            rate: '52%',
        },
        bounce_rate: 52.8,
        transactions: {
            value: 566,
            rate: '92%',
        },
    },
    {
        browser: {
            name: 'Safari',
            icon: 'safari',
            variant: 'info',
        },
        sessions: {
            value: 2545,
            rate: '47%',
        },
        bounce_rate: 47.54,
        transactions: {
            value: 498,
            rate: '81%',
        },
    },
    {
        browser: {
            name: 'Internet-Explorer',
            icon: 'internet-explorer',
            variant: 'warning',
        },
        sessions: {
            value: 1836,
            rate: '38%',
        },
        bounce_rate: 41.12,
        transactions: {
            value: 455,
            rate: '74%',
        },
    },
    {
        browser: {
            name: 'Opera',
            icon: 'opera',
            variant: 'danger',
        },
        sessions: {
            value: 1958,
            rate: '31%',
        },
        bounce_rate: 36.82,
        transactions: {
            value: 361,
            rate: '61%',
        },
    },
    {
        browser: {
            name: 'Firefox',
            icon: 'firefox',
            variant: 'blue',
        },
        sessions: {
            value: 1566,
            rate: '26%',
        },
        bounce_rate: 29.33,
        transactions: {
            value: 299,
            rate: '49%',
        },
    },
];

const trafficSources: TrafficSourceType[] = [
    {
        channel: 'Organic search',
        sessions: {
            value: 10853,
            rate: '52%',
        },
        previewPeriod: {
            value: 566,
            rate: '92%',
        },
        change: {
            value: '52.80%',
            direction: 'up',
        },
    },
    {
        channel: 'Direct',
        sessions: {
            value: 2545,
            rate: '47%',
        },
        previewPeriod: {
            value: 498,
            rate: '81%',
        },
        change: {
            value: '-17.20%',
            direction: 'down',
        },
    },
    {
        channel: 'Referal',
        sessions: {
            value: 1836,
            rate: '38%',
        },
        previewPeriod: {
            value: 455,
            rate: '74%',
        },
        change: {
            value: '41.12%',
            direction: 'up',
        },
    },
    {
        channel: 'Email',
        sessions: {
            value: 1958,
            rate: '31%',
        },
        previewPeriod: {
            value: 361,
            rate: '61%',
        },
        change: {
            value: '-8.24%',
            direction: 'down',
        },
    },
    {
        channel: 'Social',
        sessions: {
            value: 1566,
            rate: '26%',
        },
        previewPeriod: {
            value: 299,
            rate: '49%',
        },
        change: {
            value: '29.33%',
            direction: 'up',
        },
    },
];

const channels: ChannelsTypes[] = [
    {
        channel: 'Direct',
        visits: '2,050',
        progress: {
            value: 65,
        },
    },
    {
        channel: 'Organic Search',
        visits: '1,405',
        progress: {
            value: 45,
            variant: 'info',
        },
    },
    {
        channel: 'Refferal',
        visits: '750',
        progress: {
            value: 30,
            variant: 'warning',
        },
    },
    {
        channel: 'Social',
        visits: '540',
        progress: {
            value: 25,
            variant: 'danger',
        },
    },
];

const socialMediaTraffic: SocialMediaTrafficType[] = [
    {
        network: 'Facebook',
        visits: '2,250',
        progress: 65,
    },
    {
        network: 'Instagram',
        visits: '1,501',
        progress: 45,
    },
    {
        network: 'Twitter',
        visits: '750',
        progress: 30,
    },
    {
        network: 'LinkedIn',
        visits: '540',
        progress: 25,
    },
];

const engagementOverview: EngagementOverviewsTypes[] = [
    {
        duration: '0-30',
        sessions: '2,250',
        views: '4,250',
    },
    {
        duration: '31-60',
        sessions: '1,501',
        views: '2,050',
    },
    {
        duration: '61-120',
        sessions: '750',
        views: '1,600',
    },
    {
        duration: '121-240',
        sessions: '540',
        views: '1,040',
    },
];

export { sessionSummary, browserUsageData, trafficSources, channels, socialMediaTraffic, engagementOverview };
