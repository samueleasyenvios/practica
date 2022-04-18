import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

// icon data
import { FEATHERICONLIST } from './data';

const FeatherIcons = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/feather' },
                    { label: 'Feather Icons', path: '/ui/icons/feather', active: true },
                ]}
                title={'Feather Icons'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="icons-list-demo">
                                {(FEATHERICONLIST || []).map((icon, index) => {
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

export default FeatherIcons;
