import React from 'react';

const Offerbanner = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row gx-0">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-light border-0">
                            <i className="fas fa-school fs-1 ms-3 mb-3 mt-2 main-color"></i>
                            <div className="card-body">
                                <h4 className="card-title main-color">Quality Education</h4>
                                <p className="card-text text-muted">We ensure quality education to all of our beloved students.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 main-button">
                            <i className="fas fa-chalkboard-teacher fs-1 ms-3 mb-3 mt-2 text-light"></i>
                            <div className="card-body">
                                <h4 className="card-title text-light">Expert Instructors</h4>
                                <p className="card-text text-white-50">We have experienced teachers to provide best education to your child.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card p-4 bg-light border-0">
                            <i className="fas fa-heartbeat fs-1 ms-3 mb-3 mt-2 main-color"></i>
                            <div className="card-body">
                                <h4 className="card-title main-color">Special Care</h4>
                                <p className="card-text text-muted">We provide extra classes for weak students so that they can do better result in the examination.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offerbanner;