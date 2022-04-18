import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { ApexLinearChartData } from './data';

interface RadialBarMultipleChartProps {
    multiRadarChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const RadialBarMultipleChart = ({ multiRadarChartData, showLoader }: RadialBarMultipleChartProps) => {
    const options: ApexOptions = {
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: (w: number) => {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return String(249);
                        },
                    },
                },
            },
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#3bafda', '#f672a7', '#1abc9c', '#f7b84b'],
    };

    const series = multiRadarChartData.data || [];

    return (
        <BasicPortlet cardTitle="Multiple RadialBars" titleClass="header-title mb-0">
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

export default RadialBarMultipleChart;
