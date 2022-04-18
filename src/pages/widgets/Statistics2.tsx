import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import CountUp from 'react-countup';

interface Statistics2Props {
    variant: string;
    description: string;
    icon: string;
    stats: string;
    counterOptions?: any;
}

const Statistics2 = ({ stats, description, icon, counterOptions, variant }: Statistics2Props) => {
    return (
        <Card className="widget-bg-color-icon">
            <Card.Body className="card-body">
                <div className="d-flex align-items-start">
                    <div className={classNames('avatar-lg', 'rounded-circle', 'bg-icon-' + variant)}>
                        <i className={classNames('font-24', 'avatar-title', icon)}></i>
                    </div>
                    <div className="flex-1 text-end align-self-center">
                        <h3 className="mt-0">
                            <span>
                                <CountUp duration={1} end={stats} {...counterOptions} separator="," />
                            </span>
                        </h3>
                        <p className="text-muted mb-0">{description}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Statistics2;
