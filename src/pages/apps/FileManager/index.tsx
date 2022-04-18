import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../../components/PageTitle';

// dummy data
import { files } from './data';

const FileManager = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/file-manager' },
                    { label: 'File Manager', path: '/apps/file-manager', active: true },
                ]}
                title={'File Manager'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="fileupload btn btn-success waves-effect waves-light mb-3">
                                <span>
                                    <i className="mdi mdi-cloud-upload me-1"></i> Upload Files
                                </span>
                                <input type="file" className="upload" />
                            </div>

                            <Table responsive className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Date Modified</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Contributors</th>
                                        <th scope="col" className="text-center" style={{ width: '125px' }}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(files || []).map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <img src={item.file_icon} height="30" alt="" className="me-2" />{' '}
                                                    <Link to="#" className="text-dark">
                                                        {item.file_name}
                                                    </Link>
                                                </td>
                                                <td className="font-13">{item.modified_date}</td>
                                                <td>{item.size}</td>
                                                <td>
                                                    {(item.contributors || []).map((user, i) => {
                                                        return (
                                                            <img
                                                                src={user}
                                                                key={i}
                                                                alt=""
                                                                className="avatar-sm img-thumbnail rounded-circle"
                                                            />
                                                        );
                                                    })}
                                                </td>
                                                <td>
                                                    <ul className="list-inline table-action m-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="action-icon px-1">
                                                                {' '}
                                                                <i className="mdi mdi-pencil"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="action-icon px-1">
                                                                {' '}
                                                                <i className="mdi mdi-delete"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default FileManager;
