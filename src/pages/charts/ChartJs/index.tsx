import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import PolarChart from './PolarChart';
import RadarChart from './RadarChart';

const ChartJS = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Charts', path: '/ui/charts/chartjs' },
                    { label: 'Chartjs', path: 'ui/charts/chartjs', active: true },
                ]}
                title={'Chartjs'}
            />

            <Row>
                <Col lg={6}>
                    <LineChart />
                </Col>
                <Col lg={6}>
                    <BarChart />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <PieChart />
                </Col>
                <Col lg={6}>
                    <DonutChart />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <PolarChart />
                </Col>
                <Col lg={6}>
                    <RadarChart />
                </Col>
            </Row>
        </>
    );
};

export default ChartJS;
