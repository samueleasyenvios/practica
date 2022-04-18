import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { EngagementOverviewsTypes } from './data';

interface EngagementOverviewsProps {
    engagementOverview: EngagementOverviewsTypes[];
}

const EngagementOverviews = ({ engagementOverview }: EngagementOverviewsProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="clearfix">
                    <Link to="#" className="p-0 float-end mb-3">
                        Export <i className="mdi mdi-download ms-1"></i>
                    </Link>
                    <h4 className="header-title">Engagement Overview</h4>
                </div>

                <div className="table-responsive">
                    <table className="table table-sm table-centered mb-0 font-14">
                        <thead className="table-light">
                            <tr>
                                <th>Duration (Secs)</th>
                                <th style={{ width: '30%' }}>Sessions</th>
                                <th style={{ width: '30%' }}>Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(engagementOverview || []).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.duration}</td>
                                        <td>{item.sessions}</td>
                                        <td>{item.views}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default EngagementOverviews;
