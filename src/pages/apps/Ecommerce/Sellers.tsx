import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

// dummy data
import { sellers, SellersItemTypes } from './data';

const SellerInfo = ({ item }: { item: SellersItemTypes }) => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex align-items-start">
                    {item.image ? (
                        <div className="me-3">
                            <img src={item.image} alt="" className="rounded avatar-md" />
                        </div>
                    ) : (
                        <div className="avatar-md me-3">
                            <div className="avatar-title bg-light rounded text-body font-20 fw-semibold">
                                {item.store[0]}
                            </div>
                        </div>
                    )}
                    <div className="flex-1">
                        <h5 className="my-1">
                            <Link to="#" className="text-dark">
                                {item.store}
                            </Link>
                        </h5>
                        <p className="text-muted mb-0">
                            <i className="mdi mdi-account me-1"></i> {item.name}
                        </p>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle as="a" className="text-body cursor-pointer">
                            <i className="mdi mdi-dots-vertical font-20"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another Action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <hr />

                <div className="text-muted">
                    <Row>
                        <Col sm={4} xs={6}>
                            <div>
                                <p className="mb-0">Products</p>
                                <h5 className="mb-sm-0">{item.products}</h5>
                            </div>
                        </Col>
                        <Col sm={4} xs={6}>
                            <div>
                                <p className="mb-0">Wallet Balance</p>
                                <h5 className="mb-sm-0">{item.balance}</h5>
                            </div>
                        </Col>
                        <Col sm={4} xs={6}>
                            <div className="mt-3 mt-sm-0">
                                <p className="mb-0">Revenue</p>
                                <h5 className="mb-0">{item.revenue}</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

const Sellers = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/sellers' },
                    {
                        label: 'Sellers',
                        path: '/apps/ecommerce/sellers',
                        active: true,
                    },
                ]}
                title={'Sellers'}
            />

            <Row className="mb-2">
                <Col sm={4}>
                    <Link to="#" className="btn btn-danger mb-2">
                        <i className="mdi mdi-plus-circle me-1"></i> Add Sellers
                    </Link>
                </Col>
                <Col sm={8}>
                    <div className="float-sm-end">
                        <form className="d-flex flex-wrap align-items-center">
                            <div className="d-flex flex-wrap align-items-center me-2">
                                <label htmlFor="sellersearch-input" className="visually-hidden">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    className="form-control"
                                    id="sellersearch-input"
                                    placeholder="Search..."
                                />
                            </div>
                            <button type="button" className="btn btn-success mb-2 mb-sm-0">
                                <i className="mdi mdi-cog"></i>
                            </button>
                        </form>
                    </div>
                </Col>
            </Row>

            <Row>
                {(sellers || []).map((item, index) => {
                    return (
                        <Col key={index} lg={6}>
                            <SellerInfo item={item} />
                        </Col>
                    );
                })}
            </Row>

            <Row>
                <Col lg={12}>
                    <div>
                        <div className="text-center my-3">
                            <Link to="#" className="text-danger"><i className="mdi mdi-spin mdi-loading font-20 align-middle me-2"></i> Load more </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Sellers;
