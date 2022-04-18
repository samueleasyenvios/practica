import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// component
import PageTitle from '../../../components/PageTitle';

// icon data
import { REMIX_ICONS_LIST } from './data';

const RemixIcons = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/remix' },
                    { label: 'Remix Icons', path: '/ui/icons/remix', active: true },
                ]}
                title={'Remix Icons'}
            />

            <Row>
                <Col xs={12}>
                    {(REMIX_ICONS_LIST || []).map((category, index) => {
                        return (
                            <Card key={index}>
                                <Card.Body>
                                    <h4 className="card-title">{Object.keys(category)[0]}</h4>
                                    {Object.keys(category).includes('Editor') ? (
                                        <>
                                            <p className="card-title-desc mb-2">
                                                Use <code>&lt;i className="ri-bold"&gt;&lt;/i&gt;</code>
                                                <span className="badge bg-success">v 2.4.1</span>.
                                            </p>
                                            <Row className="icons-list-demo">
                                                {(Object.keys(category[Object.keys(category)[0]]) || []).map(
                                                    (icon, index) => {
                                                        return (
                                                            <Col key={index} sm={6} lg={4} xl={3}>
                                                                <i className={classNames('ri-' + icon)}></i> ri-
                                                                {icon}
                                                            </Col>
                                                        );
                                                    }
                                                )}
                                            </Row>
                                        </>
                                    ) : (
                                        <>
                                            <p className="card-title-desc mb-2">
                                                Use <code>&lt;i className="ri-home-line"&gt;&lt;/i&gt;</code> or{' '}
                                                <code>&lt;i className="ri-home-fill"&gt;&lt;/i&gt;</code>{' '}
                                                <span className="badge bg-success">v 2.4.1</span>.
                                            </p>
                                            <Row className="icons-list-demo">
                                                {(Object.keys(category[Object.keys(category)[0]]) || []).map(
                                                    (icon, index) => {
                                                        return (
                                                            <React.Fragment key={icon + index}>
                                                                <Col sm={6} lg={4} xl={3}>
                                                                    <i
                                                                        className={classNames('ri-' + icon + '-line')}
                                                                    ></i>{' '}
                                                                    ri-{icon}-line
                                                                </Col>
                                                                <Col sm={6} lg={4} xl={3}>
                                                                    <i
                                                                        className={classNames('ri-' + icon + '-fill')}
                                                                    ></i>{' '}
                                                                    ri-{icon}-fill
                                                                </Col>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                )}
                                            </Row>
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Col>
            </Row>
        </>
    );
};

export default RemixIcons;
