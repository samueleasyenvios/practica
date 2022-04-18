import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface StackedAreaChartProps {
    stackedAreaChartData: ApexLinearChartData;
    showLoader?: boolean;
}

// StackedAreaChart
const StackedAreaChart = ({ stackedAreaChartData, showLoader }: StackedAreaChartProps) => {
    // default options
    const apexAreaChart2Opts: ApexOptions = {
        chart: {
            id: 'apexchart',
            height: 380,
            type: 'area',
            stacked: true,
            events: {
                selection: function (chart, e) {
                    console.log(new Date(e.xaxis.min));
                },
            },
        },
        colors: ['#3bafda', '#1abc9c', '#CED4DC'],
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        },
        xaxis: {
            type: 'datetime',
        },
    };

    // chart data
    const apexAreaChart2Data = [
        {
            name: 'South',
            data: stackedAreaChartData.data1 || [],
        },
        {
            name: 'North',
            data: stackedAreaChartData.data2 || [],
        },

        {
            name: 'Central',
            data: stackedAreaChartData.data3 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Stacked Area" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 380, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={apexAreaChart2Opts}
                    series={apexAreaChart2Data}
                    type="area"
                    height={380}
                    className="apex-charts"
                />
            )}
        </BasicPortlet>
    );
};

export default StackedAreaChart;
