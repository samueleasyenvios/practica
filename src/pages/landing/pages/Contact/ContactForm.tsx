import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// component
import { FormInput } from '../../../../components/form';

const ContactForm = () => {
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
        <Row>
            <Col lg={5}>
                <div className="map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
                        allowFullScreen
                    ></iframe>
                </div>
            </Col>

            <Col lg={7}>
                <div>
                    <Form onSubmit={handleSubmit(() => {})} className="form-main">
                        <Row>
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
                                    <Button type="submit" id="submit" name="send" className="btn btn-purple">
                                        Send Message
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default ContactForm;
