import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// images
import img1 from '../../assets/images/landing/hero-1.png';

const Hero = () => {
    return (
        <section className="bg-home bg-primary" id="home">
            <div className="bg-overlay"></div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="home-content text-center">
                            <h1 className="home-title mb-4 text-white">Here is the best way to present your apps</h1>
                            <p className="home-desc mb-4">
                                Minton is a fully featured premium admin template built on top of awesome Bootstrap 5,
                                modern web technology HTML5, CSS3 and jQuery.
                            </p>
                            <div>
                                <Link to="#" className="btn btn-light me-1">
                                    Contact us
                                </Link>
                                <Link to="#" className="btn btn-purple">
                                    Our Works
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="home-img text-center">
                    <img src={img1} alt="" className="img-fluid" style={{ maxWidth: '750px' }} />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
