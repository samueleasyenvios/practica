import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import Statistics from './Statistics';
import RevenueChart from './RevenueChart';
import SalesChart from './SalesChart';
import MarketingChart from './MarketingChart';
import RevenueChartByLocation from './RevenueChartByLocation';
import TopSellingProducts from './TopSellingProducts';
import RevenueHistory from './RevenueHistory';
import PerformanceChart from './PerformanceChart';

// dummy data
import { products, revenueHistory } from './data';

const SalesDashboard = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboards', path: '/dashboard/sales' },
                    { label: 'Sales', path: '/dashboard/sales', active: true },
                ]}
                title={'Welcome !'}
            />

            <Statistics />

            <Row>
                <Col xl={4} lg={6}>
                    <RevenueChart />
                </Col>
                <Col xl={4} lg={6}>
                    <SalesChart />
                </Col>
                <Col xl={4}>
                    <MarketingChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <RevenueChartByLocation />
                </Col>
                <Col xl={6}>
                    <TopSellingProducts products={products} />
                </Col>
            </Row>

            <Row>
                <Col xl={8}>
                    <RevenueHistory revenueHistory={revenueHistory} />
                </Col>
                <Col xl={4}>
                    <PerformanceChart />
                </Col>
            </Row>
        </>
    );
};

export default SalesDashboard;
