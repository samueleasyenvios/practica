import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container-fluid">
                    <Row>
                        <Col md={6}>
                            {currentYear} &copy; Minton theme by <Link to="#">Coderthemes</Link>
                        </Col>

                        <Col md={6}>
                            <div className="text-md-end footer-links d-none d-sm-block">
                                <Link to="#">About Us</Link>
                                <Link to="#">Help</Link>
                                <Link to="#">Contact Us</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
