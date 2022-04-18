import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col } from 'react-bootstrap';
import MaskedInput from 'react-text-mask';

// components
import { FormInput } from '../../../../components/form/';

// Payment
const Payment = () => {
    const methods = useForm();

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <h4 className="header-title">Payment Selection</h4>
            <p className="sub-header">Fill the form below in order to send you the order's invoice.</p>

            <div className="border p-3 mb-3 rounded">
                <div className="float-end">
                    <i className="fab fa-cc-paypal font-24 text-primary"></i>
                </div>
                <div className="form-check form-check-inline font-16 mb-0">
                    <input type="radio" id="BillingOptRadio2" name="billingOptions" className="form-check-input" />
                    <label className="form-check-label" htmlFor="BillingOptRadio2">
                        Pay with Paypal
                    </label>
                </div>
                <p className="mb-0 ps-3 pt-1">
                    You will be redirected to PayPal website to complete your purchase securely.
                </p>
            </div>

            <div className="border p-3 mb-3 rounded">
                <div className="float-end">
                    <i className="far fa-credit-card font-24 text-primary"></i>
                </div>
                <div className="form-check form-check-inline font-16 mb-0">
                    <input
                        type="radio"
                        id="BillingOptRadio1"
                        name="billingOptions"
                        className="form-check-input"
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="BillingOptRadio1">
                        Credit / Debit Card
                    </label>
                </div>
                <p className="mb-0 ps-3 pt-1">
                    Safe money transfer using your bank account. We support Mastercard, Visa, Discover and Stripe.
                </p>

                <form onSubmit={handleSubmit(() => {})} className="mt-4" noValidate>
                    <Row>
                        <Col md={12}>
                            <FormInput
                                name="card-number"
                                label="Card Number"
                                type="text"
                                placeholder="4242 4242 4242 4242"
                                containerClass={'mb-2'}
                                register={register}
                                key="notes"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormInput
                                name="name"
                                label="Name on card"
                                type="text"
                                placeholder="Master name"
                                containerClass={'mb-2'}
                                register={register}
                                key="notes"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={3}>
                            <div className="mb-2">
                                <label className="form-label">Expiry date</label>
                                <MaskedInput
                                    mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                                    placeholder="MM/YY"
                                    className="form-control"
                                />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="mb-2">
                                <label className="form-label">CVV code</label>
                                <MaskedInput mask={[/\d/, /\d/, /\d/]} placeholder="xxx" className="form-control" />
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>

            <div className="border p-3 mb-3 rounded">
                <div className="float-end">
                    <i className="fas fa-money-bill-alt font-24 text-primary"></i>
                </div>
                <div className="form-check form-check-inline font-16 mb-0">
                    <input type="radio" id="BillingOptRadio4" name="billingOptions" className="form-check-input" />
                    <label className="form-check-label" htmlFor="BillingOptRadio4">
                        Cash on Delivery
                    </label>
                </div>
                <p className="mb-0 ps-3 pt-1">Pay with cash when your order is delivered.</p>
            </div>
        </div>
    );
};

export default Payment;
