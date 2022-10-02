import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const contactimg = 'https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=900&t=st=1661697104~exp=1661697704~hmac=828effcb18db78891300c10d2d303e87bc6b764356bc69050753e6616651610c';
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o6517kp', 'template_narxogp', form.current, 'user_ODdpKQ7lUpHGR3sVtpazS')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className="container-fluid contact-container p-5">
                    <div className="card mb-3 border-0 rounded-3 shadow bg-light    ">
                        <div className="row g-0">
                            <div className="col-md-7">
                                <div className="card-body">
                                    <p className="fs-3 text-success fw-bold">Stay With Us</p>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className='btn btn-success text-white rounded-pill fw-bold' value="Send" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <img src={contactimg} className="img-fluid rounded-start h-100" alt="contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Contact;