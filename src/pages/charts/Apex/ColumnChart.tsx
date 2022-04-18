import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface ColumnChartProps {
    basicColumnChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ColumnChart = ({ basicColumnChartData, showLoader }: ColumnChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        colors: ['#3bafda', '#1abc9c', '#CED4DC'],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        legend: {
            offsetY: 5,
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
            },
        },
        fill: {
            opacity: 1,
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
            padding: {
                bottom: 10,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                },
            },
        },
    };

    const series = [
        {
            name: 'Net Profit',
            data: basicColumnChartData.data1 || [],
        },
        {
            name: 'Revenue',
            data: basicColumnChartData.data2 || [],
        },
        {
            name: 'Free Cash Flow',
            data: basicColumnChartData.data3 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Basic Column Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 380, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart options={options} series={series} type="bar" height={380} className="apex-charts" dir="ltr" />
            )}
        </BasicPortlet>
    );
};

export default ColumnChart;
