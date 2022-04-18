import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { ChannelsTypes } from './data';

interface ChannelsProps {
    channels: ChannelsTypes[];
}

const Channels = ({ channels }: ChannelsProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="clearfix">
                    <Link to="#" className="p-0 float-end mb-3">
                        Export <i className="mdi mdi-download ms-1"></i>
                    </Link>
                    <h4 className="header-title">Channels</h4>
                </div>

                <div className="table-responsive">
                    <table className="table table-sm table-centered mb-0 font-14">
                        <thead className="table-light">
                            <tr>
                                <th>Channel</th>
                                <th>Visits</th>
                                <th style={{ width: '40%' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(channels || []).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.channel}</td>
                                        <td>{item.visits}</td>
                                        <td>
                                            <ProgressBar
                                                now={item.progress.value}
                                                variant={item.progress.variant}
                                                style={{ height: '3px' }}
                                            />
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

export default Channels;
