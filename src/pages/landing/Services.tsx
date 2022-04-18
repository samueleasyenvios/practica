import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Service } from './data';

interface ServiceProps {
    services: Service[];
}

const Services = ({ services }: ServiceProps) => {
    return (
        <section className="section mt-4" id="services">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7}>
                        <div className="title text-center my-4">
                            <h3 className="mb-3">The theme is fully responsive and easy to customize</h3>
                            <p className="text-muted">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium totam rem aperiam eaque ipsa quae
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {(services || []).map((item, index) => {
                        return (
                            <Col key={index} lg={4} sm={6}>
                                <div className="services-box text-center mt-3 p-3">
                                    <div className="services-icon mb-3">
                                        <i className={classNames(item.icon, 'h2', 'mt-0')}></i>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p className="text-muted">{item.desc}</p>
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
