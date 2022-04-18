import React from 'react';

const Search = () => {
    return (
        <div className="widget widget-search card mb-4">
            <div className="card-body">
                <form>
                    <input className="form-control" type="search" placeholder="Search..." />
                    <button className="search-button" type="submit">
                        <i className="mdi mdi-magnify"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;
