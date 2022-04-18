import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface DonutPatternedChartProps {
    patternedDonutChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const DonutPatternedChart = ({ patternedDonutChartData, showLoader }: DonutPatternedChartProps) => {
    const options: ApexOptions = {
        chart: {
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2,
            },
        },
        stroke: {
            show: true,
            width: 2,
        },
        labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: 0.8,
            },
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: 7,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    const series = patternedDonutChartData.data || [];
    return (
        <BasicPortlet cardTitle="Patterned Donut Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 320, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart options={options} series={series} type="donut" height={320} className="apex-charts" dir="ltr" />
            )}
        </BasicPortlet>
    );
};

export default DonutPatternedChart;
