import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// data
import { Testimonial } from './data';

interface TestimonialProp {
    testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialProp) => {
    return (
        <section className="section bg-light" id="testimonial">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="title text-center mb-4">
                            <i className="pe-7s-chat h1 text-primary mb-3"></i>
                            <h3 className="font-22 mb-3">What our Users Says</h3>
                            <p className="text-muted">
                                If several languages coalesce the grammar of the resulting language
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {testimonials &&
                        testimonials.length > 0 &&
                        (testimonials || []).map((testimonial, index) => {
                            return (
                                <Col key={index} lg={4}>
                                    <div className="testi-box mt-4">
                                        <div className="testi-desc p-4">
                                            <p className="text-muted mb-0">" {testimonial.message} "</p>
                                        </div>

                                        <div className="p-4">
                                            <div className="testi-img float-start me-3">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt=""
                                                    className="rounded-circle avatar-md"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-16 mb-1">{testimonial.clientName}</h4>
                                                <p className="text-muted mb-2">
                                                    {' '}
                                                    <small> - {testimonial.title}</small>
                                                </p>
                                            </div>
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

export default Testimonials;
