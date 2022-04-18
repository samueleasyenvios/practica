import { generateDayWiseTimeSeries } from '../../../utils/chart';

export interface Range {
    min: number;
    max: number;
}
export interface Point {
    x: number;
    y: number;
}
export interface ApexLinearChartData {
    [key: string]: number[] | Point[] | [number, number][];
}
export interface ApexNonLinearChartData {
    [key: string]: number[];
}

export interface SparkLineChartData {
    name: string;
    data: number[];
}

export interface CandleStickChartData {
    data: {
        x: Date;
        y: number | number[];
    }[];
}

/**
 * Generates the data
 * @param {*} baseval
 * @param {*} count
 * @param {*} yrange
 */
function generateData(baseval: number, count: number, yrange: Range): any[] {
    let i = 0;
    let series = [];
    while (i < count) {
        let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

/**
 * Generates the alt data
 * @param {*} baseval1
 * @param {*} count
 * @param {*} yrange
 */
function generateData1(baseval1: number, count: number, yrange: Range): any[] {
    let i = 0;
    let series = [];
    while (i < count) {
        //let x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval1, y, z]);
        baseval1 += 86400000;
        i++;
    }
    return series;
}

const randomizeArray = (data: number[]) => {
    var array = data;
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// data for the sparklines that appear below header area
const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

const sparkLineData1: SparkLineChartData = {
    name: 'Minton Sales ',
    data: randomizeArray(sparklineData),
};

const sparkLineData2: SparkLineChartData = {
    name: 'Minton Expenses ',
    data: randomizeArray(sparklineData),
};

const sparkLineData3: SparkLineChartData = {
    name: 'Net Profits ',
    data: randomizeArray(sparklineData),
};

// chart options
const lineChartWithData: ApexLinearChartData = {
    data1: [28, 29, 33, 36, 32, 32, 33],
    data2: [12, 11, 14, 18, 17, 13, 13],
};

const gradientLineChartData: ApexLinearChartData = {
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
};

const stackedAreaChartData: ApexLinearChartData = {
    data1: generateDayWiseTimeSeries(new Date('11 Feb 2019 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),

    data2: generateDayWiseTimeSeries(new Date('11 Feb 2019 GMT').getTime(), 20, {
        min: 10,
        max: 20,
    }),

    data3: generateDayWiseTimeSeries(new Date('11 Feb 2019 GMT').getTime(), 20, {
        min: 10,
        max: 15,
    }),
};

const basicColumnChartData: ApexLinearChartData = {
    data1: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    data2: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    data3: [35, 41, 36, 26, 45, 48, 52, 53, 41],
};

const columnChartData: ApexLinearChartData = {
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
};

const mixedChart1Data: ApexLinearChartData = {
    data1: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    data2: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
};

const basicBarChartData: ApexLinearChartData = {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
};

const barWithNegativeData: ApexLinearChartData = {
    data1: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3],
    data2: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
    ],
};

const mixedChart2Data: ApexLinearChartData = {
    data1: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    data2: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    data3: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
};

const multiYaxisChartData: ApexLinearChartData = {
    data1: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    data2: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    data3: [20, 29, 37, 36, 44, 45, 50, 58],
};

const bubbleChartData: ApexLinearChartData = {
    data1: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),

    data2: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),
    data3: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),
};

const threeDBubbleChartData: ApexLinearChartData = {
    data1: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),

    data2: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),

    data3: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),

    data4: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),
};

const scatterChartData: ApexLinearChartData = {
    data1: [
        [16.4, 5.4],
        [21.7, 2],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7.4],
        [10.9, 0],
        [10.9, 8.2],
        [16.4, 0],
        [16.4, 1.8],
        [13.6, 0.3],
        [13.6, 0],
        [29.9, 0],
        [27.1, 2.3],
        [16.4, 0],
        [13.6, 3.7],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 0],
        [24.5, 7.1],
        [10.9, 0],
        [8.1, 4.7],
        [19, 0],
        [21.7, 1.8],
        [27.1, 0],
        [24.5, 0],
        [27.1, 0],
        [29.9, 1.5],
        [27.1, 0.8],
        [22.1, 2],
    ],
    data2: [
        [6.4, 13.4],
        [1.7, 11],
        [5.4, 8],
        [9, 17],
        [1.9, 4],
        [3.6, 12.2],
        [1.9, 14.4],
        [1.9, 9],
        [1.9, 13.2],
        [1.4, 7],
        [6.4, 8.8],
        [3.6, 4.3],
        [1.6, 10],
        [9.9, 2],
        [7.1, 15],
        [1.4, 0],
        [3.6, 13.7],
        [1.9, 15.2],
        [6.4, 16.5],
        [0.9, 10],
        [4.5, 17.1],
        [10.9, 10],
        [0.1, 14.7],
        [9, 10],
        [12.7, 11.8],
        [2.1, 10],
        [2.5, 10],
        [27.1, 10],
        [2.9, 11.5],
        [7.1, 10.8],
        [2.1, 12],
    ],
    data3: [
        [21.7, 3],
        [23.6, 3.5],
        [24.6, 3],
        [29.9, 3],
        [21.7, 20],
        [23, 2],
        [10.9, 3],
        [28, 4],
        [27.1, 0.3],
        [16.4, 4],
        [13.6, 0],
        [19, 5],
        [22.4, 3],
        [24.5, 3],
        [32.6, 3],
        [27.1, 4],
        [29.6, 6],
        [31.6, 8],
        [21.6, 5],
        [20.9, 4],
        [22.4, 0],
        [32.6, 10.3],
        [29.7, 20.8],
        [24.5, 0.8],
        [21.4, 0],
        [21.7, 6.9],
        [28.6, 7.7],
        [15.4, 0],
        [18.1, 0],
        [33.4, 0],
        [16.4, 0],
    ],
};

const scatterDateTimeChartData: ApexLinearChartData = {
    data1: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),

    data2: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
    }),
    data3: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
        min: 10,
        max: 60,
    }),
    data4: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 60,
    }),
    data5: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
        min: 10,
        max: 60,
    }),
};

const candleStickChartData1: CandleStickChartData = {
    data: [
        {
            x: new Date(2016, 1, 1),
            y: [51.98, 56.29, 51.59, 53.85],
        },
        {
            x: new Date(2016, 2, 1),
            y: [53.66, 54.99, 51.35, 52.95],
        },
        {
            x: new Date(2016, 3, 1),
            y: [52.96, 53.78, 51.54, 52.48],
        },
        {
            x: new Date(2016, 4, 1),
            y: [52.54, 52.79, 47.88, 49.24],
        },
        {
            x: new Date(2016, 5, 1),
            y: [49.1, 52.86, 47.7, 52.78],
        },
        {
            x: new Date(2016, 6, 1),
            y: [52.83, 53.48, 50.32, 52.29],
        },
        {
            x: new Date(2016, 7, 1),
            y: [52.2, 54.48, 51.64, 52.58],
        },
        {
            x: new Date(2016, 8, 1),
            y: [52.76, 57.35, 52.15, 57.03],
        },
        {
            x: new Date(2016, 9, 1),
            y: [57.04, 58.15, 48.88, 56.19],
        },
        {
            x: new Date(2016, 10, 1),
            y: [56.09, 58.85, 55.48, 58.79],
        },
        {
            x: new Date(2016, 11, 1),
            y: [58.78, 59.65, 58.23, 59.05],
        },
        {
            x: new Date(2017, 0, 1),
            y: [59.37, 61.11, 59.35, 60.34],
        },
        {
            x: new Date(2017, 1, 1),
            y: [60.4, 60.52, 56.71, 56.93],
        },
        {
            x: new Date(2017, 2, 1),
            y: [57.02, 59.71, 56.04, 56.82],
        },
        {
            x: new Date(2017, 3, 1),
            y: [56.97, 59.62, 54.77, 59.3],
        },
        {
            x: new Date(2017, 4, 1),
            y: [59.11, 62.29, 59.1, 59.85],
        },
        {
            x: new Date(2017, 5, 1),
            y: [59.97, 60.11, 55.66, 58.42],
        },
        {
            x: new Date(2017, 6, 1),
            y: [58.34, 60.93, 56.75, 57.42],
        },
        {
            x: new Date(2017, 7, 1),
            y: [57.76, 58.08, 51.18, 54.71],
        },
        {
            x: new Date(2017, 8, 1),
            y: [54.8, 61.42, 53.18, 57.35],
        },
        {
            x: new Date(2017, 9, 1),
            y: [57.56, 63.09, 57.0, 62.99],
        },
        {
            x: new Date(2017, 10, 1),
            y: [62.89, 63.42, 59.72, 61.76],
        },
        {
            x: new Date(2017, 11, 1),
            y: [61.71, 64.15, 61.29, 63.04],
        },
    ],
};

const candleStickChartLinearData: CandleStickChartData = {
    data: [
        {
            x: new Date(2016, 1, 1),
            y: 3.85,
        },
        {
            x: new Date(2016, 2, 1),
            y: 2.95,
        },
        {
            x: new Date(2016, 3, 1),
            y: -12.48,
        },
        {
            x: new Date(2016, 4, 1),
            y: 19.24,
        },
        {
            x: new Date(2016, 5, 1),
            y: 12.78,
        },
        {
            x: new Date(2016, 6, 1),
            y: 22.29,
        },
        {
            x: new Date(2016, 7, 1),
            y: -12.58,
        },
        {
            x: new Date(2016, 8, 1),
            y: -17.03,
        },
        {
            x: new Date(2016, 9, 1),
            y: -19.19,
        },
        {
            x: new Date(2016, 10, 1),
            y: -28.79,
        },
        {
            x: new Date(2016, 11, 1),
            y: -39.05,
        },
        {
            x: new Date(2017, 0, 1),
            y: 20.34,
        },
        {
            x: new Date(2017, 1, 1),
            y: 36.93,
        },
        {
            x: new Date(2017, 2, 1),
            y: 36.82,
        },
        {
            x: new Date(2017, 3, 1),
            y: 29.3,
        },
        {
            x: new Date(2017, 4, 1),
            y: 39.85,
        },
        {
            x: new Date(2017, 5, 1),
            y: 28.42,
        },
        {
            x: new Date(2017, 6, 1),
            y: 37.42,
        },
        {
            x: new Date(2017, 7, 1),
            y: 24.71,
        },
        {
            x: new Date(2017, 8, 1),
            y: 37.35,
        },
        {
            x: new Date(2017, 9, 1),
            y: 32.99,
        },
        {
            x: new Date(2017, 10, 1),
            y: 31.76,
        },
        {
            x: new Date(2017, 11, 1),
            y: 43.04,
        },
    ],
};

const pieChartData: ApexNonLinearChartData = {
    data: [44, 55, 41, 17, 15],
};

const gradientDonutChartData: ApexNonLinearChartData = {
    data: [44, 55, 41, 17, 15],
};

const patternedDonutChartData: ApexNonLinearChartData = {
    data: [44, 55, 41, 17, 15],
};

const radarChartData: ApexNonLinearChartData = {
    data: [70],
};

const multiRadarChartData: ApexNonLinearChartData = {
    data: [44, 55, 67, 83],
};

const gaugeChartData: ApexNonLinearChartData = {
    data: [67],
};

export {
    sparkLineData1,
    sparkLineData2,
    sparkLineData3,
    lineChartWithData,
    gradientLineChartData,
    stackedAreaChartData,
    barWithNegativeData,
    basicBarChartData,
    bubbleChartData,
    basicColumnChartData,
    columnChartData,
    mixedChart1Data,
    mixedChart2Data,
    multiYaxisChartData,
    threeDBubbleChartData,
    scatterChartData,
    scatterDateTimeChartData,
    candleStickChartData1,
    candleStickChartLinearData,
    pieChartData,
    patternedDonutChartData,
    gaugeChartData,
    gradientDonutChartData,
    radarChartData,
    multiRadarChartData,
};
