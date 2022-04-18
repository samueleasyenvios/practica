import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Service } from './data';

// images
import img1 from '../../assets/images/landing/features/img-1.png';
import img2 from '../../assets/images/landing/features/img-2.png';

interface FeaturesProps {
    features: Service[];
}

const Features = ({ features }: FeaturesProps) => {
    return (
        <section className="section bg-light" id="features">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="title text-center mb-5">
                            <i className="pe-7s-helm h1 text-primary mb-3"></i>
                            <h3 className="font-22 mb-3">Key features of the product</h3>
                            <p className="text-muted">
                                If several languages coalesce the grammar of the resulting language
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-center">
                    <Col lg={5} sm={6}>
                        <div>
                            <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        {(features.filter((x, i) => i % 2 === 0) || []).map((item, index, arr) => {
                            return (
                                <div key={index} className={classNames({ 'mb-4': index !== arr.length - 1 })}>
                                    <div className="feature-icon float-start">
                                        <i className={classNames(item.icon, 'text-primary', 'font-24', 'me-3')}></i>
                                    </div>
                                    <h4 className="mb-3">{item.title}</h4>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            );
                        })}
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-center mt-5 pt-4">
                    <Col lg={5}>
                        {(features || []).map((item, index, arr) => {
                            return (
                                index % 2 !== 0 && (
                                    <div key={index} className={classNames({ 'mb-4': index !== arr.length - 1 })}>
                                        <div className="feature-icon float-start">
                                            <i className={classNames(item.icon, 'text-primary', 'font-24', 'me-3')}></i>
                                        </div>
                                        <h4 className="mb-3">{item.title}</h4>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                )
                            );
                        })}
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} sm={6}>
                        <div>
                            <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
