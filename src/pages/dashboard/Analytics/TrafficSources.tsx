import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// types
import { TrafficSourceType } from './data';

interface TrafficSourcesProps {
    trafficSources: TrafficSourceType[];
}

const TrafficSources = ({ trafficSources }: TrafficSourcesProps) => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="arrow-none card-drop cursor-pointer">
                        <i className="mdi mdi-dots-horizontal"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Download</Dropdown.Item>
                        <Dropdown.Item>Upload</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mt-0 mb-3">Traffic Sources</h4>

                <div className="table-responsive browser_users">
                    <table className="table mb-0">
                        <thead className="table-light">
                            <tr>
                                <th className="border-top-0">Channel</th>
                                <th className="border-top-0">Sessions</th>
                                <th className="border-top-0">Prev.Period</th>
                                <th className="border-top-0">% Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(trafficSources || []).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Link to="#" className="text-primary">
                                                {item.channel}
                                            </Link>
                                        </td>
                                        <td>
                                            {item.sessions.value}{' '}
                                            <small className="text-muted">({item.sessions.rate})</small>
                                        </td>
                                        <td>
                                            {item.previewPeriod.value}{' '}
                                            <small className="text-muted">({item.previewPeriod.rate})</small>
                                        </td>
                                        <td>
                                            {' '}
                                            {item.change.value}{' '}
                                            <i
                                                className={classNames(
                                                    'fas',
                                                    'fa-caret-' + item.change.direction,
                                                    'font-16',
                                                    item.change.direction === 'up' ? 'text-success' : 'text-danger'
                                                )}
                                            ></i>
                                        </td>
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

export default TrafficSources;
