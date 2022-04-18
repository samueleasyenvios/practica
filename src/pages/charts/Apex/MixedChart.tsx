import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface MixedChartProps {
    mixedChart1Data: ApexLinearChartData;
    showLoader?: boolean;
}

// Mixed chart
const MixedChart = ({ mixedChart1Data, showLoader }: MixedChartProps) => {
    // default options
    const apexMixedOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'line',
        },
        stroke: {
            width: [2],
            curve: 'smooth',
        },
        fill: {
            type: 'solid',
            opacity: [0.35, 1],
        },
        colors: ['#CED4DC', '#3bafda'],
        labels: [
            'Dec 01',
            'Dec 02',
            'Dec 03',
            'Dec 04',
            'Dec 05',
            'Dec 06',
            'Dec 07',
            'Dec 08',
            'Dec 09 ',
            'Dec 10',
            'Dec 11',
        ],
        markers: {
            size: 0,
        },
        legend: {
            offsetY: 7,
        },
        yaxis: [
            {
                title: {
                    text: 'Series A',
                },
            },
            {
                opposite: true,
                title: {
                    text: 'Series B',
                },
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' points';
                    }
                    return y;
                },
            },
        },
    };

    // chart data
    const apexMixedData = [
        {
            name: 'Team A',
            type: 'area',
            data: mixedChart1Data.data1 || [],
        },
        {
            name: 'Team B',
            type: 'line',
            data: mixedChart1Data.data2 || [],
        },
    ];

    return (
        <BasicPortlet cardTitle="Mixed Chart - Line & Area" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 380, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={apexMixedOpts}
                    series={apexMixedData}
                    type="line"
                    height={380}
                    className="apex-charts"
                    dir="ltr"
                />
            )}
        </BasicPortlet>
    );
};

export default MixedChart;
