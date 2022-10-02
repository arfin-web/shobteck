import React from 'react';
import Link from 'next/link';
import 'animate.css';

const Mainbanner = () => {
    return (
        <>
            <div className="container-fluid mainbanner">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 p-4">
                            <p className="fs-1 main-color fw-bold mb-3 mt-4">Make your business shine on the web</p>
                            <p className="text-muted">
                                We provide solutions for business by creative design, scalable development and interactive digital engagement. Our design team helps you in translating your services and products into powerful business. Check below for some of our key services and solutions
                            </p>
                            <Link href="/contact">
                                <button type="button" className="btn main-button rounded-pill text-white fw-bold mt-3">Start Now</button>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 p-4">
                            <img src="bannerimg.svg" className="img-fluid mt-4" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mainbanner;