import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { BrowserTypes } from './data';

interface BrowserUsageProps {
    browserUsageData: BrowserTypes[];
}

const BrowserUsage = ({ browserUsageData }: BrowserUsageProps) => {
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

                <h4 className="header-title mt-0 mb-3">Browser Used By Users</h4>

                <div className="table-responsive browser_users">
                    <table className="table mb-0">
                        <thead className="table-light">
                            <tr>
                                <th className="border-top-0">Browser</th>
                                <th className="border-top-0">Sessions</th>
                                <th className="border-top-0">Bounce Rate</th>
                                <th className="border-top-0">Transactions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(browserUsageData || []).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <i
                                                className={classNames(
                                                    'fab',
                                                    'fa-' + item.browser.icon,
                                                    'me-2',
                                                    'text-' + item.browser.variant,
                                                    'font-16'
                                                )}
                                            ></i>
                                            {item.browser.name}
                                        </td>
                                        <td>
                                            {item.sessions.value}{' '}
                                            <small className="text-muted">({item.sessions.rate})</small>
                                        </td>
                                        <td> {item.bounce_rate}%</td>
                                        <td>
                                            {item.transactions.value}{' '}
                                            <small className="text-muted">({item.transactions.rate})</small>
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

export default BrowserUsage;
