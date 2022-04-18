import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface DonutChartProps {
    gradientDonutChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const DonutChart = ({ gradientDonutChartData, showLoader }: DonutChartProps) => {
    const options: ApexOptions = {
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: 7,
        },
        colors: ['#3bafda', '#1abc9c', '#f7b84b', '#6559cc', '#f672a7'],
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
        fill: {
            type: 'gradient',
        },
    };

    const series = gradientDonutChartData.data || [];

    return (
        <BasicPortlet cardTitle="Gradient Donut Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 320, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart options={options} series={series} type="donut" height={320} className="apex-charts" dir="ltr" />
            )}
        </BasicPortlet>
    );
};

export default DonutChart;
