import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// image
import aboutImg from '../../../../assets/images/landing/home-img.png';

const About = () => {
    return (
        <section className="section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mo-mb-20">
                            <h4 className="mb-4">We are a full-stack web design and development studio</h4>
                            <p className="text-muted">
                                Separate existence is a myth Europe uses the same vocabulary the languages in
                                pronunciation and their most common words est
                            </p>
                            <p className="text-muted mb-4">At vero eos et accusamus et iusto odio ducimus qui atque</p>

                            <div className="text-muted">
                                <p>
                                    <i className="mdi mdi-check text-primary me-2"></i> Sed ut perspiciatis unde omnis
                                    iste
                                </p>
                                <p>
                                    <i className="mdi mdi-check text-primary me-2"></i> Et harum quidem rerum facilis
                                    est et
                                </p>
                                <p>
                                    <i className="mdi mdi-check text-primary me-2"></i> Itaque earum rerum hic tenetur a
                                    sapiente
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link to="#" className="btn btn-purple">
                                    Check Out Works <i className="mdi mdi-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div className="home-img">
                            <img src={aboutImg} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
