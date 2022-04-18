import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';
import { BasicPortlet } from '../../../components/Portlet';

import SparkLineChart from './SparkLineChart';
import LineChart from './LineChart';
import LineGradientChart from './LineGradientChart';
import StackedAreaChart from './StackedAreaChart';
import ColumnChart from './ColumnChart';
import ColumnDataLabelsChart from './ColumnDataLabelsChart';
import MixedChart from './MixedChart';
import BarChart from './BarChart';
import BarChartWithNegativeValues from './BarChartWithNegativeValues';
import LineColumnAreaChart from './LineColumnAreaChart';
import MultipleYaxisChart from './MultipleYaxisChart';
import BubbleChart from './BubbleChart';
import ThreeDBubbleChart from './ThreeDBubbleChart';
import ScatterChart from './ScatterChart';
import ScatterDateTimeChart from './ScatterDateTimeChart';
import CandleStickChart from './CandleStickChart';
import ComboCandleStickChart from './ComboCandleStickChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import DonutPatternedChart from './DonutPatternedChart';
import RadialBarChart from './RadialBarChart';
import RadialBarMultipleChart from './RadialBarMultipleChart';
import CircularGuageChart from './CircularGuageChart';

// data
import {
    sparkLineData1,
    sparkLineData2,
    sparkLineData3,
    lineChartWithData,
    gradientLineChartData,
    stackedAreaChartData,
    basicColumnChartData,
    columnChartData,
    mixedChart1Data,
    basicBarChartData,
    barWithNegativeData,
    mixedChart2Data,
    multiYaxisChartData,
    bubbleChartData,
    threeDBubbleChartData,
    scatterChartData,
    scatterDateTimeChartData,
    candleStickChartData1,
    candleStickChartLinearData,
    pieChartData,
    gradientDonutChartData,
    patternedDonutChartData,
    radarChartData,
    multiRadarChartData,
    gaugeChartData,
} from './data';

const ApexCharts = () => {
    const [isChatInitilized, setIsChatInitilized] = useState<boolean>(false);

    useEffect(() => {
        // set deafult config of apex chart
        if ((window as any).Apex) {
            (window as any).Apex = {
                grid: {
                    padding: {
                        right: 0,
                        left: 0,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
            };
            setIsChatInitilized(true);
        }
        return () => {
            if ((window as any).Apex) {
                (window as any).Apex = {};
            }
        };
    }, []);

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Charts', path: '/ui/charts/apex' },
                    { label: 'Apexcharts', path: 'ui/charts/apex', active: true },
                ]}
                title={'Apexcharts'}
            />

            <Row>
                <Col>
                    <BasicPortlet cardTitle="Sparkline Charts" titleClass="header-title mb-0">
                        <Row>
                            <Col md={4}>
                                <SparkLineChart
                                    sparkLineChartData={sparkLineData1}
                                    showLoader={!isChatInitilized}
                                    colors={['#3bafda']}
                                    titleText="$424,652"
                                    subTitleText="Total Sales"
                                />
                            </Col>
                            <Col md={4}>
                                <SparkLineChart
                                    sparkLineChartData={sparkLineData2}
                                    showLoader={!isChatInitilized}
                                    colors={['#DCE6EC']}
                                    titleText="$235,312"
                                    subTitleText="Expenses"
                                />
                            </Col>
                            <Col md={4}>
                                <SparkLineChart
                                    sparkLineChartData={sparkLineData3}
                                    showLoader={!isChatInitilized}
                                    colors={['#1abc9c']}
                                    titleText="$135,965"
                                    subTitleText="Profits"
                                />
                            </Col>
                        </Row>
                    </BasicPortlet>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <LineChart lineChartWithData={lineChartWithData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <LineGradientChart gradientLineChartData={gradientLineChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <StackedAreaChart stackedAreaChartData={stackedAreaChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ColumnChart basicColumnChartData={basicColumnChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <ColumnDataLabelsChart columnChartData={columnChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <MixedChart mixedChart1Data={mixedChart1Data} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BarChart basicBarChartData={basicBarChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <BarChartWithNegativeValues
                        barWithNegativeData={barWithNegativeData}
                        showLoader={!isChatInitilized}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <LineColumnAreaChart mixedChart2Data={mixedChart2Data} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <MultipleYaxisChart multiYaxisChartData={multiYaxisChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BubbleChart bubbleChartData={bubbleChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ThreeDBubbleChart threeDBubbleChartData={threeDBubbleChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <ScatterChart scatterChartData={scatterChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ScatterDateTimeChart
                        scatterDateTimeChartData={scatterDateTimeChartData}
                        showLoader={!isChatInitilized}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <CandleStickChart candleStickChartData={candleStickChartData1} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ComboCandleStickChart
                        candleStickChart1Data={candleStickChartData1}
                        candleStickChart2Data={candleStickChartLinearData}
                        showLoader={!isChatInitilized}
                    />
                </Col>
            </Row>

            <Row>
                <Col xxl={4} md={6}>
                    <PieChart pieChartData={pieChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <DonutChart gradientDonutChartData={gradientDonutChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <DonutPatternedChart
                        patternedDonutChartData={patternedDonutChartData}
                        showLoader={!isChatInitilized}
                    />
                </Col>

                <Col xxl={4} md={6}>
                    <RadialBarChart radarChartData={radarChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <RadialBarMultipleChart multiRadarChartData={multiRadarChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <CircularGuageChart gaugeChartData={gaugeChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ApexCharts;
