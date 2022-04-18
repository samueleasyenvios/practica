import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import FAQs from '../../components/FAQs';

// dummy data
import { generalFaqs, privacyFaqs, supportFaqs } from './data';

// FAQ component
const FAQ = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extra Pages', path: '/pages/faq' },
                    { label: 'FAQs', path: '/pages/faq', active: true },
                ]}
                title={'FAQs'}
            />

            <Row>
                <Col>
                    <div className="text-center">
                        <i className="h1 mdi mdi-comment-multiple-outline text-muted"></i>
                        <h3 className="mb-3">Frequently Asked Questions</h3>
                        <p className="text-muted">
                            Nisi praesentium similique totam odio obcaecati, reprehenderit, dignissimos rem temporibus
                            ea inventore alias!
                            <br /> Beatae animi nemo ea tempora, temporibus laborum facilis ut!
                        </p>

                        <button type="button" className="btn btn-success waves-effect waves-light mt-2 me-1">
                            <i className="mdi mdi-email-outline me-1"></i> Email us your question
                        </button>
                        <button type="button" className="btn btn-primary waves-effect waves-light mt-2">
                            <i className="mdi mdi-twitter me-1"></i> Send us a tweet
                        </button>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="general-q">
                                <Nav as="ul" variant="pills" className="navtab-bg">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="general-q" className="cursor-pointer px-3 py-2">
                                            <span className="me-1">
                                                <i className="mdi mdi-help-circle-outline"></i>
                                            </span>
                                            <span className="d-none d-sm-inline-block">General Questions</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="privacy-p" className="cursor-pointer px-3 py-2">
                                            <span className="me-1">
                                                <i className="mdi mdi-shield-half-full"></i>
                                            </span>
                                            <span className="d-none d-sm-inline-block">Privacy Policy</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="support" className="cursor-pointer px-3 py-2">
                                            <span className="me-1">
                                                <i className="mdi mdi-headset"></i>
                                            </span>
                                            <span className="d-none d-sm-inline-block">Support</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="general-q">
                                        <FAQs rawFaqs={generalFaqs} containerClass={'pt-2'} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="privacy-p">
                                        <FAQs rawFaqs={privacyFaqs} containerClass={'pt-2'} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="support">
                                        <FAQs rawFaqs={supportFaqs} containerClass={'pt-2'} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FAQ;
