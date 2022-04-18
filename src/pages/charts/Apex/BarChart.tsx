import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface BarChartProps {
    basicBarChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const BarChart = ({ basicBarChartData, showLoader }: BarChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        colors: ['#1abc9c'],
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
        xaxis: {
            categories: [
                'South Korea',
                'Canada',
                'United Kingdom',
                'Netherlands',
                'Italy',
                'France',
                'Japan',
                'United States',
                'China',
                'Germany',
            ],
        },
    };

    const series = [
        {
            data: basicBarChartData.data || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Basic bar chart" titleClass="header-title mb-0">
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

export default BarChart;
