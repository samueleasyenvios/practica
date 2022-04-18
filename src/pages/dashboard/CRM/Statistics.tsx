import React from 'react';
import { Col, Row } from 'react-bootstrap';

// component
import StatisticsWidget from '../../../components/StatisticsWidget';

const Statistics = () => {
    return (
        <>
            <Row>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-stack-line"
                        stats="865"
                        title="Campaign Sent"
                        trend={{
                            value: '5.27%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-up-bold',
                            variant: 'success',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-slideshow-2-line"
                        stats="384"
                        title="New Leads"
                        trend={{
                            value: '3.27%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-down-bold',
                            variant: 'danger',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-hand-heart-line"
                        stats="34521"
                        title="Deals"
                        trend={{
                            value: '8.58%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-up-bold',
                            variant: 'success',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-money-dollar-box-line"
                        stats="89357"
                        title="Booked Revenue"
                        counterOptions={{
                            prefix: '$',
                        }}
                        trend={{
                            value: '34.61%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-up-bold',
                            variant: 'success',
                        }}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Statistics;
