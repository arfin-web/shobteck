import React from 'react';
import Link from 'next/link';
import Address from './Address';

const Footer = () => {
    return (
        <>
            <div className='container-fluid mb-4'>
                <div className='container d-flex justify-content-center flex-column'>
                    <p className="fs-1 main-color fw-bold mt-3 text-center">Backed By The Best</p>
                    <img src='brands.png' className='img-fluid' alt='brands' />
                </div>
            </div>
            <Address></Address>
            <div className="container-fluid bg-white p-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-white text-white">
                            <div className="card-header fs-3 main-color fw-bold">
                                Follow Us
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item fs-5 text-muted p-3 bg-white"><i className="fab fa-facebook-square fs-4 main-color"></i> /mmiofficial</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-white"><i className="fab fa-twitter-square fs-4 main-color"></i> /mmiofficial</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-white"><i className="fab fa-youtube-square fs-4 main-color"></i> /mmiofficial</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-white">
                            <div className="card-header fs-3 main-color fw-bold">
                                Explore
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-white">
                                    <Link href="/" className="text-muted text-decoration-none fs-5"><i className="fas fa-hand-point-right fs-4 main-color icon">Home</i></Link>
                                </li>
                                <li className="list-group-item bg-white">
                                    <Link href="/about" className="text-muted text-decoration-none fs-5"><i className="fas fa-hand-point-right fs-4 main-color icon">About</i></Link>
                                </li>
                                <li className="list-group-item bg-white">
                                    <Link href="/contact" className="text-muted text-decoration-none fs-5"><i className="fas fa-hand-point-right fs-4 main-color icon">Contact</i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card">
                            <img src="logo.png" className="img-fluid" alt="school" />
                        </div>
                    </div>
                </div>
                <p className="text-muted text-center mt-5 mb-0 fs-5">&#169; Created By <span className='fw-bold'>Arfin Priom</span> || All Rights Resurved</p>
            </div>
        </>
    );
};

export default Footer;