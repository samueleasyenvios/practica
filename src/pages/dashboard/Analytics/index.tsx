import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';

import Statistics from './Statistics';
import SessionOverview from './SessionOverview';
import BrowserUsage from './BrowserUsage';
import TrafficSources from './TrafficSources';
import Channels from './Channels';
import SocialMediaTraffic from './SocialMediaTraffic';
import EngagementOverviews from './EngagementOverviews';

// dummy data
import {
    sessionSummary,
    browserUsageData,
    trafficSources,
    channels,
    socialMediaTraffic,
    engagementOverview,
} from './data';

const AnalyticsDashboard = () => {
    const [showAlert, setShowAlert] = useState<boolean>(true);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboards', path: '/dashboard/analytics' },
                    { label: 'Analytics', path: 'dashboard/analytics', active: true },
                ]}
                title={'Analytics'}
            />

            <Row>
                <Col xl={3} lg={4}>
                    <Alert
                        show={showAlert}
                        variant="info"
                        className="mb-3"
                        onClose={() => setShowAlert(false)}
                        dismissible
                    >
                        Property MN7xx is not receiving hits. Either your site is not receiving any sessions.
                    </Alert>

                    <Statistics
                        title="Active Users"
                        stats={121}
                        trend={{
                            title: 'Since last month',
                            stats: '22506',
                            direction: 'up',
                            rate: '10.25%',
                        }}
                    />

                    <Statistics
                        title="Views Per Minute"
                        stats={485}
                        trend={{
                            title: 'Since previous week',
                            stats: '8541',
                            direction: 'down',
                            rate: '2.63%',
                        }}
                    />
                </Col>
                <Col xl={9} lg={8}>
                    <SessionOverview sessionSummary={sessionSummary} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BrowserUsage browserUsageData={browserUsageData} />
                </Col>
                <Col xl={6}>
                    <TrafficSources trafficSources={trafficSources} />
                </Col>
            </Row>

            <Row>
                <Col xl={4} lg={6}>
                    <Channels channels={channels} />
                </Col>
                <Col xl={4} lg={6}>
                    <SocialMediaTraffic socialMediaTraffic={socialMediaTraffic} />
                </Col>
                <Col xl={4} lg={6}>
                    <EngagementOverviews engagementOverview={engagementOverview} />
                </Col>
            </Row>
        </>
    );
};

export default AnalyticsDashboard;
