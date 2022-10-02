import React from "react";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from "../sanityClient";
const GallaryImage = (props) => {
    const post = props.data;
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
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">
                        {post.excerpt}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default GallaryImage;