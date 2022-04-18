import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import ChartStatistics from '../../components/ChartStatistics';

const StatisticsChartWidget3 = () => {
    const apexOpts: ApexOptions = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '65%',
            },
        },
        xaxis: {
            crosshairs: {
                width: 1,
            },
        },
        stroke: {
            width: 0,
            curve: 'smooth',
        },
        colors: ['#3bafda'],
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: (seriesName: string) => {
                        return '';
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };

    const apexData = [
        {
            data: [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Sales Status</h4>

                <div className="widget-chart text-center">
                    <Chart
                        options={apexOpts}
                        series={apexData}
                        type="bar"
                        height={165}
                        width={250}
                        className="apex-charts mt-0"
                    />
                    <Row className="row mt-3">
                        <Col className="col-4">
                            <ChartStatistics title="Target" stats="$825" />
                        </Col>
                        <Col className="col-4">
                            <ChartStatistics title="Last week" stats="$423" />
                        </Col>
                        <Col className="col-4">
                            <ChartStatistics title="Last Month" stats="$806" />
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget3;
