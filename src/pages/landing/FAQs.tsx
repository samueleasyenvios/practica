import React from 'react';
import { Container, Row, Col, Nav, Tab, Fade } from 'react-bootstrap';
import classNames from 'classnames';

// data
import { RawFaqs } from '../other/data';
import faqImage from '../../assets/images/landing/faq-img.png';

interface FAQsProp {
    generalFaqs: RawFaqs[];
    pricingFaqs: RawFaqs[];
}

interface FAQProp {
    faqItem: RawFaqs;
    containerClass?: string;
}

const FAQ = ({ faqItem, containerClass }: FAQProp) => {
    return (
        <div className={classNames('faq-box', containerClass)}>
            <div className="faq-question-q-box float-start me-4">Q.</div>
            <div className="overflow-hidden">
                <h5 className="font-16 mt-0">{faqItem.question}</h5>
                <p className="text-muted">{faqItem.answer}</p>
            </div>
        </div>
    );
};

const FAQs = ({ generalFaqs, pricingFaqs }: FAQsProp) => {
    return (
        <section className="section" id="faq">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="title text-center mb-5">
                            <i className="pe-7s-help1 h1 text-primary mb-3"></i>
                            <h3 className="font-22 mb-3">Frequently Asked Questions</h3>
                            <p className="text-muted">
                                If several languages coalesce the grammar of the resulting language
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <img src={faqImage} alt="" className="img-fluid mx-auto d-block" />
                    </Col>
                    <Col lg={7}>
                        <Tab.Container id="pills-tab" transition={Fade} defaultActiveKey="pills-general-tab">
                            <Nav variant="pills" className="faq-nav-tabs mb-3" justify as="ul">
                                <Nav.Item className="text-sm-start" as="li">
                                    <Nav.Link eventKey="pills-general-tab" className="cursor-pointer">
                                        <div className="clearfix">
                                            <i className="pe-7s-wallet text-purple float-md-end text-md-center h2 m-0"></i>
                                            <h4 className="me-2 d-none d-sm-inline-block">General Questions</h4>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="text-sm-start" as="li">
                                    <Nav.Link eventKey="pills-pricing-tab" className="cursor-pointer">
                                        <div className="clearfix">
                                            <i className="pe-7s-notebook text-purple float-md-end h2 m-0"></i>
                                            <h4 className="me-2 d-none d-sm-inline-block">Pricing & Plans</h4>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="faq-tab-content">
                                <Tab.Pane eventKey="pills-general-tab">
                                    <Row>
                                        <Col lg={12}>
                                            <div className="p-4">
                                                {generalFaqs &&
                                                    generalFaqs.length > 0 &&
                                                    (generalFaqs || []).map((f, index) => {
                                                        return (
                                                            <FAQ
                                                                key={f.id}
                                                                faqItem={f}
                                                                containerClass={
                                                                    index < generalFaqs.length - 1 ? 'mb-4' : ''
                                                                }
                                                            />
                                                        );
                                                    })}
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="pills-pricing-tab">
                                    <Row>
                                        <Col lg={12}>
                                            <div className="p-4">
                                                {pricingFaqs &&
                                                    pricingFaqs.length > 0 &&
                                                    (pricingFaqs || []).map((f, index) => {
                                                        return (
                                                            <FAQ
                                                                key={f.id}
                                                                faqItem={f}
                                                                containerClass={
                                                                    index < generalFaqs.length - 1 ? 'mb-4' : ''
                                                                }
                                                            />
                                                        );
                                                    })}
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQs;
