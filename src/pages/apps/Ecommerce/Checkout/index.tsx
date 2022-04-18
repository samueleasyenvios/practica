import React, { useState } from 'react';
import { Row, Col, Card, Tab, Tabs, Button } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../../../components/PageTitle';

import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';
import Summary from './Summary';

// images
import product1 from '../../../../assets/images/products/product-1.png';
import product2 from '../../../../assets/images/products/product-6.png';
import product3 from '../../../../assets/images/products/product-8.png';

interface CartItems {
    items: {
        id: number;
        image: string;
        name: string;
        size: string;
        color: string;
        price: number;
        qty: number;
        total: number;
    }[];
    sub_total: number;
    shipping: number;
    total: number;
}

// Checkout
const Checkout = () => {
    const [key, setKey] = useState<string | null>('billing-info');

    const [cart, setCart] = useState<CartItems>({
        items: [
            {
                id: 1,
                image: product1,
                name: 'Blue color T-shirt',
                size: 'Large',
                color: 'Light Green',
                price: 41,
                qty: 1,
                total: 41,
            },
            {
                id: 2,
                image: product2,
                name: 'Blue Hoodie for men',
                size: 'Medium',
                color: 'Light pink',
                price: 45,
                qty: 2,
                total: 90,
            },
            {
                id: 3,
                image: product3,
                name: 'Full sleeve Pink T-shirt',
                size: 'Large',
                color: 'Green',
                price: 45,
                qty: 1,
                total: 45,
            },
        ],
        sub_total: 176,
        shipping: 0,
        total: 176,
    });

    /**
     * Update the shipping cost
     */
    const updateShipping = (shippingCost: number) => {
        var localCart = { ...cart };
        localCart['shipping'] = shippingCost;
        localCart['total'] = localCart['sub_total'] + shippingCost;
        setCart(localCart);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Ecommerce', path: '/apps/ecommerce/checkout' },
                    { label: 'Checkout', path: '/apps/ecommerce/checkout', active: true },
                ]}
                title={'Checkout'}
            />

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={8}>
                                    <div
                                        id="checkout-nav-pills-wizard"
                                        className="twitter-bs-wizard form-wizard-header"
                                    >
                                        <Wizard>
                                            <Steps>
                                                <Tabs
                                                    id="controlled-tab-example"
                                                    activeKey={key ? key : 'billing-info'}
                                                    onSelect={(k) => setKey(k)}
                                                    variant="pills"
                                                    className="nav-justified twitter-bs-wizard-nav mb-2"
                                                >
                                                    <Tab
                                                        eventKey="billing-info"
                                                        title={
                                                            <>
                                                                <span className="number">01</span>
                                                                <span className="d-none d-sm-inline">Billing Info</span>
                                                            </>
                                                        }
                                                    >
                                                        <Step
                                                            id="billing-info"
                                                            render={({ next }) => (
                                                                <>
                                                                    <Billing />

                                                                    <ul className="pager wizard list-inline mt-2">
                                                                        <li className="list-inline-item">
                                                                            <Link
                                                                                to="/apps/ecommerce/shopping-cart"
                                                                                className="btn btn-secondary"
                                                                            >
                                                                                <i className="mdi mdi-arrow-left"></i>{' '}
                                                                                Back to Shopping Cart
                                                                            </Link>
                                                                        </li>
                                                                        <li className="next list-inline-item float-end">
                                                                            <Button
                                                                                onClick={() => {
                                                                                    setKey('shipping-info');
                                                                                    next();
                                                                                }}
                                                                                variant="success"
                                                                            >
                                                                                <i className="mdi mdi-truck-fast me-1"></i>{' '}
                                                                                Proceed to Shipping
                                                                            </Button>
                                                                        </li>
                                                                    </ul>
                                                                </>
                                                            )}
                                                        />
                                                    </Tab>
                                                    <Tab
                                                        eventKey="shipping-info"
                                                        title={
                                                            <>
                                                                <span className="number">02</span>
                                                                <span className="d-none d-sm-inline">
                                                                    Shipping Info
                                                                </span>
                                                            </>
                                                        }
                                                    >
                                                        <Step
                                                            id="shipping-info"
                                                            render={({ next, previous }) => (
                                                                <>
                                                                    <Shipping updateShipping={updateShipping} />

                                                                    <ul className="pager wizard list-inline mt-3">
                                                                        <li className="previous list-inline-item">
                                                                            <Button
                                                                                onClick={() => {
                                                                                    setKey('billing-info');
                                                                                    previous();
                                                                                }}
                                                                                variant="secondary"
                                                                            >
                                                                                <i className="mdi mdi-arrow-left me-1"></i>{' '}
                                                                                Back to Billing
                                                                            </Button>
                                                                        </li>
                                                                        <li className="next list-inline-item float-end">
                                                                            <Button
                                                                                onClick={() => {
                                                                                    setKey('payment-info');
                                                                                    next();
                                                                                }}
                                                                                variant="success"
                                                                            >
                                                                                <i className="mdi mdi-cash-multiple me-1"></i>{' '}
                                                                                Continue to Payment
                                                                            </Button>
                                                                        </li>
                                                                    </ul>
                                                                </>
                                                            )}
                                                        />
                                                    </Tab>
                                                    <Tab
                                                        eventKey="payment-info"
                                                        title={
                                                            <>
                                                                <span className="number">03</span>
                                                                <span className="d-none d-sm-inline">Payment Info</span>
                                                            </>
                                                        }
                                                    >
                                                        <Step
                                                            id="payment-info"
                                                            render={({ previous }) => (
                                                                <>
                                                                    <Payment />
                                                                    <ul className="pager wizard list-inline mt-3">
                                                                        <li className="list-inline-item">
                                                                            <Button
                                                                                onClick={() => {
                                                                                    setKey('shipping-info');
                                                                                    previous();
                                                                                }}
                                                                                variant="secondary"
                                                                            >
                                                                                <i className="mdi mdi-arrow-left me-1"></i>
                                                                                Back to Shopping Cart
                                                                            </Button>
                                                                        </li>
                                                                        <li className="next list-inline-item float-end">
                                                                            <Button variant="success">
                                                                                <i className="mdi mdi-cash-multiple me-1"></i>{' '}
                                                                                Complete Order
                                                                            </Button>
                                                                        </li>
                                                                    </ul>
                                                                </>
                                                            )}
                                                        />
                                                    </Tab>
                                                </Tabs>
                                            </Steps>
                                        </Wizard>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Summary cart={cart} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Checkout;
