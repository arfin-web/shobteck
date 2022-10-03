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
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label main-color fw-bold fs-3">Get Newsletter</label>
                                <input type="email" className="form-control rounded-pill" id="inputEmail4" placeholder='Your Email' />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn main-button text-white rounded-pill fw-bold">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-4'>
                        <div className="card">
                            <div className="card-header main-color fw-bold fs-4">
                                Follow Us
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item social-links">
                                    <i className="fab fa-facebook-square fs-3 main-color"></i>
                                    <Link className="nav-link active text-dark" aria-current="page" href="/"><span className='fs-5 main-color'> /ShobTech</span></Link>
                                </li>
                                <li className="list-group-item social-links">
                                    <i className="fab fa-instagram-square fs-3 main-color"></i>
                                    <Link className="nav-link active text-dark" aria-current="page" href="/"><span className='fs-5 main-color'> /ShobTech</span></Link>
                                </li>
                                <li className="list-group-item social-links">
                                    <i className="fab fa-youtube-square fs-3 main-color"></i>
                                    <Link className="nav-link active text-dark" aria-current="page" href="/"><span className='fs-5 main-color'> /ShobTech</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card">
                            <img src="logo.png" className="card-img-top img-fluid" alt="footerLogo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-light py-2'>
                <p className='text-muted text-center fs-5'>&#169; Created By <span className='fw-bold'>Arfin Priom ||</span> All Rights Resurved <span className='fw-bold'>2022.</span></p>
            </div>
        </>
    );
};

export default Footer;