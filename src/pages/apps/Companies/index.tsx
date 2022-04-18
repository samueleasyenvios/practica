import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../../components/PageTitle';

import CompanyDetails from './CompanyDetails';

// dummy data
import { companyInfo as data, CompanyTypes } from './data';

const Companies = () => {
    const [companyInfo, setCompanyInfo] = useState<CompanyTypes[]>(data);

    /*
     * search on data
     */
    const onSearchData = (value: string) => {
        if (value === '') setCompanyInfo(data);
        else {
            var modifiedProducts = [...data];
            modifiedProducts = modifiedProducts.filter(
                (item) => item.name.toLowerCase().includes(value) || item.location.toLowerCase().includes(value)
            );
            setCompanyInfo(modifiedProducts);
        }
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/companies' },
                    { label: 'Companies', path: '/apps/companies', active: true },
                ]}
                title={'Companies'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-between">
                                <Col lg={8}>
                                    <form className="d-flex flex-wrap align-items-center">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <label htmlFor="inputPassword2" className="visually-hidden">
                                                Search
                                            </label>
                                            <input
                                                type="search"
                                                className="form-control"
                                                id="inputPassword2"
                                                placeholder="Search..."
                                                onChange={(e: any) => onSearchData(e.target.value)}
                                            />
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center mx-sm-3">
                                            <label htmlFor="status-select" className="me-2">
                                                Sort By
                                            </label>
                                            <div>
                                                <select defaultValue="Name" className="form-select">
                                                    <option value="Select">Select</option>
                                                    <option value="Date">Date</option>
                                                    <option value="Name">Name</option>
                                                    <option value="Revenue">Revenue</option>
                                                    <option value="Employees">Employees</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                                <Col lg={4} sm={6}>
                                    <div className="d-flex gap-2 justify-content-lg-end mt-3 mt-lg-0">
                                        <Button variant="success" className="waves-effect waves-light me-1">
                                            <i className="mdi mdi-cog"></i>
                                        </Button>
                                        <Button variant="danger" className="waves-effect waves-light">
                                            <i className="mdi mdi-plus-circle me-1"></i> Add New
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <CompanyDetails companyInfo={companyInfo} />

            <Row className="mb-4">
                <Col sm={6}>
                    <div>
                        <h5 className="font-14 text-body">Showing Page 2 Of 94</h5>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="float-sm-end">
                        <ul className="pagination pagination-rounded mb-sm-0">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#" aria-label="Previous">
                                    <i className="mdi mdi-chevron-left"></i>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    4
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    5
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                    <i className="mdi mdi-chevron-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Companies;
