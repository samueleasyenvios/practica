import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// component
import PageTitle from '../../../components/PageTitle';

// icon data
import { REGULAR_ICONS, SOLID_ICONS, LOGO_ICONS } from './data';

const BoxIcons = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/boxicons' },
                    { label: 'Boxicons', path: '/ui/icons/boxicons', active: true },
                ]}
                title={'Boxicons'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Examples</h4>
                            <p className="sub-header">
                                Use class <code>&lt;i class="bx bx-**"&gt;&lt;/i&gt;</code>
                            </p>

                            <h5>Regular</h5>

                            <Row className="icons-list-demo">
                                {(REGULAR_ICONS || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} lg={4} xl={3}>
                                            <i className={classNames(icon.name)}></i> {icon.name}
                                        </Col>
                                    );
                                })}
                            </Row>

                            <h5 className="mt-5">Solid Icons</h5>

                            <Row className="icons-list-demo">
                                {(SOLID_ICONS || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} lg={4} xl={3}>
                                            <i className={classNames(icon.name)}></i> {icon.name}
                                        </Col>
                                    );
                                })}
                            </Row>

                            <h5 className="mt-5">Logos</h5>

                            <Row className="icons-list-demo">
                                {(LOGO_ICONS || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} lg={4} xl={3}>
                                            <i className={classNames(icon.name)}></i> {icon.name}
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default BoxIcons;
