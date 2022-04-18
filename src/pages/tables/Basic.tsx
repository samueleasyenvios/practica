import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

interface TableRecords {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
}

// dummy records
const records: TableRecords[] = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', userName: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', userName: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'the Bird', userName: '@twitter' },
];

const BasicTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Basic example</h4>
                <p className="sub-header">
                    Just use <code>Table</code> element
                </p>

                <div className="table-responsive">
                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const InverseTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Inverse Table</h4>
                <p className="sub-header">
                    You can also invert the colors—with light text on dark backgrounds—by specifying <code>dark</code>{' '}
                    attribute
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const TableHeadOptions = ({ variant }: { variant: string }) => {
    const theadClass: string = variant === 'light' ? 'table-light' : 'table-dark';
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Table head options</h4>
                    <p className="sub-header">
                        Use one of two modifier classes to make <code>&lt;thead&gt;</code>s appear light or dark gray.
                    </p>
                    <div className="table-responsive">
                        <Table className="mb-0">
                            <thead className={theadClass}>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(records || []).map((record, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{record.id}</th>
                                            <td>{record.firstName}</td>
                                            <td>{record.lastName}</td>
                                            <td>{record.userName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

const StripedRowsTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Striped Rows</h4>
                <p className="sub-header">
                    Add <code>striped</code> attribute to table
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const BorderedTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bordered table</h4>
                <p className="sub-header">
                    Add <code>bordered</code> attribute for borders on all sides of the table and cells.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const SmallTable = () => {
    const newRecords = [...records, ...records, ...records];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Small table</h4>
                <p className="sub-header">
                    Add <code>size="sm"</code> attribute to make tables more compact by cutting cell padding in half
                </p>

                <Table className="mb-0" size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(newRecords || []).map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.userName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const ContextualClasses = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Contextual classes</h4>
                <p className="sub-header">Use contextual classes to color table rows or individual cells.</p>

                <Table className="border-primary mb-0" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-active">
                            <th scope="row">1</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr className="table-success">
                            <th scope="row">3</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr className="table-info">
                            <th scope="row">5</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr className="table-warning">
                            <th scope="row">7</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr className="table-danger">
                            <th scope="row">9</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const HoverableTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Hoverable Rows</h4>
                <p className="sub-header">
                    Add <code>hover</code> attribute to enable a hover state on table rows
                </p>

                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(records || []).map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.userName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const BorderlessTable = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Borderless table</h4>
                    <p className="sub-header">
                        For basic styling—light padding and only horizontal dividers—add the base class{' '}
                        <code>.table</code> to any <code>&lt;table&gt;</code>.
                    </p>

                    <div className="table-responsive">
                        <Table className="mb-0" borderless>
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(records || []).map((record, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{record.id}</th>
                                            <td>{record.firstName}</td>
                                            <td>{record.lastName}</td>
                                            <td>{record.userName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

const BorderlessInverseTable = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Borderless Inverse table</h4>
                    <p className="sub-header"> Your awesome text goes here.Your awesome text goes here.</p>

                    <div className="table-responsive">
                        <Table className="mb-0" variant="dark" borderless>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(records || []).map((record, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{record.id}</th>
                                            <td>{record.firstName}</td>
                                            <td>{record.lastName}</td>
                                            <td>{record.userName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

const ContextualwithBgColor = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Contextual classes with Background color</h4>
                    <p className="sub-header">
                        You can also invert the colors—with light text on dark backgrounds—with{' '}
                        <code className="highlighter-rouge">.table-dark</code>.
                    </p>

                    <div className="table-responsive">
                        <Table className="mb-0" variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="bg-primary" scope="row">
                                        1
                                    </th>
                                    <td className="bg-primary">Mark</td>
                                    <td className="bg-primary">Otto</td>
                                    <td className="bg-primary">@mdo</td>
                                </tr>
                                <tr>
                                    <th className="bg-success" scope="row">
                                        2
                                    </th>
                                    <td className="bg-success">Jacob</td>
                                    <td className="bg-success">Thornton</td>
                                    <td className="bg-success">@fat</td>
                                </tr>
                                <tr>
                                    <th className="bg-pink" scope="row">
                                        3
                                    </th>
                                    <td className="bg-pink">Larry</td>
                                    <td className="bg-pink">the Bird</td>
                                    <td className="bg-pink">@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

const TableCaption = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Captions</h4>
                <p className="sub-header">
                    A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen
                    readers to find a table and understand what it’s about and decide if they want to read it.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0">
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const NestingTables = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Nesting</h4>
                <p className="sub-header">
                    {' '}
                    Border styles, active styles, and table variants are not inherited by nested tables.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" striped bordered size="sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <Table className="mb-0" size="sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">Header</th>
                                                <th scope="col">Header</th>
                                                <th scope="col">Header</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">A</th>
                                                <td>First</td>
                                                <td>Last</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">B</th>
                                                <td>First</td>
                                                <td>Last</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const Tables = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tables', path: '/ui/tables/basic' },
                    { label: 'Basic Tables', path: '/ui/tables/basic', active: true },
                ]}
                title={'Basic Tables'}
            />

            <Row>
                <Col lg={6}>
                    <BasicTable />
                </Col>

                <Col lg={6}>
                    <InverseTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <TableHeadOptions variant="light" />
                </Col>

                <Col lg={6}>
                    <StripedRowsTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <BorderedTable />
                </Col>

                <Col lg={6}>
                    <HoverableTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <SmallTable />
                </Col>

                <Col lg={6}>
                    <ContextualClasses />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <TableHeadOptions variant="dark" />
                </Col>

                <Col lg={6}>
                    <ContextualwithBgColor />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <BorderlessTable />
                </Col>

                <Col lg={6}>
                    <BorderlessInverseTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <TableCaption />
                </Col>

                <Col lg={6}>
                    <NestingTables />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Tables;
