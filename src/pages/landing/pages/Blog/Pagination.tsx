import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <Row>
            <Col lg={12}>
                <div className="mt-4">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-rounded justify-content-center">
                            <li className="page-item">
                                <Link className="page-link" to="#">
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
                                    <i className="mdi mdi-chevron-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Col>
        </Row>
    );
};

export default Pagination;
