import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ShippingProps {
    updateShipping: (shippingCost: number) => void;
}

// Shipping
const Shipping = (props: ShippingProps) => {
    const updateShippingCost = props.updateShipping || {};

    return (
        <div>
            <h4 className="header-title">Saved Address</h4>
            <p className="sub-header">Fill the form below in order to send you the order's invoice.</p>

            <Row>
                <Col md={6}>
                    <div className="border p-3 rounded mb-3 mb-md-0">
                        <div className="form-check form-check-inline font-16">
                            <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="form-check-input"
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="customRadio1">
                                Home
                            </label>
                        </div>
                        <div className="float-end">
                            <Link to="#">
                                <i className="mdi mdi-square-edit-outline text-muted font-20"></i>
                            </Link>
                        </div>
                        <h5 className="mt-3">Brent Rowe</h5>

                        <p className="mb-1">
                            <span className="fw-semibold me-2">Address:</span> 3559 Roosevelt Wilson Lane San
                            Bernardino, CA 92405
                        </p>
                        <p className="mb-1">
                            <span className="fw-semibold me-2">Phone:</span> (123) 456-7890
                        </p>
                        <p className="mb-0">
                            <span className="fw-semibold me-2">Mobile:</span> (+01) 12345 67890
                        </p>
                    </div>
                </Col>

                <Col md={6}>
                    <div className="border p-3 rounded mb-3 mb-md-0">
                        <div className="form-check form-check-inline font-16">
                            <input type="radio" id="customRadio2" name="customRadio" className="form-check-input" />
                            <label className="form-check-label" htmlFor="customRadio2">
                                Office
                            </label>
                        </div>
                        <div className="float-end">
                            <Link to="#">
                                <i className="mdi mdi-square-edit-outline text-muted font-20"></i>
                            </Link>
                        </div>

                        <h5 className="mt-3">Brent Rowe</h5>

                        <p className="mb-1">
                            <span className="fw-semibold me-2">Address:</span> 3559 Roosevelt Wilson Lane San
                            Bernardino, CA 92405
                        </p>
                        <p className="mb-1">
                            <span className="fw-semibold me-2">Phone:</span> (123) 456-7890
                        </p>
                        <p className="mb-0">
                            <span className="fw-semibold me-2">Mobile:</span> (+01) 12345 67890
                        </p>
                    </div>
                </Col>
            </Row>

            <h4 className="header-title mt-4">Shipping Method</h4>
            <p className="text-muted mb-3">Fill the form below in order to send you the order's invoice.</p>

            <Row>
                <Col md={12}>
                    <div className="border p-3 rounded mb-3">
                        <div className="form-check form-check-inline font-16 mb-0">
                            <input
                                type="radio"
                                id="shippingMethodRadio1"
                                name="shippingOptions"
                                className="form-check-input"
                                defaultChecked
                                onChange={() => {
                                    updateShippingCost(0);
                                }}
                            />
                            <label className="form-check-label" htmlFor="shippingMethodRadio1">
                                Standard Delivery - FREE
                            </label>
                        </div>
                        <p className="mb-0 ps-3 pt-1">
                            Estimated 5-7 days shipping (Duties and tax may be due upon delivery)
                        </p>
                    </div>

                    <div className="border p-3 rounded">
                        <div className="form-check form-check-inline font-16 mb-0">
                            <input
                                type="radio"
                                id="shippingMethodRadio2"
                                name="shippingOptions"
                                className="form-check-input"
                                onChange={(e: any) => {
                                    updateShippingCost(25);
                                }}
                            />
                            <label className="form-check-label" htmlFor="shippingMethodRadio2">
                                Fast Delivery - $25
                            </label>
                        </div>
                        <p className="mb-0 ps-3 pt-1">
                            Estimated 1-2 days shipping (Duties and tax may be due upon delivery)
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Shipping;
