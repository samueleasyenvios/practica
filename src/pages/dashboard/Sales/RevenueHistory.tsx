import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// types
import { RevenueHistoryTypes } from './data';

interface RevenueHistoryProps {
    revenueHistory: RevenueHistoryTypes[];
}

const RevenueHistory = ({ revenueHistory }: RevenueHistoryProps) => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer arrow-none card-drop">
                        <i className="mdi mdi-dots-horizontal"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Download</Dropdown.Item>
                        <Dropdown.Item>Upload</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-3">Revenue History</h4>

                <div className="table-responsive">
                    <table className="table table-borderless table-hover table-nowrap table-centered m-0">
                        <thead className="table-light">
                            <tr>
                                <th>Marketplaces</th>
                                <th>Date</th>
                                <th>US Tax Hold</th>
                                <th>Payouts</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(revenueHistory || []).map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <h5 className="m-0 fw-normal">{item.marketplaces}</h5>
                                        </td>

                                        <td>{item.date}</td>
                                        <td>{item.US_tax_hold}</td>
                                        <td>{item.payouts}</td>

                                        <td>
                                            <span
                                                className={classNames('badge', {
                                                    'bg-soft-warning text-warning': item.status === 'Upcoming',
                                                    'bg-soft-success text-success': item.status === 'Paid',
                                                    'bg-soft-danger text-danger': item.status === 'Overdue',
                                                })}
                                            >
                                                {item.status}
                                            </span>
                                        </td>

                                        <td>
                                            <Link to="#" className="btn btn-xs btn-secondary">
                                                <i className="mdi mdi-pencil"></i>
                                            </Link>
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

export default RevenueHistory;
