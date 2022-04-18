import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../../components/Loader';
import { BasicPortlet } from '../../../components/Portlet';

// types
import { CandleStickChartData } from './data';

interface CandleStickChartProps {
    candleStickChart1Data: CandleStickChartData;
    candleStickChart2Data: CandleStickChartData;
    showLoader?: boolean;
}

const ComboCandleStickChart = ({ candleStickChart1Data, candleStickChart2Data, showLoader }: CandleStickChartProps) => {
    const [options1, setOptions1] = useState<ApexOptions>({});
    const [options2, setOptions2] = useState<ApexOptions>({});
    const [series1, setSeries1] = useState<any[]>([]);
    const [series2, setSeries2] = useState<any[]>([]);

    useEffect(() => {
        setOptions1({
            chart: {
                type: 'candlestick',
                height: 240,
                id: 'candles',
                toolbar: {
                    autoSelected: 'pan',
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            colors: ['#3bafda', '#f7b84b'],
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#3bafda',
                        downward: '#f7b84b',
                    },
                },
            },
            xaxis: {
                type: 'datetime',
            },
            grid: {
                borderColor: '#f1f3fa',
            },
        });

        setOptions2({
            chart: {
                height: 160,
                type: 'bar',
                brush: {
                    enabled: true,
                    target: 'candles',
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date('20 Jan 2017').getTime(),
                        max: new Date('10 Dec 2017').getTime(),
                    },
                    fill: {
                        color: '#ccc',
                        opacity: 0.4,
                    },
                    stroke: {
                        color: '#0D47A1',
                    },
                },
            },
            colors: ['#f45454', '#37cde6'],
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                    colors: {
                        ranges: [
                            {
                                from: -1000,
                                to: 0,
                                color: '#f45454',
                            },
                            {
                                from: 1,
                                to: 10000,
                                color: '#37cde6',
                            },
                        ],
                    },
                },
            },
            stroke: {
                width: 0,
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    offsetX: 13,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
        });

        setSeries1([
            {
                data: candleStickChart1Data.data || [],
            },
        ]);

        setSeries2([
            {
                name: 'volume',
                data: candleStickChart2Data.data || [],
            },
        ]);
    }, [candleStickChart1Data.data, candleStickChart2Data.data]);

    return (
        <BasicPortlet cardTitle="Simple Candlestick Chart" titleClass="header-title mb-0">
            {showLoader ? (
                <div style={{ height: 420, position: 'relative' }}>
                    <Loader />
                </div>
            ) : (
                <>
                    <Chart
                        options={options1}
                        series={series1}
                        type="candlestick"
                        height={250}
                        className="apex-charts"
                        dir="ltr"
                    />

                    <Chart
                        options={options2}
                        series={series2}
                        type="bar"
                        height={170}
                        className="apex-charts"
                        dir="ltr"
                    />
                </>
            )}
        </BasicPortlet>
    );
};

export default ComboCandleStickChart;
