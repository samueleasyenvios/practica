import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import CountUp from 'react-countup';
import classNames from 'classnames';

interface StatisticsChartWidgetProps {
    hasHeader?: boolean;
    title?: string;
    color: string;
    data: number;
    stats: string;
    description: string;
    counterOptions?: any;
}

const StatisticsChartWidget = ({
    hasHeader,
    title,
    color,
    data,
    stats,
    description,
    counterOptions,
}: StatisticsChartWidgetProps) => {
    const apexOpts: ApexOptions = {
        chart: {
            type: 'radialBar',
            width: 65,
            height: 65,
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%',
                },
                track: {
                    margin: 0,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true,
                        color: color,
                        fontSize: '14px',
                        offsetY: 5,
                        formatter: (val: number) => {
                            return String(val);
                        },
                    },
                },
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        colors: [color],
    };

    const apexData = [data];

    return (
        <Card>
            <Card.Body>
                {hasHeader && (
                    <>
                        <Dropdown className="float-end">
                            <Dropdown.Toggle as="a" className="arrow-none cursor-pointer card-drop">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                                <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <h4 className="header-title mt-0">{title}</h4>
                    </>
                )}

                <div className={classNames({ 'mt-3': hasHeader })}>
                    <div className="d-flex align-items-start">
                        <div dir="ltr">
                            <Chart
                                options={apexOpts}
                                series={apexData}
                                type="radialBar"
                                height={hasHeader ? 75 : 82}
                                width={72}
                                className="apex-charts"
                            />
                        </div>
                        <div className="flex-1 text-end align-self-center">
                            <h3 className="mt-0 mb-1">
                                {hasHeader ? (
                                    stats
                                ) : (
                                    <span>
                                        <CountUp duration={1} end={stats} {...counterOptions} separator={','} />
                                    </span>
                                )}
                            </h3>
                            <p className="text-muted mb-0">{description}</p>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget;
