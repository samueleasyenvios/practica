import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoLight from '../../assets/images/logo-light.png';
import logoDark from '../../assets/images/logo-dark.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark py-5 footer text-white">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="mb-3 footer-logo">
                            <img src={logoLight} alt="" className="logo-light" height="20" />
                            <img src={logoDark} alt="" className="logo-dark" height="20" />
                        </div>
                        <p className="pt-1 text-muted">Bootstrap 5 Admin Dashboard &amp; Landing Page Template</p>
                        <p className="text-muted">
                            If several languages coalesce the grammar of the resulting language{' '}
                        </p>
                    </Col>

                    <Col lg={{ span: 2, offset: 1 }}>
                        <h5 className="footer-title text-light mb-3">About</h5>
                        <ul className="list-unstyled footer-list">
                            <li>
                                <Link to="#">Home</Link>
                            </li>
                            <li>
                                <Link to="#">Features</Link>
                            </li>
                            <li>
                                <Link to="#">About Us</Link>
                            </li>
                            <li>
                                <Link to="#">FAQ</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={2}>
                        <h5 className="footer-title text-light mb-3">Support</h5>
                        <ul className="list-unstyled footer-list">
                            <li>
                                <Link to="#">Help & Support</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={3}>
                        <h5 className="footer-title text-light mb-3">Contact</h5>
                        <div className="pt-1">
                            <div className="float-start me-2">
                                <i className="pe-7s-map-marker font-20"></i>
                            </div>
                            <p className="text-muted overflow-hidden">2395 Point Street Chicago, IL 60639</p>
                        </div>
                        <div>
                            <div className="float-start me-2">
                                <i className="pe-7s-phone font-20"></i>
                            </div>
                            <p className="text-muted overflow-hidden">(123) 456-7890</p>
                        </div>
                        <div>
                            <div className="float-start me-2">
                                <i className="pe-7s-mail font-20"></i>
                            </div>
                            <p className="text-muted overflow-hidden">example@abc.com</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className="pt-4">
                            <div className="text-center">
                                <p className="text-muted mb-0">
                                    {currentYear} &copy; Minton. Design by
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        to={{ pathname: 'https://coderthemes.com/' }}
                                        className="text-muted"
                                    >
                                        Coderthemes
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
