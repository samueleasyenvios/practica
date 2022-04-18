import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// types
import { PricingPlan } from './data';

interface PricingCardProps {
    plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <div
            className={classNames('pricing-plan mt-3 p-3', {
                active: plan.active,
            })}
        >
            <div className="plan-header px-3 mt-3">
                <div className="pricing-icon float-end">
                    <i className={classNames(plan.icon, 'h1', 'mt-0', 'text-primary')}></i>
                </div>
                <h5 className="plan-title font-18">{plan.title}</h5>
                <p className="text-muted">{plan.desc}</p>
                <h2 className="pt-4">
                    <sup>
                        <span className="font-18">$</span>
                    </sup>{' '}
                    <span className="text-primary">{plan.price}</span> <span className="font-18">Per License</span>{' '}
                </h2>
            </div>
            <hr className="my-4" />

            <div className="plan-content text-muted mb-4 px-3">
                {(plan.features.filter((x) => x.supported) || []).map((feature, index) => {
                    return (
                        <p key={index}>
                            <i className="mdi mdi-check text-primary me-2"></i> {feature.name}
                        </p>
                    );
                })}
                {(plan.features.filter((x) => !x.supported) || []).map((feature, index) => {
                    return (
                        <p key={index}>
                            <i className="mdi mdi-close text-danger me-2"></i> {feature.name}
                        </p>
                    );
                })}
            </div>

            <div className="text-center py-3">
                <Link to="#" className="btn btn-purple">
                    Purchase now
                </Link>
            </div>
        </div>
    );
};

interface PricingProps {
    pricingPlans: PricingPlan[];
}

const Pricing = ({ pricingPlans }: PricingProps) => {
    return (
        <section className="section" id="pricing">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="title text-center mb-4">
                            <i className="pe-7s-notebook h1 text-primary mb-3"></i>
                            <h3 className="font-22 mb-3">Our Pricing plans</h3>
                            <p className="text-muted">
                                If several languages coalesce the grammar of the resulting language
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {(pricingPlans || []).map((plan, index) => {
                        return (
                            <Col key={index} lg={4}>
                                <PricingCard plan={plan} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
