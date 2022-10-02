import React from 'react';

const Statistics = () => {
    return (
        <>
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 bg-light border-0 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="fas fa-user-graduate main-color fs-4"></i> 100+ Students</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light border-0 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="fas fa-chalkboard-teacher main-color fs-4"></i> 10+ Instructors</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light border-0 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="fas fa-medal main-color fs-4"></i> 4+ Award</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;