import React from 'react';

const Statistics = () => {
    return (
        <>
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 bg-light border-0 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="fas fa-clipboard-list main-color fs-4"></i> 10+ Project Done</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light border-0 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="fas fa-users main-color fs-4"></i> 8+ Happy Clients</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light border-0 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="fas fa-medal main-color fs-4"></i> 2+ Award</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;