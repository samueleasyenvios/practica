import React from 'react';
import { Col, Row } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';
import TodoList from '../../../components/TodoList';

import CampaignsChart from './CampaignChart';
import PerformanceDetails from './PerformanceDetails';
import RecentLeads from './RecentLeads';
import RevenueChart from './RevenueChart';
import Statistics from './Statistics';

// data
import { performanceDetails, recentLeads } from './data';

const CRMDashboard = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboards', path: '/dashboard/crm' },
                    { label: 'CRM', path: 'dashboard/crm', active: true },
                ]}
                title={'CRM'}
            />

            <Statistics />

            <Row>
                <Col xl={4}>
                    <CampaignsChart />
                </Col>
                <Col xl={8}>
                    <RevenueChart />
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <PerformanceDetails performanceDetails={performanceDetails} />
                </Col>
                <Col xl={7}>
                    <Row>
                        <Col lg={6}>
                            <RecentLeads recentLeads={recentLeads} />
                        </Col>
                        <Col lg={6}>
                            <TodoList addTodo={true} height={'292px'} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default CRMDashboard;
