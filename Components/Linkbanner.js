import React from 'react';
import Link from 'next/link';
import 'animate.css';

const Linkbanner = () => {
    return (
        <>
            <div className="container-fluid mainbanner">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 p-4">
                            <img src="projects.svg" className="img-fluid mt-4" alt="banner" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 p-4">
                            <p className="fs-1 main-color fw-bold mb-3 mt-4">Successfully Completed 10+ Projects</p>
                            <p className="text-muted">
                                A successful website does three things:
                                It attracts the right kinds of visitors.
                                Guides them to the main services or product you offer.
                                Collect Contact details for future ongoing relation.
                            </p>
                            <Link href="/teachers">
                                <button type="button" className="btn main-button rounded-pill text-white fw-bold mt-3">See Our Portfolio</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mainbanner">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 p-4">
                            <p className="fs-1 main-color fw-bold mb-3 mt-4">5+ Expert Software Developers</p>
                            <p className="text-muted">
                                None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful.
                            </p>
                            <Link href="/gallary">
                                <button type="button" className="btn main-button rounded-pill text-white fw-bold mt-3">Meet Our Team</button>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 p-4">
                            <img src="team.svg" className="img-fluid mt-4" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Linkbanner;