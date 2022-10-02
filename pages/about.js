import React from 'react';

const About = () => {
    const mission = 'https://img.freepik.com/free-vector/illustration-business-mission_53876-26964.jpg?w=996&t=st=1661697263~exp=1661697863~hmac=e704bfa52069bfd6088ff90b987c860fc4eef94a1e3542d60a3e94d97cce616b';
    const vision = 'https://img.freepik.com/free-photo/vision-mission-planning-aspirations-process-concept_53876-139704.jpg?w=826&t=st=1661697449~exp=1661698049~hmac=04437d31273de0cc97e5cef94aaf0b69d44ec42e66b7d9bc1c158b6dedbcd668';
    return (
        <>
            <div className="container-fluid about-container mb-5">
                <p className="about-title text-light fw-bold">About Us</p>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={mission} className="img-fluid shadow-lg mt-3" alt="about" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-success fw-bold mb-3">Our Mission</p>
                        <p className="text-muted">
                            We foster our students’ love for learning, encourage them to try new and exciting things, and give them a solid foundation to build on.
                            Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated.
                            We believe that a happy child is a successful one. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued. We intend that all children should enjoy their learning, achieve their potential and become independent life-long learners.
                            Our early learning center exists to provide a safe, developmentally, inclusive environment for toddlers, preschool, kindergarten and school age children.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-success fw-bold mb-3">Our Vision</p>
                        <p className="text-muted">
                            Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.
                            Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential.
                            Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.
                            We aim to provide a safe learning environment with a welcoming atmosphere which creates a sense of belonging amongst the families. We maintain an inclusive environment which acknowledges and respects children from diverse family and cultural backgrounds.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={vision} className="img-fluid shadow-lg mt-3" alt="about" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;