import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { PlanItemsTypes } from '../pages/other/data';

interface PricingCardProps {
    plans: PlanItemsTypes[];
    containerClass?: string;
    pricingCardClass?: string;
}

const PricingCard = ({ plans, containerClass, pricingCardClass }: PricingCardProps) => {
    return (
        <>
            <Row className={containerClass}>
                {(plans || []).map((plan, idx) => {
                    return (
                        <Col xl={3} md={6} key={idx}>
                            <Card
                                className={classNames(
                                    'card-pricing',
                                    {
                                        'ribbon-box': plan.isPopular,
                                    },
                                    pricingCardClass
                                )}
                            >
                                {plan.isPopular && (
                                    <div className="ribbon-two ribbon-two-danger">
                                        <span>Popular</span>
                                    </div>
                                )}

                                <Card.Body className="text-center">
                                    <p className="card-pricing-plan-name fw-bold text-uppercase">{plan.name}</p>
                                    <span
                                        className={classNames(
                                            'card-pricing-icon',
                                            plan.isPopular ? 'text-white bg-danger' : 'text-primary'
                                        )}
                                    >
                                        <i className={plan.icon}></i>
                                    </span>
                                    <h2 className="card-pricing-price">
                                        ${plan.price} <span>/ {plan.duration}</span>
                                    </h2>
                                    <ul className="card-pricing-features">
                                        {(plan.features || []).map((feature, idx1) => {
                                            return <li key={idx1}>{feature}</li>;
                                        })}
                                    </ul>
                                    <div className="d-grid">
                                        <button
                                            className={classNames(
                                                'btn',
                                                'waves-effect',
                                                'waves-light',
                                                'mt-4',
                                                plan.isPopular ? 'btn-danger' : 'btn-primary'
                                            )}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default PricingCard;
