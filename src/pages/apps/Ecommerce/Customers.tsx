import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';

// dummy data
import { customers } from './data';

/* name column render */
const NameColumn = ({ row }: { row: any }) => {
    return (
        <div className="d-flex">
            {row.original.avatar ? (
                <img src={row.original.avatar} alt="" className="me-3 rounded-circle avatar-sm" />
            ) : (
                <div className="avatar-sm me-3">
                    <div className="avatar-title rounded-circle bg-soft-primary fw-medium text-primary">
                        {row.original.name[0]}
                    </div>
                </div>
            )}
            <div className="flex-1">
                <h5 className="mt-0 mb-1">
                    <Link to="#" className="text-dark">
                        {row.original.name}
                    </Link>
                </h5>
                <p className="mb-0 font-13">ID: {row.original.id}</p>
            </div>
        </div>
    );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
    return (
        <React.Fragment>
            <span
                className={classNames('badge', {
                    'badge-soft-success': row.original.status === 'Active',
                    'badge-soft-danger': row.original.status === 'Blocked',
                })}
            >
                {row.original.status}
            </span>
        </React.Fragment>
    );
};

/* action column render */
const ActionColumn = () => {
    return (
        <React.Fragment>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-square-edit-outline"></i>
            </Link>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-delete"></i>
            </Link>
        </React.Fragment>
    );
};

// columns to render
const columns = [
    {
        Header: 'Customer',
        accessor: 'name',
        sort: true,
        Cell: NameColumn,
        classes: 'table-user',
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        sort: true,
    },
    {
        Header: 'Balance',
        accessor: 'balance',
        sort: true,
    },
    {
        Header: 'Orders',
        accessor: 'orders',
        sort: true,
    },
    {
        Header: 'Last Order',
        accessor: 'last_order',
        sort: true,
    },
    {
        Header: 'Status',
        accessor: 'status',
        sort: true,
        Cell: StatusColumn,
    },
    {
        Header: 'Action',
        accessor: 'action',
        sort: false,
        Cell: ActionColumn,
    },
];

// give page size
const sizePerPageList = [
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: customers.length,
    },
];

// main component
const Customers = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/customers' },
                    {
                        label: 'Customers',
                        path: '/apps/ecommerce/customers',
                        active: true,
                    },
                ]}
                title={'Customers'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col sm={4}>
                                    <Button className="btn btn-danger mb-2">
                                        <i className="mdi mdi-plus-circle me-1"></i> Add Customers
                                    </Button>
                                </Col>

                                <Col sm={8}>
                                    <div className="text-sm-end">
                                        <Button className="btn btn-success mb-2 me-1">
                                            <i className="mdi mdi-cog"></i>
                                        </Button>

                                        <Button className="btn btn-light mb-2 me-1">Import</Button>

                                        <Button className="btn btn-light mb-2">Export</Button>
                                    </div>
                                </Col>
                            </Row>

                            <div className="table-responsive">
                                <Table
                                    columns={columns}
                                    data={customers}
                                    pageSize={10}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                    isSelectable={true}
                                    isSearchable={true}
                                    tableClass="table-centered dt-responsive nowrap w-100"
                                    theadClass="table-light"
                                    searchBoxClass="mb-2"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Customers;
