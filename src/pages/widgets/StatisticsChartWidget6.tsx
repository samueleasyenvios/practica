import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import ChartStatistics from '../../components/ChartStatistics';

const StatisticsChartWidget6 = () => {
    /*
    initial options
    */
    const options: ApexOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: 'straight',
            width: [1],
        },
        fill: {
            type: 'solid',
            opacity: [0.3],
        },
        grid: {
            padding: {
                left: -9,
                right: 0,
            },
        },
        colors: ['#3bafda'],
        xaxis: {
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        legend: {
            show: false,
        },
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

    const series = [
        {
            data: [50, 23, 43, 35, 44, 45, 56, 37, 40],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Total Revenue</h4>

                <div className="widget-chart text-center">
                    <Chart type="area" options={options} series={series} height={165} className="apex-charts mt-0" />

                    <Row className="row mt-3">
                        <Col className="col-4">
                            <ChartStatistics title="Target" stats="$1000" />
                        </Col>
                        <Col className="col-4">
                            <ChartStatistics title="Last week" stats="$523" />
                        </Col>
                        <Col className="col-4">
                            <ChartStatistics title="Last Month" stats="$965" />
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget6;
