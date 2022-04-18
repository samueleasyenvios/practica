import React from 'react';
import { Link } from 'react-router-dom';

const Tagline = () => {
    return (
        <div className="tagline d-none d-lg-block bg-dark">
            <div className="container">
                <div className="float-start info-link">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <i className="mdi mdi-phone-classic me-1"></i>{' '}
                            <span className="font-size-13">+1 234 567 89 01</span>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="mdi mdi-email me-1"></i>{' '}
                                <span className="font-size-13">info@mymail.com</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="float-end">
                    <ul className="list-inline social-links mb-0">
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="mdi mdi-facebook"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="mdi mdi-twitter"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="mdi mdi-linkedin"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="mdi mdi-pinterest"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="mdi mdi-instagram"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Tagline;
