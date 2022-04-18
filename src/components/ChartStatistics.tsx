import React from 'react';
import classNames from 'classnames';

interface ChartStatisticsProps {
    title: string;
    stats: string;
    icon?: string;
    variant?: string;
}

const ChartStatistics = ({ title, stats, icon, variant }: ChartStatisticsProps) => {
    return (
        <>
            <p className="text-muted font-15 mb-1 text-truncate">{title}</p>
            <h4>
                {icon && <i className={classNames(icon, 'text-' + variant)}></i>} {stats}
            </h4>
        </>
    );
};

export default ChartStatistics;
