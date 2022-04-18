import React, { useState } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../../components/PageTitle';

import { cartItems, CartItemTypes } from './data';

interface CartSummaryTypes {
    gross_total?: number;
    discount?: number;
    shipping_charge?: number;
    tax?: number;
    net_total?: number;
}

// summary
const CartSummary = (props: { summary: CartSummaryTypes }) => {
    const summary = props.summary || {};

    return (
        <>
            <div className="border p-3 mt-4 mt-lg-0 rounded">
                <h4 className="header-title mb-3">Order Summary</h4>

                <Table responsive className="mb-0">
                    <tbody>
                        <tr>
                            <td>Grand Total :</td>
                            <td>${summary.gross_total!.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Discount : </td>
                            <td>-${summary.discount!.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping Charge :</td>
                            <td>${summary.shipping_charge!.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax : </td>
                            <td>${summary.tax!.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th>Total :</th>
                            <th>${summary.net_total!.toFixed(2)}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="alert alert-warning mt-3" role="alert">
                Use coupon code <strong>MNTF25</strong> and get 25% discount!
            </div>

            <div className="input-group mt-3">
                <input
                    type="text"
                    className="form-control form-control-light"
                    placeholder="Coupon code"
                    aria-label="Recipient's username"
                />
                <Button className="input-group-text" variant="light">
                    Apply
                </Button>
            </div>
        </>
    );
};

// Cart
const Cart = () => {
    const [items, setItems] = useState<CartItemTypes[]>(cartItems);

    const [summary, setSummary] = useState<CartSummaryTypes>({
        gross_total: 264,
        discount: 26,
        shipping_charge: 24,
        tax: 18.22,
        net_total: 280.22,
    });

    /**
     * On quantity changed
     */
    const onQtyChange = (e: any, item: CartItemTypes) => {
        var localItems = [...items];
        var idx = localItems.findIndex((i) => i.id === item.id);
        var newQty = e.target.value;
        var newTotal = localItems[idx].price * newQty;
        localItems[idx] = { ...item, qty: newQty, total: newTotal };
        _adjustCart(localItems);
    };

    /**
     * Removes item from cart
     */
    const removeItem = (e: any, item: CartItemTypes) => {
        e.preventDefault();
        var localItems = items.filter((i) => i.id !== item.id);
        _adjustCart(localItems);
    };

    /**
     * Adjust the cart
     */
    const _adjustCart = (localItems: CartItemTypes[]) => {
        // calculate gross and other total
        var newGrossTotal = 0;
        for (const item of localItems) {
            newGrossTotal += item.total;
        }
        var newNetTotel = newGrossTotal - summary.discount! + summary.shipping_charge! + summary.tax!;
        setItems(localItems);
        setSummary({
            ...summary,
            gross_total: newGrossTotal,
            net_total: newNetTotel,
        });
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/shopping-cart' },
                    {
                        label: 'Shopping Cart',
                        path: '/apps/ecommerce/shopping-cart',
                        active: true,
                    },
                ]}
                title={'Shopping Cart'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={8}>
                                    <Table responsive borderless className="table-centered mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th style={{ width: '80px' }}>Product</th>
                                                <th>Product Desc</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th colSpan={2}>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(items || []).map((item, idx) => {
                                                return (
                                                    <tr key={idx}>
                                                        <td>
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                title="product-img"
                                                                className="avatar-lg"
                                                            />
                                                        </td>
                                                        <td>
                                                            <h5 className="mt-0 mb-1 text-truncate">
                                                                <Link
                                                                    to="/apps/ecommerce/product-detail"
                                                                    className="text-body"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </h5>
                                                            <p className="mb-0">
                                                                Size : <span className="fw-medium">{item.size}</span>
                                                            </p>
                                                        </td>
                                                        <td>${item.price}</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                min="1"
                                                                value={item.qty}
                                                                className="form-control"
                                                                placeholder="Qty"
                                                                style={{ width: '90px' }}
                                                                onChange={(e: any) => {
                                                                    onQtyChange(e, item);
                                                                }}
                                                            />
                                                        </td>
                                                        <td>${item.total}</td>
                                                        <td>
                                                            <Link
                                                                to="#"
                                                                className="action-icon text-danger"
                                                                onClick={(e: any) => {
                                                                    removeItem(e, item);
                                                                }}
                                                            >
                                                                {' '}
                                                                <i className="mdi mdi-trash-can"></i>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>

                                    <div className="mt-3">
                                        <label className="form-label" htmlFor="example-textarea">
                                            Add a Note:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="example-textarea"
                                            rows={3}
                                            placeholder="Write some note.."
                                        ></textarea>
                                    </div>

                                    <Row className="mt-4">
                                        <Col sm={6}>
                                            <Link
                                                to="/apps/ecommerce/products"
                                                className="btn text-muted d-none d-sm-inline-block btn-link fw-semibold"
                                            >
                                                <i className="mdi mdi-arrow-left"></i> Continue Shopping{' '}
                                            </Link>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="text-sm-end">
                                                <Link to="/apps/ecommerce/checkout" className="btn btn-danger">
                                                    <i className="mdi mdi-cart-plus me-1"></i> Checkout{' '}
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4}>
                                    <CartSummary summary={summary} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Cart;
