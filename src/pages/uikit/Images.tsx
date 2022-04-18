import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

// images
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar6 from '../../assets/images/users/avatar-6.jpg';

import img1 from '../../assets/images/small/img-1.jpg';
import img2 from '../../assets/images/small/img-3.jpg';

const ImageShapes = () => {
    return (
        <>
            <h4 className="header-title">Images shapes</h4>
            <p className="sub-header mb-0">
                Add classes to an <code>&lt;img /&gt;</code> element to easily style images in any project.
            </p>

            <Row>
                <Col sm={4}>
                    <div className="mt-3">
                        <img src={img1} alt="" className="img-fluid rounded" width="200" />
                        <p className="mb-0">
                            <code>.rounded</code>
                        </p>
                    </div>
                </Col>

                <Col sm={4} className="text-center">
                    <div className="mt-3">
                        <img src={avatar6} alt="" className="img-fluid rounded-circle" width="120" />
                        <p className="mb-0">
                            <code>.rounded-circle</code>
                        </p>
                    </div>
                </Col>

                <Col sm={4}>
                    <div className="mt-3">
                        <img src={img2} alt="" className="img-fluid img-thumbnail" width="200" />
                        <p className="mb-0">
                            <code>.img-thumbnail</code>
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

const ImageSizes = () => {
    return (
        <>
            <h4 className="header-title">Image sizes</h4>
            <p className="sub-header mb-0">
                Add classes to an <code>&lt;img /&gt;</code> element to easily style images in any project.
            </p>

            <Row>
                <Col md={3}>
                    <div className="mt-3">
                        <img src={avatar2} alt="" className="img-fluid avatar-xs rounded" />
                        <p className="mb-0">
                            <code>.avatar-xs</code>
                        </p>
                        <img src={avatar2} alt="" className="img-fluid avatar-sm rounded mt-2" />
                        <p className="mb-0">
                            <code>.avatar-sm</code>
                        </p>
                    </div>
                </Col>

                <Col md={3}>
                    <div className="mt-3">
                        <img src={avatar2} alt="" className="img-fluid avatar-md rounded" />
                        <p className="mb-0">
                            <code>.avatar-md</code>
                        </p>
                    </div>
                </Col>

                <Col md={3}>
                    <div className="mt-3">
                        <img src={avatar2} alt="" className="img-fluid avatar-lg rounded" />
                        <p className="mb-0">
                            <code>.avatar-lg</code>
                        </p>
                    </div>
                </Col>

                <Col md={3}>
                    <div className="mt-3">
                        <img src={avatar2} alt="" className="img-fluid avatar-xl rounded" />
                        <p className="mb-0">
                            <code>.avatar-xl</code>
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

const ImagesWithBorderRadius = () => {
    const variant = ['top', 'end', 'bottom', 'start', 'circle'];

    return (
        <>
            <h4 className="header-title">Border-radius</h4>
            <p className="sub-header mb-0">Add classes to an element to easily round its corners.</p>

            <Row>
                <Col md sm={6}>
                    <div className="mt-3">
                        <img src={avatar3} alt="" className="img-fluid avatar-md rounded" />
                        <p className="mb-0">
                            <code>.rounded</code>
                        </p>
                    </div>
                </Col>
                {(variant || []).map((variant, index) => {
                    return (
                        <Col key={index} md sm={6}>
                            <div className="mt-3">
                                <img
                                    src={avatar3}
                                    alt=""
                                    className={classNames('img-fluid', 'avatar-md', 'rounded-' + variant)}
                                />
                                <p className="mb-0">
                                    <code>.{'rounded-' + variant}</code>
                                </p>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

const ImageCustomSizes = () => {
    const sizes = ['0', '1', '2', '3'];

    return (
        <>
            <h4 className="header-title">Sizes</h4>
            <p className="sub-header mb-0">Use the scaling classes for larger or smaller rounded corners</p>

            <Row>
                {(sizes || []).map((size, index) => {
                    return (
                        <Col key={index} md sm={6}>
                            <div className="mt-3">
                                <img
                                    src={avatar2}
                                    alt=""
                                    className={classNames('img-fluid', 'avatar-md', 'rounded-' + size)}
                                />
                                <p className="mb-0">
                                    <code>.{'rounded-' + size}</code>
                                </p>
                            </div>
                        </Col>
                    );
                })}
                .
            </Row>
        </>
    );
};

const Images = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/images' },
                    { label: 'Images', path: '/ui/images', active: true },
                ]}
                title={'Images'}
            />

            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <ImageShapes />
                                </Col>
                                <Col xl={6} className="mt-3 mt-xl-0">
                                    <ImageSizes />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <ImagesWithBorderRadius />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <ImageCustomSizes />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Images;
