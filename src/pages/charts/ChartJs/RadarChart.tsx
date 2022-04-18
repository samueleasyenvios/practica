import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const RadarChart = () => {
    // chart data
    const radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'Desktops',
                backgroundColor: 'rgba(59,175,218, 0.3)',
                borderColor: '#3bafda',
                pointBackgroundColor: '#3bafda',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3bafda',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'Tablets',
                backgroundColor: 'rgba(246,114,167,0.3)',
                borderColor: '#f672a7',
                pointBackgroundColor: '#f672a7',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#f672a7',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    };

    // default options
    const radarChartOpts = {
        maintainAspectRatio: false,
        scales: {
            r: {
                ticks: {
                    backdropColor: 'transparent',
                },
                grid: {
                    color: 'rgba(150, 150, 150, 0.1)',
                },
                angleLines: {
                    color: 'rgba(150, 150, 150, 0.1)',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Radar Chart</h4>

                <div className="mt-4 chartjs-chart" style={{ height: '350px' }}>
                    <Radar data={radarChartData} options={radarChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default RadarChart;
