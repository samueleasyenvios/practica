import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
// component
import PageTitle from '../../../components/PageTitle';

// data
import { FAICONS_LIST } from './data';

const FontAwesomeIcons = () => {
    const solidIcons: any[] =
        FAICONS_LIST.data &&
        FAICONS_LIST.data.length &&
        FAICONS_LIST.data.filter((icon: any) => icon.attributes.membership.free.includes('solid'));

    const regularIcons: any[] =
        FAICONS_LIST.data &&
        FAICONS_LIST.data.length &&
        FAICONS_LIST.data.filter((icon: any) => icon.attributes.membership.free.includes('regular'));

    const brandsIcons: any[] =
        FAICONS_LIST.data &&
        FAICONS_LIST.data.length &&
        FAICONS_LIST.data.filter((icon: any) => icon.attributes.membership.free.includes('brands'));

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/font-awesome' },
                    {
                        label: 'Font Awesome',
                        path: '/ui/icons/font-awesome',
                        active: true,
                    },
                ]}
                title={'Font Awesome'}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Solid</h4>
                            <p className="sub-header">
                                Use <code>&lt;i className="fas fa-ad"&gt;&lt;/i&gt;</code>{' '}
                                <span className="badge bg-success">v 5.13.0</span>.
                            </p>

                            <Row className="icons-list-demo" id="solid">
                                {(solidIcons || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} md={4} lg={3}>
                                            <i className={classNames('fas', 'fa-' + icon.attributes.id)}></i>
                                            fas fa-{icon.attributes.id}
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Regular</h4>
                            <p className="sub-header">
                                Use <code>&lt;i className="far fa-address-book"&gt;&lt;/i&gt;</code>{' '}
                                <span className="badge bg-success">v 5.13.0</span>.
                            </p>

                            <Row className="icons-list-demo">
                                {(regularIcons || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} md={4} lg={3}>
                                            <i className={classNames('far', 'fa-' + icon.attributes.id)}></i>
                                            far fa-{icon.attributes.id}
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Brands</h4>
                            <p className="sub-header">
                                Use <code>&lt;i className="fab fa-500px"&gt;&lt;/i&gt;</code>{' '}
                                <span className="badge bg-success">v 5.13.0</span>.
                            </p>

                            <Row className="icons-list-demo">
                                {(brandsIcons || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} md={4} lg={3}>
                                            <i className={classNames('fab', 'fa-' + icon.attributes.id)}></i>
                                            far fa-{icon.attributes.id}
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

export default FontAwesomeIcons;
