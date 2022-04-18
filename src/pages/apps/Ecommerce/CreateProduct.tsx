import React, { useState } from 'react';
import { Card, Form, Button, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import { Editor } from 'react-draft-wysiwyg';
import { Wizard, Steps, Step } from 'react-albus';

// styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import PageTitle from '../../../components/PageTitle';
import FileUploader from '../../../components/FileUploader';
import { FormInput } from '../../../components/form/';

const ProductEdit = () => {
    const [key, setKey] = useState<string | null>('general-info');
    const [editorState, setEditorState] = useState<any>();
    const categories = [
        {
            label: 'Shopping',
            options: [
                { value: 'SH1', label: 'Shopping 1' },
                { value: 'SH2', label: 'Shopping 2' },
                { value: 'SH3', label: 'Shopping 3' },
            ],
        },
        {
            label: 'CRM',
            options: [
                { value: 'CRM1', label: 'Crm 1' },
                { value: 'CRM2', label: 'Crm 2' },
                { value: 'CRM3', label: 'Crm 3' },
                { value: 'CRM4', label: 'Crm 4' },
            ],
        },
        {
            label: 'eCommerce',
            options: [
                { value: 'E1', label: 'eCommerce 1' },
                { value: 'E2', label: 'eCommerce 2' },
                { value: 'E3', label: 'eCommerce 3' },
                { value: 'E4', label: 'eCommerce 4' },
            ],
        },
    ];
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter Project Name'),
            summary: yup.string().required('Please enter Project Name'),
            price: yup.string().required('Please enter Project Name'),
            comment: yup.string().required('Please enter Project Name'),
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

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: any) => {
        setEditorState(editorStates);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Ecommerce', path: '/apps/ecommerce/details' },
                    {
                        label: 'Add / Edit Product',
                        path: '/apps/ecommerce/details',
                        active: true,
                    },
                ]}
                title={'Add / Edit Product'}
            />

            <Card>
                <Card.Body>
                    <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard form-wizard-header">
                        <Wizard
                            render={({ step, steps }) => (
                                <React.Fragment>
                                    <Steps>
                                        <Tabs
                                            id="controlled-tab-example"
                                            activeKey={key ? key : 'general-info'}
                                            variant="pills"
                                            className="nav-justified twitter-bs-wizard-nav mb-2"
                                        >
                                            <Tab
                                                eventKey="general-info"
                                                title={
                                                    <>
                                                        <span className="number">01</span>
                                                        <span className="d-none d-sm-inline">General</span>
                                                    </>
                                                }
                                            >
                                                <Step
                                                    id="general-info"
                                                    render={({ next }) => (
                                                        <>
                                                            <h4 className="header-title">General Information</h4>
                                                            <p className="sub-header">Fill all information below</p>

                                                            <div>
                                                                <form
                                                                    onSubmit={handleSubmit(() => {
                                                                        setKey('product-img');
                                                                        next();
                                                                    })}
                                                                >
                                                                    <FormInput
                                                                        name="name"
                                                                        label="Product Name"
                                                                        placeholder="e.g : Apple iMac"
                                                                        containerClass={'mb-3'}
                                                                        register={register}
                                                                        key="productname"
                                                                        errors={errors}
                                                                        control={control}
                                                                    />
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Label>Product Description</Form.Label>
                                                                        {/* <SimpleMdeReact /> */}
                                                                        <Editor
                                                                            editorState={editorState}
                                                                            toolbarClassName="draft-toolbar"
                                                                            wrapperClassName="react-draft-wrapper border border-1 rounded-1"
                                                                            onEditorStateChange={onEditorStateChange}
                                                                            editorStyle={{ minHeight: '200px' }}
                                                                        />
                                                                    </Form.Group>

                                                                    <Row>
                                                                        <Col lg={6}>
                                                                            <FormInput
                                                                                type="textarea"
                                                                                rows={5}
                                                                                name="summary"
                                                                                label="Product Summary"
                                                                                placeholder="Please enter summary"
                                                                                containerClass={'mb-3'}
                                                                                register={register}
                                                                                key="summary"
                                                                                errors={errors}
                                                                                control={control}
                                                                            />
                                                                        </Col>

                                                                        <Col lg={6}>
                                                                            <Form.Group className="mb-3">
                                                                                <Form.Label>Categories</Form.Label>
                                                                                <Select
                                                                                    className="react-select react-select-container"
                                                                                    classNamePrefix="react-select"
                                                                                    options={categories}
                                                                                    id="product-category"
                                                                                />
                                                                            </Form.Group>

                                                                            <FormInput
                                                                                name="price"
                                                                                label="Price"
                                                                                placeholder="Enter amount"
                                                                                containerClass={'mb-3'}
                                                                                register={register}
                                                                                key="price"
                                                                                errors={errors}
                                                                                control={control}
                                                                            />
                                                                        </Col>
                                                                    </Row>

                                                                    <div className="mb-3">
                                                                        <label className="mb-2">Status</label>
                                                                        <br />
                                                                        <div className="radio form-check-inline">
                                                                            <input
                                                                                type="radio"
                                                                                id="inlineRadio1"
                                                                                value="option1"
                                                                                name="radioInline"
                                                                                defaultChecked
                                                                            />{' '}
                                                                            <label htmlFor="inlineRadio1">Online</label>
                                                                        </div>
                                                                        <div className="radio form-check-inline">
                                                                            <input
                                                                                type="radio"
                                                                                id="inlineRadio2"
                                                                                value="option2"
                                                                                name="radioInline"
                                                                            />{' '}
                                                                            <label htmlFor="inlineRadio2">
                                                                                {' '}
                                                                                Offline{' '}
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio form-check-inline">
                                                                            <input
                                                                                type="radio"
                                                                                id="inlineRadio3"
                                                                                value="option3"
                                                                                name="radioInline"
                                                                            />{' '}
                                                                            <label htmlFor="inlineRadio3">
                                                                                {' '}
                                                                                Draft{' '}
                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                    <FormInput
                                                                        type="textarea"
                                                                        rows={3}
                                                                        name="comment"
                                                                        label="Comment"
                                                                        placeholder="Please enter comment"
                                                                        containerClass={'mb-3'}
                                                                        register={register}
                                                                        key="comment"
                                                                        errors={errors}
                                                                        control={control}
                                                                    />

                                                                    <ul className="pager wizard mb-0 list-inline text-end mt-3">
                                                                        <li className="next list-inline-item float-end">
                                                                            <Button variant="success" type="submit">
                                                                                Add More Info{' '}
                                                                                <i className="mdi mdi-arrow-right ms-1"></i>
                                                                            </Button>
                                                                        </li>
                                                                    </ul>
                                                                </form>
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </Tab>
                                            <Tab
                                                eventKey="product-img"
                                                title={
                                                    <>
                                                        <span className="number">02</span>
                                                        <span className="d-none d-sm-inline">Product Images</span>
                                                    </>
                                                }
                                            >
                                                <Step
                                                    id="product-img"
                                                    render={({ next, previous }) => (
                                                        <>
                                                            <h4 className="header-title">Product Images</h4>
                                                            <p className="sub-header">Upload product image</p>

                                                            <div>
                                                                <FileUploader />
                                                            </div>

                                                            <ul className="pager wizard mb-0 list-inline text-end mt-3">
                                                                <li className="previous list-inline-item">
                                                                    <Button
                                                                        onClick={() => {
                                                                            setKey('general-info');
                                                                            previous();
                                                                        }}
                                                                        variant="secondary"
                                                                    >
                                                                        <i className="mdi mdi-arrow-left"></i> Back to
                                                                        General
                                                                    </Button>
                                                                </li>
                                                                <li className="next list-inline-item float-end">
                                                                    <Button
                                                                        variant="success"
                                                                        type="submit"
                                                                        onClick={() => {
                                                                            setKey('metadata');
                                                                            next();
                                                                        }}
                                                                    >
                                                                        Add Meta Data{' '}
                                                                        <i className="mdi mdi-arrow-right ms-1"></i>
                                                                    </Button>
                                                                </li>
                                                            </ul>
                                                        </>
                                                    )}
                                                />
                                            </Tab>
                                            <Tab
                                                eventKey="metadata"
                                                title={
                                                    <>
                                                        <span className="number">03</span>
                                                        <span className="d-none d-sm-inline">Meta Data</span>
                                                    </>
                                                }
                                            >
                                                <Step
                                                    id="metadata"
                                                    render={({ previous }) => (
                                                        <>
                                                            <h4 className="header-title">Meta Data</h4>
                                                            <p className="sub-header">Fill all information below</p>
                                                            <div>
                                                                <FormInput
                                                                    name="metatitle"
                                                                    label="Meta title"
                                                                    placeholder="Enter title"
                                                                    containerClass={'mb-3'}
                                                                    register={register}
                                                                    key="metatitle"
                                                                    errors={errors}
                                                                    control={control}
                                                                />
                                                                <FormInput
                                                                    name="metakeywords"
                                                                    label="Meta Keywords"
                                                                    placeholder="Enter keywords"
                                                                    containerClass={'mb-3'}
                                                                    register={register}
                                                                    key="metakeywords"
                                                                    errors={errors}
                                                                    control={control}
                                                                />
                                                                <FormInput
                                                                    type="textarea"
                                                                    rows={5}
                                                                    name="metadescription"
                                                                    label="Meta Description"
                                                                    placeholder="Please enter description"
                                                                    containerClass={'mb-3'}
                                                                    register={register}
                                                                    key="metadescription"
                                                                    errors={errors}
                                                                    control={control}
                                                                />
                                                            </div>
                                                            <ul className="pager wizard mb-0 list-inline text-end mt-3">
                                                                <li className="previous list-inline-item">
                                                                    <Button
                                                                        onClick={() => {
                                                                            setKey('product-img');
                                                                            previous();
                                                                        }}
                                                                        variant="secondary"
                                                                    >
                                                                        <i className="mdi mdi-arrow-left"></i> Edit
                                                                        Information
                                                                    </Button>
                                                                </li>

                                                                <li className="next list-inline-item float-end">
                                                                    <Button variant="success">
                                                                        Publish Product{' '}
                                                                        <i className="mdi mdi-arrow-right ms-1"></i>
                                                                    </Button>
                                                                </li>
                                                            </ul>
                                                        </>
                                                    )}
                                                />
                                            </Tab>
                                        </Tabs>
                                    </Steps>
                                </React.Fragment>
                            )}
                        />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductEdit;
