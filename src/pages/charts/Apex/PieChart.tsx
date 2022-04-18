import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface PieChartProps {
    pieChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const PieChart = ({ pieChartData, showLoader }: PieChartProps) => {
    const options: ApexOptions = {
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
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
    };

    const series = pieChartData.data || [];

    return (
        <BasicPortlet cardTitle="Simple Pie Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 320, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart options={options} series={series} type="pie" height={320} className="apex-charts" dir="ltr" />
            )}
        </BasicPortlet>
    );
};

export default PieChart;
