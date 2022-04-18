import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface ScatterChartProps {
    scatterChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ScatterChart = ({ scatterChartData, showLoader }: ScatterChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'scatter',
            zoom: {
                enabled: false,
            },
        },
        colors: ['#1abc9c', '#f672a7', '#6c757d'],
        xaxis: {
            tickAmount: 10,
        },
        yaxis: {
            tickAmount: 7,
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
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    const series = [
        {
            name: 'Sample A',
            data: scatterChartData.data1 || [],
        },
        {
            name: 'Sample B',
            data: scatterChartData.data2 || [],
        },
        {
            name: 'Sample C',
            data: scatterChartData.data3 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Scatter (XY) Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 380, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={options}
                    series={series}
                    type="scatter"
                    height={380}
                    className="apex-charts"
                    dir="ltr"
                />
            )}
        </BasicPortlet>
    );
};

export default ScatterChart;
