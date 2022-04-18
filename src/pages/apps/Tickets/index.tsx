import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import Statistics from './Statistics';
import ManageTickets from './ManageTickets';

// dummy data
import { ticketDetails } from './data';

const List = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/tickets' },
                    { label: 'Tickets', path: '/apps/tickets', active: true },
                ]}
                title={'Tickets'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="text-center">
                                <Row>
                                    <Col md={6} xl={3}>
                                        <Statistics icon="fe-tag" stats="25563" desc="Total Tickets" />
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <Statistics
                                            icon="fe-archive"
                                            textClass="text-warning"
                                            stats="6952"
                                            desc="Pending Tickets"
                                        />
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <Statistics
                                            icon="fe-shield"
                                            textClass="text-success"
                                            stats="18361"
                                            desc="Closed Tickets"
                                        />
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <Statistics
                                            icon="fe-delete"
                                            textClass="text-danger"
                                            stats="250"
                                            desc="Deleted Tickets"
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <ManageTickets ticketDetails={ticketDetails} />
                </Col>
            </Row>
        </>
    );
};

export default List;
