import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Countdown, { CountdownTimeDelta } from 'react-countdown';

// images
import rocketGif from '../../assets/images/animat-rocket-color.gif';

const CommingSoon = () => {
    // custom renderer with completed condition
    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownTimeDelta) => {
        if (completed) {
            // Render a completed state
            return <h3>Coming Soon</h3>;
        } else {
            // Render a countdown
            return (
                <>
                    <div className="counter-number">
                        <div className="coming-box">
                            {days}
                            <span>Days</span>
                        </div>
                        <div className="coming-box">
                            {hours}
                            <span>Hours</span>
                        </div>
                        <div className="coming-box">
                            {minutes}
                            <span>Minutes</span>
                        </div>
                        <div className="coming-box">
                            {seconds}
                            <span>Seconds</span>
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <div className="my-5">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-10">
                            <div className="text-center">
                                <img src={rocketGif} alt="" height="160" />

                                <h3 className="mt-4">Stay tunned, we're launching very soon</h3>
                                <p className="text-muted">We're making the system more awesome.</p>

                                <Row className="mt-5 justify-content-center">
                                    <Col md={8}>
                                        <Countdown
                                            date={Date.parse('2022/01/17')}
                                            renderer={renderer}
                                            className="counter-number"
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>

            <footer className="footer footer-alt">
                {new Date().getFullYear()} &copy; Minton theme by <Link to="#">Coderthemes</Link>
            </footer>
        </>
    );
};

export default CommingSoon;
