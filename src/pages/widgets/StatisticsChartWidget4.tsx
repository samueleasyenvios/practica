import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import ChartStatistics from '../../components/ChartStatistics';

const StatisticsChartWidget4 = () => {
    const options: ApexOptions = {
        chart: {
            type: 'pie',
            sparkline: {
                enabled: true,
            },
        },
        colors: ['#e3eaef', '#3bafda', '#1abc9c', '#f1556c'],
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
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

    const series = [20, 40, 30, 10];
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Sales Status</h4>

                <div className="widget-chart text-center">
                    <Chart type="pie" options={options} series={series} height={168} className="apex-charts mt-0" />

                    <Row className="row mt-3">
                        <Col className="col-4">
                            <ChartStatistics title="Target" stats="$982" />
                        </Col>
                        <Col className="col-4">
                            <ChartStatistics title="Last week" stats="$525" />
                        </Col>
                        <Col className="col-4">
                            <ChartStatistics title="Last Month" stats="$937" />
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget4;
