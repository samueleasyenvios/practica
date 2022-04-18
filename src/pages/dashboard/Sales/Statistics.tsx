import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

const Statistics = () => {
    return (
        <Row>
            <Col md={6} xl={3}>
                <StatisticsChartWidget color={'#1abc9c'} data={58} stats={'268'} description={'New Customers'} />
            </Col>
            <Col md={6} xl={3}>
                <StatisticsChartWidget color={'#3bafda'} data={80} stats={'8574'} description={'Online Orders'} />
            </Col>
            <Col md={6} xl={3}>
                <StatisticsChartWidget
                    color={'#f672a7'}
                    data={77}
                    stats={'958.25'}
                    counterOptions={{
                        prefix: '$',
                        decimals: 2,
                    }}
                    description={'Revenue'}
                />
            </Col>
            <Col md={6} xl={3}>
                <StatisticsChartWidget
                    color={'#6c757d'}
                    data={35}
                    stats={'89.25'}
                    counterOptions={{
                        prefix: '$',
                        decimals: 2,
                    }}
                    description={'Daily Average'}
                />
            </Col>
        </Row>
    );
};

export default Statistics;
