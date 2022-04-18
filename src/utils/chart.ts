import { Point, Range } from '../pages/charts/Apex/data';

/**
 * Utilit function to generate day wise series
 * @param {*} baseval
 * @param {*} count
 * @param {*} yrange
 */
const generateDayWiseTimeSeries = (baseval: number, count: number, yrange: Range): Point[] => {
    let i = 0;
    let series: Point[] = [];
    while (i < count) {
        let x = baseval;
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({ x, y });
        baseval += 86400000;
        i++;
    }
    return series;
};

export { generateDayWiseTimeSeries };
