import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import PageTitle from '../../components/PageTitle';
import { FormInput, VerticalForm } from '../../components/form';

interface UserData {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    checkbox: boolean;
}

interface UserData2 {
    webSite: string;
    email2: string;
    password2: string;
    confirmpassword2: string;
    horizontalCheck: boolean;
}

interface FormData1 {
    requiredInput: string;
    email: string;
    equalTo1: string;
    equalTo2: string;
    url: string;
    digits: string;
    numberInput: string;
    alphaNumeric: string;
    textAreaInput: string;
}

interface FormData2 {
    minLenInput: string;
    maxLenInput: string;
    rangeLenInput: string;
    minValueInput: string;
    maxValueInput: string;
    rangeValueInput: string;
    regEx: string;
}

const NormalFormValidation = () => {
    const [validated, setValidated] = useState<boolean>(false);

    /*
     * handle form submission
     */
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Bootstrap Validation - Normal</h4>
                    <p className="sub-header">
                        Provide valuable, actionable feedback to your users with HTML5 form validation–available in all
                        our supported browsers.
                    </p>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                id="validation-check"
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

const FormValidationWithTooltip = () => {
    const [validated, setValidated] = useState<boolean>(false);

    /*
     * handle form submission
     */
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Bootstrap Validation (Tooltips)</h4>
                    <p className="sub-header">
                        If your form layout allows it, you can swap the <code>.valid | invalid-feedback</code> classes
                        for <code>.valid | invalid-tooltip</code> classes to display validation feedback in a styled
                        tooltip.
                    </p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationCustonTooltipme">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

const BasicForm = () => {
    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required('Please enter Username'),
            email: yup.string().required('Please enter Email address'),
            password: yup.string().required('Please enter Password'),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            checkbox: yup.bool().oneOf([true], 'Must accept Terms and Conditions'),
        })
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Basic Form</h4>
                <p className="sub-header">React validation with react-hook-form library.</p>
                <VerticalForm<UserData>
                    onSubmit={() => {}}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test' }}
                >
                    <FormInput
                        label={'Username'}
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Email address'}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Password'}
                        type="password"
                        name="password"
                        placeholder="Password"
                        endIcon={false}
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Confirm Password'}
                        type="password"
                        name="confirmpassword"
                        placeholder="Password"
                        endIcon={false}
                        containerClass={'mb-2'}
                    />
                    <FormInput label={'Remember me'} type="checkbox" name="checkbox" containerClass={'mb-2'} />

                    <div className="text-md-end mb-0">
                        <Button variant="primary" className="me-1" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" type="reset">
                            Cancel
                        </Button>
                    </div>
                </VerticalForm>
            </Card.Body>
        </Card>
    );
};

const HorizontalForm = () => {
    /*
    form validation schema
    */
    const schemaResolver2 = yupResolver(
        yup.object().shape({
            email2: yup.string().required('Please enter Email address'),
            password2: yup.string().required('Please enter Password'),
            confirmPassword2: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            webSite: yup.string().required('Please enter URL'),
            horizontalCheck: yup.bool().oneOf([true], 'Must accept Terms and Conditions'),
        })
    );

    const methods = useForm<UserData2>({
        defaultValues: { email2: 'minton@coderthemes.com' },
        resolver: schemaResolver2,
    });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Horizontal Form</h4>
                <p className="sub-header">React validation with react-hook-form library.</p>
                <form name="chat-form" id="chat-form" onSubmit={handleSubmit(() => {})}>
                    <Form.Group as={Row} className="mb-2">
                        <Form.Label column md={4}>
                            Email<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="email"
                                name="email2"
                                placeholder="Email"
                                register={register}
                                key="email2"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <Form.Label column md={4}>
                            Password<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="password"
                                name="password2"
                                placeholder="Password"
                                register={register}
                                key="password2"
                                endIcon={false}
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <Form.Label column md={4}>
                            Confirm Password<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="password"
                                name="confirmPassword2"
                                placeholder="Password"
                                register={register}
                                key="confirmPassword2"
                                endIcon={false}
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <Form.Label column md={4}>
                            Web Site<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="url"
                                name="webSite"
                                placeholder="URL"
                                register={register}
                                key="webSite"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="horizontalCheck">
                        <Col md={{ span: 8, offset: 4 }}>
                            <FormInput
                                label={'Remember me'}
                                type="checkbox"
                                name="horizontalCheck"
                                register={register}
                                key="horizontalCheck"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2">
                        <Col sm={{ span: 8, offset: 4 }}>
                            <Button variant="primary" className="me-1" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset">
                                Cancel
                            </Button>
                        </Col>
                    </Form.Group>
                </form>
            </Card.Body>
        </Card>
    );
};

const ValidationTypes = () => {
    /*
       form validation schema
       */
    const schemaResolver3 = yupResolver(
        yup.object().shape({
            requiredInput: yup.string().required('This value is required.'),
            email: yup.string().required('This value is required.').email('This value should be a valid email.'),
            equalTo1: yup.string().required('This value is required.'),
            equalTo2: yup
                .string()
                .oneOf([yup.ref('equalTo1'), null], 'This value should be the same.')
                .required('This value is required.'),
            url: yup.string().required('This value is required.').url('This value should be a valid url.'),
            digits: yup
                .number()
                .typeError('This value should be digits.')
                .required('This value is required.')
                .integer('This value should be digits')
                .positive(),
            numberInput: yup.number().typeError('This value should be digits.').required('This value is required.'),
            alphaNumeric: yup
                .string()
                .required('This value is required.')
                .matches(/^[a-zA-Z0-9]+$/, 'This value should be a valid alphanumeric.'),
            textAreaInput: yup.string().required('This value is required.'),
        })
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Validation type</h4>
                <p className="sub-header">React validation with react-hook-form library.</p>
                <VerticalForm<FormData1> onSubmit={() => {}} resolver={schemaResolver3}>
                    <FormInput
                        label={'Required'}
                        type="text"
                        name="requiredInput"
                        placeholder="Type Something"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Equal To'}
                        type="password"
                        name="equalTo1"
                        placeholder="Password"
                        endIcon={false}
                    />
                    <FormInput
                        type="password"
                        name="equalTo2"
                        placeholder="Re-Type Password"
                        endIcon={false}
                        containerClass={'mt-1 mb-2'}
                    />

                    <FormInput
                        label={'E-Mail'}
                        type="email"
                        name="email"
                        placeholder="Enter a valid e-mail"
                        containerClass={'mb-2'}
                    />
                    <FormInput label={'URL'} type="url" name="url" placeholder="URL" containerClass={'mb-2'} />
                    <FormInput
                        label={'Digits'}
                        type="text"
                        name="digits"
                        placeholder="Enter only digits"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Number'}
                        type="text"
                        name="numberInput"
                        placeholder="Enter only numbers"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Alphanumeric'}
                        type="text"
                        name="alphaNumeric"
                        containerClass={'mb-2'}
                        placeholder="Enter alphanumeric value"
                    />
                    <FormInput label={'Textarea'} type="textarea" name="textAreaInput" containerClass={'mb-2'} />
                    <div>
                        <div>
                            <Button variant="primary" className="waves-effect waves-light me-1" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset" className=" waves-effect">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </VerticalForm>
            </Card.Body>
        </Card>
    );
};

const RangeValidation = () => {
    /*
     form validation schema
     */
    const schemaResolver4 = yupResolver(
        yup.object().shape({
            minLenInput: yup
                .string()
                .required('This value is required.')
                .min(6, 'This value is too short. It should have 6 characters or more.'),
            maxLenInput: yup
                .string()
                .required('This value is required.')
                .max(6, 'This value is too long. It should have 6 characters or fewer.'),
            rangeLenInput: yup
                .string()
                .min(5, 'This value length is invalid. It should be between 5 and 10 characters long.')
                .max(10, 'This value length is invalid. It should be between 5 and 10 characters long.')
                .required('This value is required.'),
            minValueInput: yup
                .number()
                .min(6, 'This value should be greater than or equal to 6.')
                .required('This value is required.'),
            maxValueInput: yup
                .number()
                .max(6, 'This value should be less than or equal to 6.')
                .required('This value is required.'),
            rangeValueInput: yup
                .number()
                .min(6, 'This value should be between 6 and 100.')
                .max(100, 'This value should be between 6 and 100.')
                .required('This value is required.'),
            regEx: yup
                .string()
                .required('This value is required.')
                .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'This value seems to be invalid.'),
        })
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Range validation</h4>
                <p className="sub-header">React validation with react-hook-form library.</p>
                <VerticalForm<FormData2> onSubmit={() => {}} resolver={schemaResolver4}>
                    <FormInput
                        label={'Min Length'}
                        type="text"
                        name="minLenInput"
                        placeholder="Min 6 chars."
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Max Length'}
                        type="text"
                        name="maxLenInput"
                        placeholder="Max 6 chars"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Range Length'}
                        type="text"
                        name="rangeLenInput"
                        placeholder="Text between 5 - 10 chars length"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Min Value'}
                        type="text"
                        name="minValueInput"
                        placeholder="Min value is 6"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Max Value'}
                        type="text"
                        name="maxValueInput"
                        placeholder="Max value is 6"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Range Value'}
                        type="text"
                        name="rangeValueInput"
                        placeholder="Number between 6 - 100"
                        containerClass={'mb-2'}
                    />
                    <FormInput
                        label={'Regular Exp'}
                        type="text"
                        name="regEx"
                        placeholder="Hex. Color"
                        containerClass={'mb-2'}
                    />

                    <div>
                        <div>
                            <Button variant="primary" className="me-1 waves-effect waves-light" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset" className="waves-effect">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </VerticalForm>
            </Card.Body>
        </Card>
    );
};

const FormValidation = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/validation' },
                    { label: 'Form Validation', path: '/forms/validation', active: true },
                ]}
                title={'Form Validation'}
            />

            <Row>
                <Col lg={6}>
                    <NormalFormValidation />
                </Col>

                <Col lg={6}>
                    <FormValidationWithTooltip />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <BasicForm />
                </Col>
                <Col lg={6}>
                    <HorizontalForm />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <ValidationTypes />
                </Col>
                <Col lg={6}>
                    <RangeValidation />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormValidation;
