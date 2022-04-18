import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const DonutChart = () => {
    // chart data
    const donutChartData = {
        labels: ['Direct', 'Affilliate', 'Sponsored'],
        datasets: [
            {
                data: [128, 78, 48],
                backgroundColor: ['#3bafda', '#1abc9c', '#e3eaef'],
                borderColor: 'transparent',
            },
        ],
    };

    // default options
    const donutChartOpts = {
        maintainAspectRatio: false,
        cutoutPercentage: 60,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Donut Chart</h4>

                <div className="mt-4 chartjs-chart" style={{ height: '350px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default DonutChart;
