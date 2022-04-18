import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface ScatterDateTimeChartProps {
    scatterDateTimeChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ScatterDateTimeChart = ({ scatterDateTimeChartData, showLoader }: ScatterDateTimeChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'scatter',
            zoom: {
                type: 'xy',
            },
        },
        colors: ['#3bafda', '#1abc9c', '#f672a7', '#f672a7', '#6559cc'],
        dataLabels: {
            enabled: false,
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
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            max: 70,
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
            name: 'Team 1',
            data: scatterDateTimeChartData.data1 || [],
        },
        {
            name: 'Team 2',
            data: scatterDateTimeChartData.data2 || [],
        },
        {
            name: 'Team 3',
            data: scatterDateTimeChartData.data3 || [],
        },
        {
            name: 'Team 4',
            data: scatterDateTimeChartData.data4 || [],
        },
        {
            name: 'Team 5',
            data: scatterDateTimeChartData.data5 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Scatter Chart - Datetime" titleClass="header-title mb-0">
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

export default ScatterDateTimeChart;
