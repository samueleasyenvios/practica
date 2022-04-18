import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, ProgressBar, Tabs, Tab } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// components
import PageTitle from '../../components/PageTitle';
import { FormInput } from '../../components/form/';

const BasicWizard = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> Basic Wizard</h4>

                <Wizard>
                    <Steps>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key ? key : 'account'}
                            onSelect={(k) => setKey(k)}
                            variant="pills"
                            className="nav-justified form-wizard-header mb-4"
                        >
                            <Tab
                                eventKey="account"
                                title={
                                    <>
                                        <span className="number">1</span>
                                        <span className="d-none d-sm-inline">Account</span>
                                    </>
                                }
                            >
                                <Step
                                    id="account"
                                    render={({ next }) => (
                                        <Form>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="exampleEmail" column md={3}>
                                                    Email
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="email"
                                                        name="exampleEmail"
                                                        id="exampleEmail1"
                                                        placeholder="Enter email"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="examplePassword" column md={3}>
                                                    Password
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="password"
                                                        name="examplePassword"
                                                        id="examplePassword1"
                                                        placeholder="password placeholder"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="examplerePassword" column md={3}>
                                                    Re-Password
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="password"
                                                        name="exampleRepassword"
                                                        id="examplerePassword1"
                                                        placeholder="password"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                <li className="next list-inline-item">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('profile');
                                                            next();
                                                        }}
                                                        variant="success"
                                                    >
                                                        Add More Info <i className="mdi mdi-arrow-right ms-1"></i>
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                            </Tab>
                            <Tab
                                eventKey="profile"
                                title={
                                    <>
                                        <span className="number">2</span>
                                        <span className="d-none d-sm-inline">Profile</span>
                                    </>
                                }
                            >
                                <Step
                                    id="profile"
                                    render={({ next, previous }) => (
                                        <Form>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="fname" column md={3}>
                                                    First Name
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="fname"
                                                        id="fname1"
                                                        placeholder="Enter first name"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="lname" column md={3}>
                                                    Last Name
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="lname"
                                                        id="lname1"
                                                        placeholder="enter last name"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="phone" column md={3}>
                                                    Phone Number
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="phone"
                                                        id="phone1"
                                                        placeholder="enter phone number"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <ul className="pager wizard mb-0 list-inline mt-2">
                                                <li className="previous list-inline-item">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('account');
                                                            previous();
                                                        }}
                                                        variant="light"
                                                    >
                                                        <i className="mdi mdi-arrow-left me-1"></i> Back to Account
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-end">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('contact');
                                                            next();
                                                        }}
                                                        variant="success"
                                                    >
                                                        Add More Info <i className="mdi mdi-arrow-right ms-1"></i>
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                            </Tab>
                            <Tab
                                eventKey="contact"
                                title={
                                    <>
                                        <span className="number">3</span>
                                        <span className="d-none d-sm-inline">Contact</span>
                                    </>
                                }
                            >
                                <Step
                                    id="contact"
                                    render={({ previous }) => (
                                        <Form>
                                            <Row>
                                                <Col sm={12}>
                                                    <div className="text-center">
                                                        <h2 className="mt-0">
                                                            <i className="mdi mdi-check-all"></i>
                                                        </h2>
                                                        <h3 className="mt-0">Thank you !</h3>

                                                        <p className="w-75 mb-2 mx-auto">
                                                            Quisque nec turpis at urna dictum luctus. Suspendisse
                                                            convallis dignissim eros at volutpat. In egestas mattis dui.
                                                            Aliquam mattis dictum aliquet.
                                                        </p>

                                                        <div className="mb-3">
                                                            <Form.Check type="checkbox" id="check-box-1">
                                                                <Form.Check.Input type="checkbox" />{' '}
                                                                <Form.Check.Label>
                                                                    I agree with the Terms and Conditions
                                                                </Form.Check.Label>
                                                            </Form.Check>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <ul className="pager wizard mb-0 list-inline mt-2">
                                                <li className="previous list-inline-item">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('profile');
                                                            previous();
                                                        }}
                                                        variant="light"
                                                    >
                                                        <i className="mdi mdi-arrow-left me-1"></i> Back to Profile
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-end">
                                                    <Button variant="primary">Submit</Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                            </Tab>
                        </Tabs>
                    </Steps>
                </Wizard>
            </Card.Body>
        </Card>
    );
};

const ButtonWizard = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> Button Wizard</h4>

                <Wizard>
                    <Steps>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key ? key : 'account'}
                            onSelect={(k) => setKey(k)}
                            variant="pills"
                            className="nav-justified form-wizard-header mb-4"
                        >
                            <Tab
                                eventKey="account"
                                title={
                                    <>
                                        <span className="number">1</span>
                                        <span className="d-none d-sm-inline">Account</span>
                                    </>
                                }
                            >
                                <Step
                                    id="account"
                                    render={({ next }) => (
                                        <Form>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="exampleEmail" column md={3}>
                                                    Email
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="email"
                                                        name="exampleEmail"
                                                        id="exampleEmail2"
                                                        placeholder="Enter email"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="examplePassword" column md={3}>
                                                    Password
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="password"
                                                        name="examplePassword"
                                                        id="examplePassword2"
                                                        placeholder="password placeholder"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="examplerePassword" column md={3}>
                                                    Re-Password
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="password"
                                                        name="exampleRepassword"
                                                        id="examplerePassword2"
                                                        placeholder="password"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <div className="float-end">
                                                <Button
                                                    onClick={() => {
                                                        setKey('profile');
                                                        next();
                                                    }}
                                                    variant="success"
                                                    className="button-next me-1"
                                                >
                                                    Next
                                                </Button>

                                                <Button
                                                    onClick={() => {
                                                        setKey('contact');
                                                    }}
                                                    variant="secondary"
                                                    className="button-last"
                                                >
                                                    Last
                                                </Button>
                                            </div>
                                            <div className="float-start">
                                                <Button
                                                    onClick={() => {
                                                        setKey('account');
                                                    }}
                                                    variant="secondary"
                                                    className="button-first me-1"
                                                >
                                                    First
                                                </Button>

                                                <Button disabled={true} variant="danger" className="button-previous">
                                                    Previous
                                                </Button>
                                            </div>

                                            <div className="clearfix"></div>
                                        </Form>
                                    )}
                                />
                            </Tab>
                            <Tab
                                eventKey="profile"
                                title={
                                    <>
                                        <span className="number">2</span>
                                        <span className="d-none d-sm-inline">Profile</span>
                                    </>
                                }
                            >
                                <Step
                                    id="profile"
                                    render={({ next, previous }) => (
                                        <Form>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="fname" column md={3}>
                                                    First Name
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="fname"
                                                        id="fname2"
                                                        placeholder="Enter first name"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="lname" column md={3}>
                                                    Last Name
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="lname"
                                                        id="lname2"
                                                        placeholder="enter last name"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label htmlFor="phone" column md={3}>
                                                    Phone Number
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        type="text"
                                                        name="phone"
                                                        id="phone2"
                                                        placeholder="enter phone number"
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <div className="float-end">
                                                <Button
                                                    onClick={() => {
                                                        setKey('contact');
                                                        next();
                                                    }}
                                                    variant="success"
                                                    className="button-next me-1"
                                                >
                                                    Next
                                                </Button>

                                                <Button
                                                    onClick={() => {
                                                        setKey('contact');
                                                    }}
                                                    variant="secondary"
                                                    className="button-last"
                                                >
                                                    Last
                                                </Button>
                                            </div>
                                            <div className="float-start">
                                                <Button
                                                    onClick={() => {
                                                        setKey('account');
                                                    }}
                                                    variant="secondary"
                                                    className="button-first me-1"
                                                >
                                                    First
                                                </Button>

                                                <Button
                                                    onClick={() => {
                                                        setKey('account');
                                                        previous();
                                                    }}
                                                    variant="danger"
                                                    className="button-previous"
                                                >
                                                    Previous
                                                </Button>
                                            </div>

                                            <div className="clearfix"></div>
                                        </Form>
                                    )}
                                />
                            </Tab>
                            <Tab
                                eventKey="contact"
                                title={
                                    <>
                                        <span className="number">3</span>
                                        <span className="d-none d-sm-inline">Contact</span>
                                    </>
                                }
                            >
                                <Step
                                    id="contact"
                                    render={({ previous }) => (
                                        <Form>
                                            <Row>
                                                <Col sm={12}>
                                                    <div className="text-center">
                                                        <h2 className="mt-0">
                                                            <i className="mdi mdi-check-all"></i>
                                                        </h2>
                                                        <h3 className="mt-0">Thank you !</h3>

                                                        <p className="w-75 mb-2 mx-auto">
                                                            Quisque nec turpis at urna dictum luctus. Suspendisse
                                                            convallis dignissim eros at volutpat. In egestas mattis dui.
                                                            Aliquam mattis dictum aliquet.
                                                        </p>

                                                        <div className="mb-3">
                                                            <Form.Check type="checkbox" id="check-box-2">
                                                                <Form.Check.Input type="checkbox" />{' '}
                                                                <Form.Check.Label>
                                                                    I agree with the Terms and Conditions
                                                                </Form.Check.Label>
                                                            </Form.Check>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="float-end">
                                                <Button disabled={true} variant="success" className="button-next me-1">
                                                    Next
                                                </Button>

                                                <Button
                                                    onClick={() => {
                                                        setKey('contact');
                                                    }}
                                                    variant="secondary"
                                                    className="button-last"
                                                >
                                                    Last
                                                </Button>
                                            </div>
                                            <div className="float-start">
                                                <Button
                                                    onClick={() => {
                                                        setKey('account');
                                                    }}
                                                    variant="secondary"
                                                    className="button-first me-1"
                                                >
                                                    First
                                                </Button>

                                                <Button
                                                    onClick={() => {
                                                        setKey('profile');
                                                        previous();
                                                    }}
                                                    variant="danger"
                                                    className="button-previous"
                                                >
                                                    Previous
                                                </Button>
                                            </div>

                                            <div className="clearfix"></div>
                                        </Form>
                                    )}
                                />
                            </Tab>
                        </Tabs>
                    </Steps>
                </Wizard>
            </Card.Body>
        </Card>
    );
};

const WizardWithProgressbar = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');
    const tabs: string[] = ['account', 'profile', 'contact'];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Wizard with Progress bar</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
                            <ProgressBar
                                animated
                                striped
                                variant="success"
                                now={((tabs.indexOf(key!) + 1) / tabs.length) * 100}
                                className="mb-3 progress-sm"
                            />

                            <Steps>
                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key ? key : 'account'}
                                    onSelect={(k) => setKey(k)}
                                    variant="pills"
                                    className="nav-justified form-wizard-header mb-4"
                                >
                                    <Tab
                                        eventKey="account"
                                        title={
                                            <>
                                                <span className="number">1</span>
                                                <span className="d-none d-sm-inline">Account</span>
                                            </>
                                        }
                                    >
                                        <Step
                                            id="account"
                                            render={({ next }) => (
                                                <Form>
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="exampleEmail" column md={3}>
                                                            Email
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="email"
                                                                name="exampleEmail"
                                                                id="exampleEmail3"
                                                                placeholder="Enter email"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="examplePassword" column md={3}>
                                                            Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="password"
                                                                name="examplePassword"
                                                                id="examplePassword3"
                                                                placeholder="password placeholder"
                                                                defaultValue="12345"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="examplerePassword" column md={3}>
                                                            Re-Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="password"
                                                                name="exampleRepassword"
                                                                id="examplerePassword3"
                                                                placeholder="password"
                                                                defaultValue="12345"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                        <li className="next list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('profile');
                                                                    next();
                                                                }}
                                                                variant="success"
                                                            >
                                                                Add More Info{' '}
                                                                <i className="mdi mdi-arrow-right ms-1"></i>
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </Form>
                                            )}
                                        />
                                    </Tab>
                                    <Tab
                                        eventKey="profile"
                                        title={
                                            <>
                                                <span className="number">2</span>
                                                <span className="d-none d-sm-inline">Profile</span>
                                            </>
                                        }
                                    >
                                        <Step
                                            id="profile"
                                            render={({ next, previous }) => (
                                                <Form>
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="fname" column md={3}>
                                                            First Name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="text"
                                                                name="fname"
                                                                id="fname3"
                                                                placeholder="Enter first name"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="lname" column md={3}>
                                                            Last Name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="text"
                                                                name="lname"
                                                                id="lname3"
                                                                placeholder="enter last name"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="phone" column md={3}>
                                                            Phone Number
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="text"
                                                                name="phone"
                                                                id="phone3"
                                                                placeholder="enter phone number"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="pager wizard mb-0 list-inline mt-2">
                                                        <li className="previous list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('account');
                                                                    previous();
                                                                }}
                                                                variant="light"
                                                            >
                                                                <i className="mdi mdi-arrow-left me-1"></i> Back to
                                                                Account
                                                            </Button>
                                                        </li>
                                                        <li className="next list-inline-item float-end">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('contact');
                                                                    next();
                                                                }}
                                                                variant="success"
                                                            >
                                                                Add More Info{' '}
                                                                <i className="mdi mdi-arrow-right ms-1"></i>
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </Form>
                                            )}
                                        />
                                    </Tab>
                                    <Tab
                                        eventKey="contact"
                                        title={
                                            <>
                                                <span className="number">3</span>
                                                <span className="d-none d-sm-inline">Contact</span>
                                            </>
                                        }
                                    >
                                        <Step
                                            id="contact"
                                            render={({ previous }) => (
                                                <Form>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="text-center">
                                                                <h2 className="mt-0">
                                                                    <i className="mdi mdi-check-all"></i>
                                                                </h2>
                                                                <h3 className="mt-0">Thank you !</h3>

                                                                <p className="w-75 mb-2 mx-auto">
                                                                    Quisque nec turpis at urna dictum luctus.
                                                                    Suspendisse convallis dignissim eros at volutpat. In
                                                                    egestas mattis dui. Aliquam mattis dictum aliquet.
                                                                </p>

                                                                <div className="mb-3">
                                                                    <Form.Check type="checkbox" id="check-box-3">
                                                                        <Form.Check.Input type="checkbox" />{' '}
                                                                        <Form.Check.Label>
                                                                            I agree with the Terms and Conditions
                                                                        </Form.Check.Label>
                                                                    </Form.Check>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <ul className="pager wizard mb-0 list-inline mt-2">
                                                        <li className="previous list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('profile');
                                                                    previous();
                                                                }}
                                                                variant="light"
                                                            >
                                                                <i className="mdi mdi-arrow-left me-1"></i> Back to
                                                                Profile
                                                            </Button>
                                                        </li>
                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="primary">Submit</Button>
                                                        </li>
                                                    </ul>
                                                </Form>
                                            )}
                                        />
                                    </Tab>
                                </Tabs>
                            </Steps>
                        </React.Fragment>
                    )}
                />
            </Card.Body>
        </Card>
    );
};

const WizardWithFormValidation = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');
    const tabs: string[] = ['account', 'profile', 'contact'];

    /*
     * form validation schema
     */
    const validationSchema = yupResolver(
        yup.object().shape({
            email: yup.string().required(''),
            password: yup.string().required(''),
            rePassword: yup.string().required(''),
        })
    );
    const validationSchema2 = yupResolver(
        yup.object().shape({
            firstname: yup.string().required(''),
            lastname: yup.string().required(''),
            checkbox: yup.bool().oneOf([true], ''),
        })
    );

    const method1 = useForm<{ email: string; password: string; rePassword: string }>({
        resolver: validationSchema,
    });

    const method2 = useForm<{ firstname: string; lastname: string; checkbox: boolean }>({
        resolver: validationSchema2,
    });

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Wizard with Validation</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
                            <ProgressBar
                                animated
                                striped
                                variant="success"
                                now={((tabs.indexOf(key!) + 1) / tabs.length) * 100}
                                className="mb-3 progress-sm"
                            />

                            <Steps>
                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key ? key : 'account'}
                                    variant="pills"
                                    className="nav-justified form-wizard-header mb-4"
                                >
                                    <Tab
                                        eventKey="account"
                                        title={
                                            <>
                                                <span className="number">1</span>
                                                <span className="d-none d-sm-inline">Account</span>
                                            </>
                                        }
                                    >
                                        <Step
                                            id="account"
                                            render={({ next }) => (
                                                <form
                                                    name="login-form"
                                                    id="login-form"
                                                    onSubmit={method1.handleSubmit(() => {
                                                        setKey('profile');
                                                        next();
                                                    })}
                                                >
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Username/Email
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="email"
                                                                name="email"
                                                                register={method1.register}
                                                                key="email"
                                                                errors={method1.formState.errors}
                                                                control={method1.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="password"
                                                                name="password"
                                                                endIcon={false}
                                                                register={method1.register}
                                                                key="password"
                                                                errors={method1.formState.errors}
                                                                control={method1.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Re Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="password"
                                                                name="rePassword"
                                                                endIcon={false}
                                                                register={method1.register}
                                                                key="repassword"
                                                                errors={method1.formState.errors}
                                                                control={method1.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="list-inline wizard mb-0">
                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="success" type="submit">
                                                                Next
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </form>
                                            )}
                                        />
                                    </Tab>
                                    <Tab
                                        eventKey="profile"
                                        title={
                                            <>
                                                <span className="number">2</span>
                                                <span className="d-none d-sm-inline">Profile</span>
                                            </>
                                        }
                                    >
                                        <Step
                                            id="profile"
                                            render={({ next, previous }) => (
                                                <form
                                                    name="profile-form"
                                                    id="profile-form"
                                                    onSubmit={method2.handleSubmit(() => {
                                                        setKey('contact');
                                                        next();
                                                    })}
                                                >
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            First Name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="text"
                                                                name="firstname"
                                                                register={method2.register}
                                                                key="firstname"
                                                                errors={method2.formState.errors}
                                                                control={method2.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Last Name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="text"
                                                                name="lastname"
                                                                register={method2.register}
                                                                key="lastname"
                                                                errors={method2.formState.errors}
                                                                control={method2.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Agree to terms and conditions
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="checkbox"
                                                                name="checkbox"
                                                                register={method2.register}
                                                                key="checkbox"
                                                                errors={method2.formState.errors}
                                                                control={method2.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <ul className="list-inline wizard mb-0">
                                                        <li className="previous list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('account');
                                                                    previous();
                                                                }}
                                                                variant="info"
                                                            >
                                                                Previous
                                                            </Button>
                                                        </li>
                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="success" type="submit">
                                                                Next
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </form>
                                            )}
                                        />
                                    </Tab>
                                    <Tab
                                        eventKey="contact"
                                        title={
                                            <>
                                                <span className="number">3</span>
                                                <span className="d-none d-sm-inline">Contact</span>
                                            </>
                                        }
                                    >
                                        <Step
                                            id="contact"
                                            render={({ previous }) => (
                                                <Row>
                                                    <Col sm={12}>
                                                        <div className="text-center">
                                                            <h2 className="mt-0">
                                                                <i className="mdi mdi-check-all"></i>
                                                            </h2>
                                                            <h3 className="mt-0">Thank you !</h3>

                                                            <p className="w-75 mb-2 mx-auto">
                                                                Quisque nec turpis at urna dictum luctus.Suspendisse
                                                                convallis dignissim eros at volutpat.In egestas mattis
                                                                dui.Aliquam mattis dictum aliquet.
                                                            </p>

                                                            <div className="mb-3">
                                                                <Form.Check type="checkbox" id="check-box-4">
                                                                    <Form.Check.Input type="checkbox" />{' '}
                                                                    <Form.Check.Label>
                                                                        I agree with the Terms and Conditions
                                                                    </Form.Check.Label>
                                                                </Form.Check>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col sm={12}>
                                                        <ul className="list-inline wizard mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button
                                                                    onClick={() => {
                                                                        setKey('profile');
                                                                        previous();
                                                                    }}
                                                                    variant="info"
                                                                >
                                                                    Previous
                                                                </Button>
                                                            </li>

                                                            <li className="next list-inline-item float-end">
                                                                <Button variant="success">Submit</Button>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            )}
                                        />
                                    </Tab>
                                </Tabs>
                            </Steps>
                        </React.Fragment>
                    )}
                />
            </Card.Body>
        </Card>
    );
};

const FormWizard = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/ui/forms/wizard' },
                    { label: 'Form Wizard', path: '/ui/forms/wizard', active: true },
                ]}
                title={'Form Wizard'}
            />

            <Row>
                <Col xl={6}>
                    <BasicWizard />
                </Col>

                <Col xl={6}>
                    <ButtonWizard />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <WizardWithProgressbar />
                </Col>
                <Col lg={6}>
                    <WizardWithFormValidation />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormWizard;
