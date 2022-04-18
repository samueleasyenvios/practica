import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageTitle from '../PageTitle';
import Header from '../../Header';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Footer from '../../Footer';

const Contact = () => {
    return (
        <div className="landing">
            {/* header */}
            <Header />

            {/* page title */}
            <PageTitle title="Contact us" breadcrumbItem="Contact" />

            {/* contact */}
            <section className="section">
                <Container>
                    {/* contact information */}
                    <Row className="mb-4">
                        <Col lg={3}>
                            <ContactInfo name="Phone" value="(123) 456-7890" icon="pe-7s-phone" />
                        </Col>
                        <Col lg={3}>
                            <ContactInfo name="E - mail" value="example@abc.com" icon="pe-7s-mail" />
                        </Col>
                        <Col lg={3}>
                            <ContactInfo name="Web" value="examplexyz.com" icon="pe-7s-global" />
                        </Col>
                        <Col lg={3}>
                            <ContactInfo
                                name="Address"
                                value="2395 Point Street Chicago, IL 60639"
                                icon="pe-7s-map-marker"
                            />
                        </Col>
                    </Row>

                    {/* contact form */}
                    <ContactForm />
                </Container>
            </section>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Contact;
