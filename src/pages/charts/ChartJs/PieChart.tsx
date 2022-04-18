import React from 'react';
import { defaults as ChartjsDefaults, Pie } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const PieChart = () => {
    // changing chartjs defaults
    ChartjsDefaults.color = () => '#8391a2';
    // ChartjsDefaults.scale.grid.color = 'rgba(150, 150, 150, 0.1)';
    // ChartjsDefaults.font = () => { return family: '' };

    // chart data
    const lineChartData = {
        labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
        datasets: [
            {
                data: [300, 135, 48, 154],
                backgroundColor: ['#3bafda', '#1abc9c', '#f7b84b', '#e3eaef'],
                borderColor: 'transparent',
            },
        ],
    };

    // chart options
    const lineChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Pie Chart</h4>
                <div style={{ height: '350px' }} className="mt-4 chartjs-chart">
                    <Pie id="line-chart" data={lineChartData} options={lineChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default PieChart;
