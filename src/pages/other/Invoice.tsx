import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

// dummy data
import { invoiceData } from './data';

// invoice component
const Invoice = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extra Pages', path: '/pages/invoice' },
                    { label: 'Invoice', path: '/pages/invoice', active: true },
                ]}
                title={'Invoice'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="clearfix">
                                <div className="float-start">
                                    <div className="auth-logo">
                                        <div className="logo logo-dark">
                                            <span className="logo-lg">
                                                <img src={logoDark} alt="" height="22" />
                                            </span>
                                        </div>
                                        <div className="logo logo-light">
                                            <span className="logo-lg">
                                                <img src={logoLight} alt="" height="22" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="float-end">
                                    <h4 className="m-0 d-print-none">Invoice</h4>
                                </div>
                            </div>

                            <Row>
                                <Col md={6}>
                                    <div className="mt-3">
                                        <p>
                                            <b>Hello, {invoiceData.customer}</b>
                                        </p>
                                        <p className="text-muted">{invoiceData.notes}</p>
                                    </div>
                                </Col>

                                <Col md={{ span: 4, offset: 2 }}>
                                    <div className="mt-3 float-end">
                                        <p>
                                            <strong>Order Date : </strong>{' '}
                                            <span className="float-end">
                                                {' '}
                                                &nbsp;&nbsp;&nbsp; {invoiceData.order_date}{' '}
                                            </span>
                                        </p>
                                        <p>
                                            <strong>Order Status : </strong>{' '}
                                            <span className="float-end">
                                                {' '}
                                                <span className="badge bg-danger">{invoiceData.order_status}</span>
                                            </span>
                                        </p>
                                        <p>
                                            <strong>Order No. : </strong>
                                            <span className="float-end">
                                                {' '}
                                                <span className="float-end">{invoiceData.invoice_id}</span>
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col sm={6}>
                                    <h5>Billing Address</h5>
                                    <address>
                                        {invoiceData.address.owner}
                                        <br />
                                        {invoiceData.address.line_1}
                                        <br />
                                        {invoiceData.address.city}, {invoiceData.address.state}{' '}
                                        {invoiceData.address.zip}
                                        <br />
                                        <abbr title="Phone">P:</abbr> {invoiceData.address.phone}
                                    </address>
                                </Col>
                                <Col sm={6}>
                                    <h5>Shipping Address</h5>
                                    <address>
                                        {invoiceData.address.owner}
                                        <br />
                                        {invoiceData.address.line_1}
                                        <br />
                                        {invoiceData.address.city}, {invoiceData.address.state}{' '}
                                        {invoiceData.address.zip}
                                        <br />
                                        <abbr title="Phone">P:</abbr> {invoiceData.address.phone}
                                    </address>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="table-responsive">
                                        <table className="table mt-4 table-centered">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item</th>
                                                    <th style={{ width: '10%' }}>Hours</th>
                                                    <th style={{ width: '10%' }}>Hours Rate</th>
                                                    <th style={{ width: '10%' }} className="text-end">
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(invoiceData.items || []).map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>
                                                                <b>{item.name}</b> <br />
                                                                {item.description}
                                                            </td>
                                                            <td>{item.hours}</td>
                                                            <td>{item.hour_rate}</td>
                                                            <td className="text-end">{item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="clearfix pt-5">
                                        <h6 className="text-muted">Notes:</h6>
                                        <small className="text-muted">
                                            All accounts are to be paid within 7 days from receipt of invoice. To be
                                            paid by cheque or credit card or direct payment online. If account is not
                                            paid within 7 days the credits details supplied as confirmation of work
                                            undertaken will be charged the agreed quoted fee noted above.
                                        </small>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="float-end">
                                        <p>
                                            <b>Sub-total:</b>{' '}
                                            <span className="float-end">${invoiceData.sub_total}</span>
                                        </p>
                                        <p>
                                            <b>Discount (10%):</b>{' '}
                                            <span className="float-end">
                                                {' '}
                                                &nbsp;&nbsp;&nbsp; ${invoiceData.discount}
                                            </span>
                                        </p>
                                        <h3>${invoiceData.total} USD</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                </Col>
                            </Row>

                            <div className="mt-4 mb-1">
                                <div className="text-end d-print-none">
                                    <button
                                        className="btn btn-primary waves-effect waves-light me-1"
                                        onClick={(e: any) => {
                                            window.print();
                                        }}
                                    >
                                        <i className="mdi mdi-printer me-1"></i> Print
                                    </button>
                                    <button className="btn btn-success waves-effect waves-light">Submit</button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Invoice;
