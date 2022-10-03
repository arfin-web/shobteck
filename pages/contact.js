import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
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
                                    <p className="fs-3 main-color fw-bold">Stay With Us</p>
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
                                        <input type="submit" className='btn main-button text-white rounded-pill fw-bold' value="Send" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-2">
                                <img src="contact.svg" className="img-fluid rounded-start h-100" alt="contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Contact;