import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

// images
import product1 from '../../../assets/images/products/product-1.png';
import product2 from '../../../assets/images/products/product-6.png';
import product3 from '../../../assets/images/products/product-8.png';

interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    size: string;
    image: string;
    price: string;
    total: string;
}

interface ShippingAddress {
    provider: string;
    address: string;
    phone: string;
    mobile: string;
}

interface Billing {
    type: string;
    provider: string;
    valid: string;
}

interface Delivery {
    provider: string;
    order_id: string;
    payment_mode: string;
}

interface OrderDetailsType {
    id: string;
    tracking_id: string;
    billing_name?: string;
    order_status?: string;
    order_date: string;
    order_time: string;
    items: OrderItem[];
    sub_total: string;
    shipping_charge: string;
    tax: string;
    net_total: string;
    shipping: ShippingAddress;
    billing: Billing;
    delivery: Delivery;
}

// track order
const OrderSummary = ({ order }: { order: OrderDetailsType }) => {
    return (
        <div>
            <Table responsive className="table table-centered border mb-0">
                <thead className="bg-light">
                    <tr>
                        <th colSpan={2}>Order summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Sub Total :</th>
                        <td>{order.sub_total}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shipping Charge :</th>
                        <td>{order.shipping_charge}</td>
                    </tr>
                    <tr>
                        <th scope="row">Estimated Tax :</th>
                        <td>{order.tax}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total :</th>
                        <td>{order.net_total}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

// Item Table
const Items = ({ order }: { order: OrderDetailsType }) => {
    return (
        <div>
            <Table responsive className="table-centered border table-nowrap mb-lg-0">
                <thead className="bg-light">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {(order.items || []).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <img src={item.image} alt="" height="40" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="m-0">{item.name}</h5>
                                            <p className="mb-0">Size : {item.size}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

// shipping info
const ShippingInfo = (props: { details: ShippingAddress }) => {
    const details = props.details || {};
    return (
        <Table borderless size="sm" className="mb-0">
            <tbody>
                <tr>
                    <th colSpan={2}>
                        <h5 className="font-15 m-0">{details.provider}</h5>
                    </th>
                </tr>
                <tr>
                    <th scope="row">Address:</th>
                    <td>{details.address}</td>
                </tr>
                <tr>
                    <th scope="row">Phone :</th>
                    <td>{details.phone}</td>
                </tr>
                <tr>
                    <th scope="row">Mobile :</th>
                    <td>{details.mobile}</td>
                </tr>
            </tbody>
        </Table>
    );
};

// billing info
const BillingInfo = (props: { details: Billing }) => {
    const details = props.details || {};
    return (
        <Table borderless size="sm" className="mb-0">
            <tbody>
                <tr>
                    <th scope="row">Payment Type:</th>
                    <td>{details.type}</td>
                </tr>
                <tr>
                    <th scope="row">Provider :</th>
                    <td>{details.provider}</td>
                </tr>
                <tr>
                    <th scope="row">Valid Date :</th>
                    <td>{details.valid}</td>
                </tr>
                <tr>
                    <th scope="row">CVV :</th>
                    <td>xxx</td>
                </tr>
            </tbody>
        </Table>
    );
};

// delivery info
const DeliveryInfo = (props: { details: Delivery }) => {
    const details = props.details || {};
    return (
        <React.Fragment>
            <div className="text-center">
                <div className="my-2">
                    <i className="mdi mdi-truck-fast h1 text-muted"></i>
                </div>
                <h5>
                    <b>{details.provider}</b>
                </h5>
                <div className="mt-2 pt-1">
                    <p className="mb-1">
                        <span className="fw-semibold">Order ID :</span> {details.order_id}
                    </p>
                    <p className="mb-0">
                        <span className="fw-semibold">Payment Mode :</span> {details.payment_mode}
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

// order details
const OrderDetail = () => {
    const order: OrderDetailsType = {
        id: '#MN2048',
        tracking_id: '123456789',
        billing_name: 'Charles Wilson',
        order_status: 'Packed',
        order_date: 'Apr 16 2020',
        order_time: '10:24 AM',
        items: [
            {
                id: 1,
                name: 'Blue color T-shirt',
                image: product1,
                size: 'Large',
                quantity: 1,
                price: '$41',
                total: '$41',
            },
            {
                id: 2,
                name: 'Blue Hoodie for men',
                image: product2,
                size: 'Medium',
                quantity: 2,
                price: '$45',
                total: '$90',
            },
            {
                id: 3,
                name: 'Full sleeve Pink T-shirt',
                image: product3,
                size: 'Large',
                quantity: 1,
                price: '$45',
                total: '$45',
            },
        ],
        sub_total: '$176',
        shipping_charge: '$24',
        tax: '$12',
        net_total: '$213',
        shipping: {
            provider: 'Arnold Jackson',
            address: '707 Locust View Drive San Francisco, CA 94115',
            phone: '(123) 456-7890 ',
            mobile: '(+01) 12345 67890',
        },
        billing: {
            type: 'Credit Card',
            provider: 'Visa ending in 2851',
            valid: '02/2021',
        },
        delivery: {
            provider: 'UPS Delivery',
            order_id: 'xxxx048',
            payment_mode: 'COD',
        },
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/order/detail' },
                    {
                        label: 'Order Detail',
                        path: '/apps/ecommerce/order/detail',
                        active: true,
                    },
                ]}
                title={'Order Detail'}
            />

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header className="border-bottom bg-transparent">
                            <h5 className="header-title mb-0">Order #MN2048</h5>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col lg={3} sm={6}>
                                        <div className="d-flex mb-2">
                                            <div className="me-2 align-self-center">
                                                <i className="ri-hashtag h2 m-0 text-muted"></i>
                                            </div>
                                            <div className="flex-1">
                                                <p className="mb-1">ID No.</p>
                                                <h5 className="mt-0">{order.id}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6}>
                                        <div className="d-flex mb-2">
                                            <div className="me-2 align-self-center">
                                                <i className="ri-user-2-line h2 m-0 text-muted"></i>
                                            </div>
                                            <div className="flex-1">
                                                <p className="mb-1">Billing Name</p>
                                                <h5 className="mt-0">{order.billing_name}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6}>
                                        <div className="d-flex mb-2">
                                            <div className="me-2 align-self-center">
                                                <i className="ri-calendar-event-line h2 m-0 text-muted"></i>
                                            </div>
                                            <div className="flex-1">
                                                <p className="mb-1">Date</p>
                                                <h5 className="mt-0">
                                                    Apr 16 2020 <small className="text-muted">10:29 PM</small>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6}>
                                        <div className="d-flex mb-2">
                                            <div className="me-2 align-self-center">
                                                <i className="ri-map-pin-time-line h2 m-0 text-muted"></i>
                                            </div>
                                            <div className="flex-1">
                                                <p className="mb-1">Tracking ID</p>
                                                <h5 className="mt-0">{order.tracking_id}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="mt-2">
                                <h4 className="header-title mb-3">Items from Order {order.id}</h4>
                                <Row>
                                    <Col lg={8}>
                                        <Items order={order} />
                                    </Col>
                                    <Col lg={4}>
                                        <OrderSummary order={order} />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col lg={4}>
                    <div>
                        <h4 className="font-15 mb-2">Shipping Information</h4>
                        <Card className="p-2 mb-lg-0">
                            <ShippingInfo details={order.shipping} />
                        </Card>
                    </div>
                </Col>

                <Col lg={4}>
                    <div>
                        <h4 className="font-15 mb-2">Billing Information</h4>
                        <Card className="p-2 mb-lg-0">
                            <BillingInfo details={order.billing} />
                        </Card>
                    </div>
                </Col>

                <Col lg={4}>
                    <div>
                        <h4 className="font-15 mb-2">Delivery Info</h4>
                        <Card className="p-2 mb-lg-0">
                            <DeliveryInfo details={order.delivery} />
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default OrderDetail;
