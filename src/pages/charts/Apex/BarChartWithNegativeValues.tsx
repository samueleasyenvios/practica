import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface BarChartWithNegativeValuesProps {
    showLoader?: boolean;
    barWithNegativeData: ApexLinearChartData;
}

const BarChartWithNegativeValues = ({ barWithNegativeData, showLoader }: BarChartWithNegativeValuesProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%',
            },
        },
        colors: ['#3bafda', '#1abc9c'],
        grid: {
            borderColor: '#f1f3fa',
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            min: -5,
            max: 5,
            title: {
                // text: 'Age',
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        tooltip: {
            shared: false,
            x: {
                formatter: function (val: any) {
                    return val;
                },
            },
            y: {
                formatter: function (val) {
                    return Math.abs(val) + '%';
                },
            },
        },
        xaxis: {
            categories: [
                '85+',
                '80-84',
                '75-79',
                '70-74',
                '65-69',
                '60-64',
                '55-59',
                '50-54',
                '45-49',
                '40-44',
                '35-39',
                '30-34',
                '25-29',
                '20-24',
                '15-19',
                '10-14',
                '5-9',
                '0-4',
            ],
            title: {
                text: 'Percent',
            },
            labels: {
                formatter: (val: string) => {
                    return Math.abs(Math.round(Number(val))) + '%';
                },
            },
        },
        legend: {
            offsetY: 7,
        },
    };

    const series = [
        {
            name: 'Males',
            data: barWithNegativeData.data1 || [],
        },
        {
            name: 'Females',
            data: barWithNegativeData.data2 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Bar with Negative Values" titleClass="header-title mb-0">
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

export default BarChartWithNegativeValues;
