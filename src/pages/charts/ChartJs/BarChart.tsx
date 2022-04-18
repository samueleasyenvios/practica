import React from 'react';
import { Bar, defaults as ChartjsDefaults } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const BarChart = () => {
    // changing chartjs defaults
    ChartjsDefaults.color = () => '#8391a2';

    // chart data
    const barChartData = (canvas: any) => {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Sales Analytics',
                    backgroundColor: '#1abc9c',
                    borderColor: '#1abc9c',
                    hoverBackgroundColor: '#1abc9c',
                    hoverBorderColor: '#1abc9c',
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                },
                {
                    label: 'Dollar Rate',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                },
            ],
        };
    };

    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    display: false,
                    drawBorder: false,
                },
                stacked: false,
                ticks: {
                    stepSize: 20,
                },
            },
            x: {
                stacked: false,
                grid: {
                    drawBorder: false,
                    color: () => 'rgba(0,0,0,0.01)',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bar Chart</h4>

                <div style={{ height: '350px' }} className="mt-4 chartjs-chart">
                    <Bar data={barChartData} options={barChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default BarChart;
