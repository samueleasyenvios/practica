import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { CandleStickChartData } from './data';

interface CandleStickChartProps {
    candleStickChartData: CandleStickChartData;
    showLoader?: boolean;
}

const CandleStickChart = ({ candleStickChartData, showLoader }: CandleStickChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 400,
            type: 'candlestick',
            toolbar: {
                show: false,
            },
        },
        colors: ['#3bafda', '#1abc9c'],
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#3bafda',
                    downward: '#1abc9c',
                },
            },
        },
        stroke: {
            show: true,
            colors: ['#f1f3fa'],
            width: 1,
        },
        xaxis: {
            type: 'datetime',
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    };

    const series = [
        {
            data: candleStickChartData.data || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Simple Candlestick Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 400, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={options}
                    series={series}
                    type="candlestick"
                    height={400}
                    className="apex-charts"
                    dir="ltr"
                />
            )}
        </BasicPortlet>
    );
};

export default CandleStickChart;
