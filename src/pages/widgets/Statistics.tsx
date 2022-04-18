import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import CountUp from 'react-countup';

interface StatisticsProps {
    variant: string;
    description: string;
    stats: string;
    counterOptions?: any;
}

const Statistics = ({ stats, description, counterOptions, variant }: StatisticsProps) => {
    return (
        <Card className="widget-simple text-center">
            <Card.Body>
                <h3 className={classNames('mt-0', 'text-' + variant)}>
                    <span>
                        <CountUp duration={1} end={stats} {...counterOptions} />
                    </span>
                </h3>
                <p className="text-muted mb-0">{description}</p>
            </Card.Body>
        </Card>
    );
};

export default Statistics;
