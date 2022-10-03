import React from 'react';

const Services = () => {
    return (
        <>
            <div className='container my-5'>
                <div className="card rounded-3 border-0">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <img src="service.svg" className="img-fluid rounded-start h-100 mt-3" alt="service" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title main-color fs-2 fw-bold text-center">Our Services</h5>
                            </div>
                            <div className="container mt-4 mb-5">
                                <div className="row gx-0">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="card p-4 bg-light border-0">
                                            <i className="fab fa-figma fs-1 ms-3 mb-3 mt-2 main-color"></i>
                                            <div className="card-body">
                                                <h4 className="card-title main-color">Web Design</h4>
                                                <p className="card-text text-muted">Get Found Online and Turn Clicks Into Customers With a Well-Optimized Website
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="card p-4 main-button">
                                            <i className="fas fa-laptop-code fs-1 ms-3 mb-3 mt-2 text-white"></i>
                                            <div className="card-body">
                                                <h4 className="card-title text-light">Web Development</h4>
                                                <p className="card-text text-white-50">Saving you time and resources, we build best-in-class websites for startups and companies worldwide.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="card p-4 bg-light border-0">
                                            <i className="fas fa-mobile fs-1 ms-3 mb-3 mt-2 main-color"></i>
                                            <div className="card-body">
                                                <h4 className="card-title main-color">App Development</h4>
                                                <p className="card-text text-muted">Get high performance and scalable mobile app development services for your business</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;