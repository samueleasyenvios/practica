import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface RadialBarChartProps {
    radarChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const RadialBarChart = ({ radarChartData, showLoader }: RadialBarChartProps) => {
    const options: ApexOptions = {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
            },
        },
        colors: ['#3bafda'],
        labels: ['CRICKET'],
    };

    const series = radarChartData.data || [];

    return (
        <BasicPortlet cardTitle="Basic RadialBar Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 350, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <Chart
                    options={options}
                    series={series}
                    type="radialBar"
                    height={350}
                    className="apex-charts"
                    dir="ltr"
                />
            )}
        </BasicPortlet>
    );
};

export default RadialBarChart;
