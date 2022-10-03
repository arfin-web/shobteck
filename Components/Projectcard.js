import React from "react";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from "../sanityClient";

const Projectcard = (props) => {
    const post = props.data;
    const slug = post.slug.current;
    const imageProps = useNextSanityImage(
        sanityClient,
        post.mainImage
    );
    return (
        <div className="col-lg-4">
            <div className="card border-0 rounded-3 shadow-lg">
                {post.mainImage && (
                    // <img src={post.mainImage} alt="" />
                    <Image {...imageProps} className='img-fluid' layout="intrinsic" alt="" />
                )}
                <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title text-center fw-bold">{post.title}</h5>
                    <p className="card-text">
                        {post.excerpt}
                    </p>
                    <a href={post?.visit} className="btn main-button text-white rounded-pill fw-bold">
                        Visit Now
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Projectcard;