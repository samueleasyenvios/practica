import React from 'react';
import { Link } from 'react-router-dom';

const Archives = () => {
    return (
        <div className="widget card mb-4">
            <div className="p-4">
                <h4 className="widget-title mt-0">Archives</h4>
                <hr />
                <ul className="list-unstyled mb-0">
                    <li>
                        <Link to="#">
                            May <span className="float-end">(40)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            April<span className="float-end">(08)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            March<span className="float-end">(11)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            February<span className="float-end">(24)</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Archives;
