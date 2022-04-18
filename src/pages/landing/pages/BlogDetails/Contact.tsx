import React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// component
import { FormInput } from '../../../../components/form';

const Contact = () => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter your  name'),
            email: yup.string().required('Please enter your email').email('Please enter valid email'),
            subject: yup.string().required('Please enter subject'),
            message: yup.string().required('Please enter message'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <Card className="card">
            <Card.Body className="card-body p-4">
                <h5 className="font-18 mt-0">Leave a Comments</h5>

                <Row>
                    <Col lg={12}>
                        <Form onSubmit={handleSubmit(() => {})} className="form-main">
                            <Row className="mt-4">
                                <Col lg={6}>
                                    <FormInput
                                        label="Name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name..."
                                        containerClass="mb-3"
                                        register={register}
                                        key="name"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <FormInput
                                        label="Email address"
                                        type="email"
                                        name="email"
                                        containerClass="mb-3"
                                        register={register}
                                        key="email"
                                        errors={errors}
                                        control={control}
                                        placeholder="Enter your email..."
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12}>
                                    <FormInput
                                        label="Subject"
                                        type="text"
                                        name="subject"
                                        containerClass="mb-3"
                                        register={register}
                                        key="subject"
                                        errors={errors}
                                        control={control}
                                        placeholder="Enter Subject..."
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12}>
                                    <FormInput
                                        label="Message"
                                        type="textarea"
                                        name="message"
                                        containerClass="mb-3"
                                        register={register}
                                        key="message"
                                        rows={4}
                                        errors={errors}
                                        control={control}
                                        placeholder="Enter your message..."
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12}>
                                    <div className="text-end">
                                        <Button type="submit" variant="primary">
                                            Submit <i className="mdi mdi-send ms-2"></i>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Contact;
