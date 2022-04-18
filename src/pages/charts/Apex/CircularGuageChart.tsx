import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface CircularGuageChartProps {
    gaugeChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const CircularGuageChart = ({ gaugeChartData, showLoader }: CircularGuageChartProps) => {
    const options: ApexOptions = {
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120,
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
            },
        },
        fill: {
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
        },
        stroke: {
            dashArray: 4,
        },
        colors: ['#f1556c'],
        labels: ['Median Ratio'],
        responsive: [
            {
                breakpoint: 380,
                options: {
                    chart: {
                        height: 280,
                    },
                },
            },
        ],
    };

    const series = gaugeChartData.data || [];

    return (
        <BasicPortlet cardTitle="Stroked Circular Guage" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 375, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={options}
                    series={series}
                    type="radialBar"
                    height={375}
                    className="apex-charts"
                    dir="ltr"
                />
            )}
        </BasicPortlet>
    );
};

export default CircularGuageChart;
