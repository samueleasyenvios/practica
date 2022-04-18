import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface BubbleChartProps {
    bubbleChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const BubbleChart = ({ bubbleChartData, showLoader }: BubbleChartProps) => {
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
        colors: ['#3bafda', '#1abc9c', '#f672a7'],
        fill: {
            opacity: 0.8,
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
        },
        yaxis: {
            max: 70,
        },
        grid: {
            borderColor: '#f1f3fa',
            padding: {
                bottom: 10,
            },
        },
        legend: {
            offsetY: 7,
        },
    };

    const series = [
        {
            name: 'Bubble 1',
            data: bubbleChartData.data1 || [],
        },
        {
            name: 'Bubble 2',
            data: bubbleChartData.data2 || [],
        },
        {
            name: 'Bubble 3',
            data: bubbleChartData.data3 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Simple Bubble Chart" titleClass="header-title mb-0">
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

export default BubbleChart;
