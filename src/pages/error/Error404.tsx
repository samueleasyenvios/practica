import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';

// images
import ghostSvg from '../../assets/images/error.svg';

const Error404 = () => {
    return (
        <React.Fragment>
            <div className="account-pages my-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={4}>
                            <Card>
                                <Card.Body className="p-4">
                                    <div className="error-ghost text-center">
                                        <img src={ghostSvg} width="200" alt="" />
                                    </div>

                                    <div className="text-center">
                                        <h3 className="mt-4 text-uppercase fw-bold">Page not found </h3>
                                        <p className="text-muted mb-0 mt-3" style={{ lineHeight: '20px' }}>
                                            It's looking like you may have taken a wrong turn. Don't worry... it happens
                                            to the best of us. You might want to check your internet connection. Here's
                                            a little tip that might help you get back on track.
                                        </p>

                                        <Link to="/" className="btn btn-primary mt-3">
                                            <i className="mdi mdi-reply me-1"></i> Return Home
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="footer footer-alt">
                {new Date().getFullYear()} &copy; Minton theme by <Link to="#">Coderthemes</Link>
            </footer>
        </React.Fragment>
    );
};

export default Error404;
