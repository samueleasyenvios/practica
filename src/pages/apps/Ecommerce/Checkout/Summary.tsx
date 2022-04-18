import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CartItems {
    id: number;
    image: string;
    name: string;
    size: string;
    color: string;
    price: number;
    qty: number;
    total: number;
}

interface SummaryProps {
    cart: {
        items: Array<CartItems>;
        sub_total: number;
        shipping: number;
        total: number;
    };
}

// Summary
const Summary = (props: SummaryProps) => {
    const cart = props.cart || {};

    return (
        <Card className="mt-4 mt-xl-0">
            <Card.Body>
                <h4 className="header-title mb-3">Order Summary</h4>

                <Table responsive className="table-centered table-nowrap mb-0">
                    <tbody>
                        {(cart.items || []).map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td style={{ width: '88px' }}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            title="contact-img"
                                            className="rounded"
                                            height="48"
                                        />
                                    </td>
                                    <td>
                                        <Link to="/apps/ecommerce/product-detail" className="text-body fw-semibold">
                                            {item.name}
                                        </Link>
                                        <br />
                                        <small className="d-block">
                                            {item.qty} x $ {item.price}
                                        </small>
                                    </td>
                                    <td className="text-end">$ {item.total}</td>
                                </tr>
                            );
                        })}

                        <tr className="text-end">
                            <td colSpan={2}>
                                <h6 className="m-0">Sub Total:</h6>
                            </td>
                            <td className="text-end">$ {cart.sub_total}</td>
                        </tr>
                        <tr className="text-end">
                            <td colSpan={2}>
                                <h6 className="m-0">Shipping:</h6>
                            </td>
                            <td className="text-end">{cart.shipping ? '$' + cart.shipping : 'FREE'}</td>
                        </tr>
                        <tr className="text-end">
                            <td colSpan={2}>
                                <h5 className="m-0">Total:</h5>
                            </td>
                            <td className="text-end fw-semibold">$ {cart.total}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Summary;
