import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface ThreeDBubbleChartProps {
    threeDBubbleChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ThreeDBubbleChart = ({ threeDBubbleChartData, showLoader }: ThreeDBubbleChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bubble',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
        },
        xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                rotate: 0,
            },
        },
        colors: ['#3bafda', '#1abc9c', '#6559cc', '#f672a7'],
        yaxis: {
            max: 70,
        },
        legend: {
            offsetY: 7,
        },
        grid: {
            borderColor: '#f1f3fa',
            padding: {
                bottom: 10,
            },
        },
    };

    const series = [
        {
            name: 'Product 1',
            data: threeDBubbleChartData.data1 || [],
        },
        {
            name: 'Product 2',
            data: threeDBubbleChartData.data2 || [],
        },
        {
            name: 'Product 3',
            data: threeDBubbleChartData.data3 || [],
        },
        {
            name: 'Product 4',
            data: threeDBubbleChartData.data4 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="3D Bubble Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 380, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart options={options} series={series} type="bubble" height={380} className="apex-charts" dir="ltr" />
            )}
        </BasicPortlet>
    );
};

export default ThreeDBubbleChart;
