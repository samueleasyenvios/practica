import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';

import AllIcons from './AllIcons';
import IconSizes from './IconSizes';
import NewIcons from './NewIcons';
import RotateIcons from './RotateIcons';
import SpinIcons from './SpinIcons';

// icon data
import { MDIICONS_LIST, ICONSIZE_LIST, ROTATEICON_LIST, SPINICON_LIST, MdiIconType } from './data';

const MDIIcons = () => {
    const newIcons: MdiIconType[] = MDIICONS_LIST && MDIICONS_LIST.filter((icon) => icon.version === '5.8.55');

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/mdi' },
                    { label: 'Material Design', path: '/ui/icons/mdi', active: true },
                ]}
                title={'Material Design'}
            />

            <Row className="icons-list-demo">
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-4">New Icons v5.8.55</h4>
                            <NewIcons icons={newIcons} />
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-4">All Icons</h4>
                            <AllIcons icons={MDIICONS_LIST} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-4">Size</h4>
                            <IconSizes sizeList={ICONSIZE_LIST} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-4">Rotate</h4>
                            <RotateIcons icons={ROTATEICON_LIST} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-4">Spin</h4>
                            <SpinIcons icons={SPINICON_LIST} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default MDIIcons;
