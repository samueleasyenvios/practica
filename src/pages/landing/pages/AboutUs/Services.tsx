import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// type
import { Service } from './data';

interface ServicesProp {
    services: Service[];
}

const Services = ({ services }: ServicesProp) => {
    return (
        <section className="section bg-light">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7}>
                        <div className="title text-center mb-4">
                            <h3 className="mb-3">The theme is fully responsive and easy to customize</h3>
                            <p className="text-muted">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium totam rem aperiam eaque ipsa quae
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {services &&
                        services.length > 0 &&
                        (services || []).map((service, index) => {
                            return (
                                <Col key={index} lg={4} sm={6}>
                                    <div className="about-box card">
                                        <div className="p-4">
                                            <div className="clearfix mb-2">
                                                <h4 className="float-start me-3 text-primary about-index-number mt-0">
                                                    {service.id}
                                                </h4>
                                                <h5 className="font-18 mt-0 pt-2">{service.title}</h5>
                                            </div>
                                            <p className="text-muted mb-0">{service.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
