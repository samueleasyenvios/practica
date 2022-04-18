import React from 'react';
import { Link } from 'react-router-dom';

const Tags = () => {
    return (
        <div className="widget widget-tag-cloud card mb-4">
            <div className="p-4">
                <h4 className="widget-title mt-0">Tags</h4>
                <hr />
                <div className="tagcloud">
                    <Link to="#">Logo</Link>
                    <Link to="#">Business</Link>
                    <Link to="#">Corporate</Link>
                    <Link to="#">E-commerce</Link>
                    <Link to="#">Agency</Link>
                    <Link to="#">Responsive</Link>
                </div>
            </div>
        </div>
    );
};

export default Tags;
