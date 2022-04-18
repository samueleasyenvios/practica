import React from 'react';
import classNames from 'classnames';

interface StatisticsProps {
    icon: string;
    textClass?: string;
    stats: string;
    desc: string;
}

const Statistics = ({ icon, textClass, stats, desc }: StatisticsProps) => {
    return (
        <div className="py-1">
            <i className={classNames(icon, 'font-24')}></i>
            <h3 className={classNames(textClass)}>{stats}</h3>
            <p className="text-uppercase mb-1 font-13 fw-medium">{desc}</p>
        </div>
    );
};

export default Statistics;
