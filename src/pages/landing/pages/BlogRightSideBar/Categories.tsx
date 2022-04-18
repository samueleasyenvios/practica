import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className="widget widget-categories card mb-4">
            <div className="p-4">
                <h4 className="widget-title mt-0">Categories</h4>
                <hr />
                <ul className="list-unstyled mb-0">
                    <li>
                        <Link to="#">
                            <i className="pe-7s-car float-start me-2 text-primary font-22"></i> Travel{' '}
                            <span className="float-end">(40)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="pe-7s-camera float-start me-2 text-primary font-22"></i> Photography
                            <span className="float-end">(08)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="pe-7s-users float-start me-2 text-primary font-22"></i>Lifestyle
                            <span className="float-end">(11)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="pe-7s-wine float-start me-2 text-primary font-22"></i>Food & Drinks
                            <span className="float-end">(24)</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;
