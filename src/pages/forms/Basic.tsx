import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Dropdown } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import { FormInput } from '../../components/form/';

const BasicInputElements = () => {
    /*
     * form methods
     */
    const methods = useForm({
        defaultValues: {
            textInput: 'Some Text Value...',
            password: '12345',
            statictext: 'email@example.com',
            color: '#3bafda',
        },
    });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Input Types</h4>
                    <p className="sub-header">
                        Most common form control, text-based input fields. Includes support for all HTML5 types:{' '}
                        <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>,{' '}
                        <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>
                        , <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and{' '}
                        <code>color</code>.
                    </p>

                    <Row>
                        <Col xs={12}>
                            <div className="p-2">
                                <Form onSubmit={handleSubmit(() => {})}>
                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Text
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="text"
                                                name="textInput"
                                                register={register}
                                                key="text"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Email
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                register={register}
                                                key="email"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Password
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="password"
                                                name="password"
                                                endIcon={false}
                                                register={register}
                                                key="password"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Show/Hide Password
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="password"
                                                name="password"
                                                placeholder="password placeholder"
                                                register={register}
                                                key="password"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Placeholder
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="text"
                                                name="placeholder"
                                                placeholder="placeholder"
                                                register={register}
                                                key="placeholder"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Text Area
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="textarea"
                                                name="textarea"
                                                rows={5}
                                                register={register}
                                                key="textarea"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Read only
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="text"
                                                name="text1"
                                                id="text1"
                                                placeholder="Readonly value"
                                                readOnly
                                                register={register}
                                                key="text1"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Disabled
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="text"
                                                name="text2"
                                                id="text2"
                                                placeholder="Disabled value"
                                                disabled
                                                containerClass={'mb-3'}
                                                register={register}
                                                key="text2"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Static control
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="text"
                                                name="statictext"
                                                className="form-control-plaintext"
                                                register={register}
                                                key="statictext"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Helping text
                                        </Form.Label>
                                        <Col md={10}>
                                            <Form.Control
                                                type="text"
                                                name="text3"
                                                id="text3"
                                                placeholder="Helping text"
                                            />
                                            <Form.Text>
                                                A block of help text that breaks onto a new line and may extend beyond
                                                one line.
                                            </Form.Text>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Input Select
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                name="select"
                                                type="select"
                                                className="form-select"
                                                register={register}
                                                key="select"
                                                errors={errors}
                                                control={control}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </FormInput>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Multiple Select
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                name="selectMulti"
                                                type="select"
                                                multiple
                                                className="form-select"
                                                register={register}
                                                key="selectMulti"
                                                errors={errors}
                                                control={control}
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </FormInput>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Default file input
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="file"
                                                name="file"
                                                register={register}
                                                key="file"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Date
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="date"
                                                name="date"
                                                register={register}
                                                key="date"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Month
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="month"
                                                name="month"
                                                register={register}
                                                key="month"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Time
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="time"
                                                name="time"
                                                register={register}
                                                key="time"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Week
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="week"
                                                name="week"
                                                register={register}
                                                key="week"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Number
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="number"
                                                name="number"
                                                placeholder="number placeholder"
                                                register={register}
                                                key="number"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            URL
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="url"
                                                name="url"
                                                register={register}
                                                key="url"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Search
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="search"
                                                name="search"
                                                register={register}
                                                key="search"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Tel
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="tel"
                                                name="tel"
                                                register={register}
                                                key="tel"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Color
                                        </Form.Label>
                                        <Col md={10}>
                                            <FormInput
                                                type="color"
                                                name="color"
                                                className="w-100"
                                                placeholder="color placeholder"
                                                register={register}
                                                key="color"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Form.Label column md={2}>
                                            Form range
                                        </Form.Label>
                                        <Col md={10} className="align-self-center">
                                            <Form.Range />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column md={2}>
                                            Datalists
                                        </Form.Label>
                                        <Col md={10}>
                                            <input
                                                className="form-control"
                                                list="datalistOptions"
                                                id="exampleDataList"
                                                placeholder="Type to search..."
                                            />
                                            <datalist id="datalistOptions">
                                                <option value="San Francisco"></option>
                                                <option value="New York"></option>
                                                <option value="Seattle"></option>
                                                <option value="Los Angeles"></option>
                                                <option value="Chicago"></option>
                                            </datalist>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

const FloatingLabels = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Floating labels</h4>
                    <p className="sub-header">
                        Create beautifully simple form labels that float over your input fields.
                    </p>

                    <Form>
                        <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
                            <Form.Control type="text" placeholder="name" />
                        </FloatingLabel>
                        <Row>
                            <Col md={6}>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Col>

                            <Col md={6}>
                                <FloatingLabel controlId="floatingSelect" label="Works with selects" className="mb-3">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-2">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                defaultValue="123, Main st"
                            />
                        </FloatingLabel>
                        <Form.Group className="mb-3" id="formGridCheckbox2">
                            <Form.Check type="checkbox" id="formGridCheckbox2" label="Check me out" />
                        </Form.Group>

                        <div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

const SelectInput = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Select menu</h4>
                    <p className="sub-header">
                        Custom <code>&lt;select&gt;</code> menus need only a custom class, <code>.custom-select</code>{' '}
                        to trigger the custom styles.
                    </p>

                    <Form.Group>
                        <Form.Select className="mt-3" aria-label="Default select example">
                            <option defaultValue="0">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <div className="mt-4">
                        <h5 className="font-14 mb-1">Select Menu Sizing</h5>
                        <p className="sub-header mb-0">
                            You may also choose from small and large custom selects to match our similarly sized text
                            inputs.
                        </p>
                        <Row>
                            <Col lg={6}>
                                <Form.Group>
                                    <Form.Select className="mt-3" aria-label="Default select example" size="lg">
                                        <option defaultValue="0">Large Form Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col lg={6}>
                                <Form.Group>
                                    <Form.Select className="mt-3" aria-label="Default select example" size="sm">
                                        <option defaultValue="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

const Switches = () => {
    return (
        <React.Fragment>
            <h4 className="header-title mt-4">Switches</h4>
            <p className="sub-header">
                A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a
                toggle switch. Switches also support the <code>disabled</code> attribute.
            </p>

            <Form>
                <Form.Check type="switch" id="custom-switch" label="Default switch checkbox input" />
                <Form.Check
                    type="switch"
                    label="Checked switch checkbox input"
                    id="custom-switch2"
                    defaultChecked={true}
                />

                <Form.Check disabled type="switch" label="Disabled switch checkbox input" id="custom-switch3" />

                <Form.Check
                    disabled
                    type="switch"
                    label="Disabled checked switch checkbox input"
                    id="custom-switch4"
                    defaultChecked={true}
                />
            </Form>
        </React.Fragment>
    );
};

const CustomCheckboxes = () => {
    return (
        <>
            <h5 className="font-14 mb-2">Checkbox</h5>
            <Form.Check type="checkbox" id="default-checkbox1" label="Default checkbox" />
            <Form.Check type="checkbox" id="default-checkbox2" label=" Checked checkbox" defaultChecked={true} />
        </>
    );
};

const CustomRadios = () => {
    return (
        <>
            <h5 className="font-14 mb-2">Radios</h5>
            <Form.Check type="radio" id="default-radio1" name="customRadio" label="Default radio" />
            <Form.Check
                type="radio"
                id="default-radio2"
                name="customRadio"
                label=" Default checked radio"
                defaultChecked={true}
            />
        </>
    );
};

const InputSizes = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Input Sizes &amp; Group</h4>
                <p className="sub-header">
                    Use size on <code>&lt;FormControl&gt;</code> and <code>&lt;FormLabel&gt;</code> to change the size
                    of inputs and labels respectively.
                </p>

                <div className="p-2">
                    <Form>
                        <Form.Group as={Row} className="mb-2">
                            <Form.Label htmlFor="small" column md={2}>
                                Small
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control type="text" name="small" id="small" placeholder="Small" size="sm" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Form.Label htmlFor="Normal" column md={2}>
                                Normal
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control type="text" name="Normal" id="Normal" placeholder="Normal" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Form.Label htmlFor="Large" column md={2}>
                                Large
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control type="text" name="Large" id="Large" placeholder="Large" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Form.Label htmlFor="grid" column md={2}>
                                Grid Sizes
                            </Form.Label>
                            <Col md={4}>
                                <Form.Control type="text" name="grid" id="grid" placeholder=".col-sm-4" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Form.Label htmlFor="Static" column md={2}>
                                Static
                            </Form.Label>
                            <Col md={10}>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2">
                            <Form.Label htmlFor="Dropdown" column md={2}>
                                Dropdown
                            </Form.Label>
                            <Col md={10}>
                                <InputGroup className="mb-3">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="primary"
                                            id="dropdown-basic"
                                            className="waves-effect waves-light"
                                        >
                                            Dropdown <i className="mdi mdi-chevron-down"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Form.Control aria-label="Text input with dropdown button" />
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label htmlFor="Button" column md={2}>
                                Button
                            </Form.Label>
                            <Col md={10}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="dark" id="button-addon2" className="waves-effect waves-light">
                                        Button
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </Card.Body>
        </Card>
    );
};

const DefaultForm = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mb-3 header-title">Basic Example</h4>

                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="exampleEmail2">Email</Form.Label>
                        <Form.Control type="email" name="email" id="exampleEmail2" placeholder="Enter your email" />
                        <Form.Text>We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="examplePassword2">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            id="examplePassword2"
                            placeholder="password placeholder"
                            defaultValue="12345"
                        />
                    </Form.Group>

                    <Form.Group className="mb-2" id="formGridCheckbox">
                        <Form.Check type="checkbox" id="formGridCheckbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

const HorizontalForm = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mb-3 header-title">Horizontal Form</h4>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="exampleEmail3" column sm={3}>
                            Email
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" name="email" id="exampleEmail3" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="examplePassword3" column sm={3}>
                            Password
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="password"
                                id="examplePassword3"
                                placeholder="Password"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2">
                        <Form.Label htmlFor="examplePassword4" column sm={3}>
                            Re-Password
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="password"
                                id="examplePassword4"
                                placeholder="Retype Password"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2 justify-content-end">
                        <Col sm={9}>
                            <Form.Check label="Check me out !" id="checkmeout" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-0 justify-content-end">
                        <Col sm={9}>
                            <Button variant="info" type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

const InlineForm = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Inline Form</h4>

                <p className="sub-header">
                    Use the <code>.col-auto</code> class to create horizontal layouts.
                </p>
                <Form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={(e) => e.preventDefault()}>
                    <div className="col-12">
                        <Form.Group>
                            <Form.Control
                                readOnly
                                type="email"
                                name="email"
                                id="exampleEmail4"
                                bsPrefix="form-control-plaintext"
                                placeholder="email@example.com"
                            />
                        </Form.Group>
                    </div>

                    <div className="col-12">
                        <Form.Group>
                            <Form.Control
                                type="password"
                                name="password"
                                id="examplePassword5"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </div>

                    <div className="col-12">
                        <Button color="primary" type="submit">
                            Confirm identity
                        </Button>
                    </div>
                </Form>

                <h6 className="font-13 mt-3">Auto-sizing</h6>

                <Form onSubmit={(e) => e.preventDefault()}>
                    <Row className="align-items-center gy-2 gx-3">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Name
                            </Form.Label>
                            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Remember me" />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

const FormGrid = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Form grid</h4>
                    <p className="sub-header">
                        You may also swap <code>.row</code> for <code>.row</code>, a variation of our standard grid row
                        that overrides the default column gutters for tighter and more compact layouts.
                    </p>

                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row>
                            <Form.Group as={Col} md={6} className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} md={6} className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} className="mb-2" md={4}>
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-2" md={4}>
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-2" md={4}>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox3">
                            <Form.Check type="checkbox" label="Check me out" id="formGridCheckbox3" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/basic' },
                    { label: 'Form Elements', path: '/forms/basic', active: true },
                ]}
                title={'Form Elements'}
            />

            <Row>
                <Col xs={12}>
                    <BasicInputElements />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <SelectInput />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Checkboxes &amp; radios</h4>
                            <Row>
                                <Col md={6}>
                                    <div className="mt-3">
                                        <CustomCheckboxes />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mt-3">
                                        <CustomRadios />
                                    </div>
                                </Col>
                            </Row>

                            <Switches />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <InputSizes />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <DefaultForm />
                </Col>

                <Col lg={6}>
                    <HorizontalForm />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <InlineForm />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <FormGrid />
                </Col>
                <Col xl={6}>
                    <FloatingLabels />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
