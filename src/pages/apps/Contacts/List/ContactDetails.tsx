import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Dropdown } from 'react-bootstrap';

// types
import { ContactsItemTypes } from './data';

interface ContactDetailsProps {
    contacts: ContactsItemTypes[];
}

const ContactDetails = ({ contacts }: ContactDetailsProps) => {
    return (
        <>
            <Row>
                {(contacts || []).map((user, index) => {
                    return (
                        <Col key={index} xl={3} sm={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <Dropdown className="float-end" align="end">
                                        <Dropdown.Toggle as="a" variant="success" className="text-body cursor-pointer">
                                            <i className="mdi mdi-dots-vertical font-20"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>Action</Dropdown.Item>
                                            <Dropdown.Item>Another action</Dropdown.Item>
                                            <Dropdown.Item>Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {user.avatar ? (
                                        <img
                                            src={user.avatar}
                                            className="rounded-circle img-thumbnail avatar-xl mt-1"
                                            alt=""
                                        />
                                    ) : (
                                        <div className="avatar-xl mx-auto mt-1">
                                            <div className="avatar-title bg-light rounded-circle">
                                                <i className="mdi mdi-account h1 m-0 text-body"></i>
                                            </div>
                                        </div>
                                    )}

                                    <h4 className="mt-3 mb-1">
                                        <Link to="/apps/contacts/profile" className="text-dark">
                                            {user.name}
                                        </Link>
                                    </h4>
                                    <p className="text-muted">
                                        @{user.position} <span> | </span>{' '}
                                        <span>
                                            <Link to="#" className="text-pink">
                                                {user.website}
                                            </Link>
                                        </span>
                                    </p>

                                    <ul className="social-list list-inline mt-4 mb-2">
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-purple text-purple">
                                                <i className="mdi mdi-facebook"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-danger text-danger">
                                                <i className="mdi mdi-google"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="social-list-item border-secondary text-secondary">
                                                <i className="mdi mdi-github"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default ContactDetails;
