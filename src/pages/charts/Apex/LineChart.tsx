import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import { BasicPortlet } from '../../../components/Portlet';
import Loader from '../../../components/Loader';

// data
import { ApexLinearChartData } from './data';

interface LineChartProps {
    lineChartWithData: ApexLinearChartData;
    showLoader?: boolean;
}

// simple line chart
const LineChart = ({ lineChartWithData, showLoader }: LineChartProps) => {
    // default options
    const apexLineChartWithLables: ApexOptions = {
        chart: {
            height: 380,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#3bafda', '#1abc9c'],
        stroke: {
            width: [3, 3],
            curve: 'smooth',
        },
        title: {
            text: 'Average High & Low Temperature',
            align: 'left',
            style: {
                fontSize: '14px',
                color: '#666',
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
        },
        markers: {
            size: 6,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month',
            },
        },
        yaxis: {
            title: {
                text: 'Temperature',
            },
            min: 5,
            max: 40,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5,
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

    // chart data
    const apexLineChartWithLablesData = [
        {
            name: 'High - 2018',
            data: lineChartWithData.data1 || [],
        },
        {
            name: 'Low - 2018',
            data: lineChartWithData.data2 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Line with Data Labels" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 380, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    height={380}
                    className="apex-charts"
                    dir="ltr"
                />
            )}
        </BasicPortlet>
    );
};

export default LineChart;
