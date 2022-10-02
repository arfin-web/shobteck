import React from 'react';

const Address = () => {
    const map = "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/mohammadpur_map_0.jpg";
    return (
        <>
            <div className='container my-5'>
                <div className="card bg-light border-0 shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="card border-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item border-0">
                                            <p className='fs-4 text-dark'><i className="fas fa-map-marker-alt main-color fs-3"></i> Road No - 1, House No - 13, Block - A, Dhaka Uddan, Mohammadpur, 1207
                                            </p>
                                        </li>
                                        <li className="list-group-item border-0">
                                            <p className='fs-4'><i className="fas fa-phone-alt main-color fs-3"></i> +8801816111162</p>
                                        </li>
                                        <li className="list-group-item border-0">
                                            <p className='fs-4'><i className="fas fa-envelope main-color fs-3"></i> mmiofficial15@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={map} className="img-fluid rounded-start h-100" alt="map" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;