import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// components
import PageTitle from '../../../../components/PageTitle';

import UserBox from './UserBox';
import Skills from './Skills';
import About from './About';
import Settings from './Settings';

// dummy data
import { projectDetails, skills } from './data';

const Profile = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Contacts', path: '/apps/contacts/profile' },
                    { label: 'Profile', path: '/apps/contacts/profile', active: true },
                ]}
                title={'Profile'}
            />
            <Row>
                <Col xl={4} lg={4}>
                    {/* User information */}
                    <UserBox />

                    {/* User's skills */}
                    <Skills skills={skills} />
                </Col>

                <Col xl={8} lg={8}>
                    <Tab.Container defaultActiveKey="about-me">
                        <Card>
                            <Card.Body>
                                <Nav variant="pills" as="ul" className="navtab-bg">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="about-me" className="ms-0">
                                            <i className="mdi mdi-face-profile me-1"></i>About Me
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="settings">
                                            <i className="mdi mdi-cog me-1"></i>Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="about-me">
                                        <About projectDetails={projectDetails} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="settings">
                                        <Settings />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    );
};

export default Profile;
