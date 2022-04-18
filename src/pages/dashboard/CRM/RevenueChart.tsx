import React from 'react';
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';

// chart
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// utility function to generate time series
import { generateDayWiseTimeSeries } from '../../../utils/chart';

const RevenueChart = () => {
    const options: ApexOptions = {
        chart: {
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        colors: ['#3bafda', '#ced4dc'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2],
            curve: 'smooth',
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.3,
                opacityTo: 0.9,
            },
        },
        legend: {
            offsetY: 5,
        },
        xaxis: {
            type: 'datetime',
        },
        grid: {
            padding: {
                bottom: 10,
            },
        },
        yaxis: {
            title: {
                text: 'Revenue',
                style: {
                    color: undefined,
                    fontSize: '13px',
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
        },
    };

    const series: any[] = [
        {
            name: 'Total Revenue',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 100,
                max: 1500,
            }),
        },

        {
            name: 'Total Pipeline',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 100,
                max: 1000,
            }),
        },
    ];

    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <h4 className="header-title">Revenue</h4>
                    <ButtonGroup className="mb-2">
                        <Button variant="light" className="btn-xs active">
                            Today
                        </Button>
                        <Button variant="light" className="btn-xs">
                            Weekly
                        </Button>
                        <Button variant="light" className="btn-xs">
                            Monthly
                        </Button>
                    </ButtonGroup>
                </div>
                <Row className="mt-4 text-center">
                    <Col xs={4}>
                        <p className="text-muted font-15 mb-1 text-truncate">Current Month</p>
                        <h4>
                            <i className="fe-arrow-up text-success me-1"></i>$1.4k
                        </h4>
                    </Col>
                    <Col xs={4}>
                        <p className="text-muted font-15 mb-1 text-truncate">Previous Month</p>
                        <h4>
                            <i className="fe-arrow-down text-danger me-1"></i>$15k
                        </h4>
                    </Col>
                    <Col xs={4}>
                        <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                        <h4>
                            <i className="fe-arrow-down text-danger me-1"></i>$7.8k
                        </h4>
                    </Col>
                </Row>

                <div className="mt-3" dir="ltr">
                    <Chart options={options} series={series} type="area" height={260} className="apex-charts" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default RevenueChart;
