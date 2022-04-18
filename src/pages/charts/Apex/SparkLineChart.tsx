import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';

// data
import { SparkLineChartData } from './data';

interface LineChartProps {
    sparkLineChartData: SparkLineChartData;
    colors: string[];
    titleText: string;
    subTitleText: string;
    showLoader?: boolean;
}

// simple line chart
const SparkLineChart = ({ sparkLineChartData, showLoader, colors, titleText, subTitleText }: LineChartProps) => {
    // default options
    const sparkLineChartOptions: ApexOptions = {
        chart: {
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'straight',
        },
        fill: {
            opacity: 0.2,
        },
        yaxis: {
            min: 0,
        },
        colors: colors,
        title: {
            text: titleText,
            offsetX: 10,
            style: {
                fontSize: '22px',
            },
        },
        subtitle: {
            text: subTitleText,
            offsetX: 10,
            offsetY: 35,
            style: {
                fontSize: '13px',
            },
        },
    };

    // chart data
    const sparkLineChartSeries: SparkLineChartData[] = [sparkLineChartData];

    return (
        <>
            {showLoader ? (
                <div style={{ height: 160, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={sparkLineChartOptions}
                    series={sparkLineChartSeries}
                    type="area"
                    height={160}
                    className="apex-charts"
                />
            )}
        </>
    );
};

export default SparkLineChart;
