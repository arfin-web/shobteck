import React, { useState, useEffect } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import { sanityClient } from "../sanityClient";
import Teacher from '../Components/Teacher';
const Teachers = ({ posts }) => {
    const [mappedPosts, setMappedPosts] = useState([]);
    useEffect(() => {
        if (posts.length) {
            // const imageBuilder = imageUrlBuilder(sanityClient);
            setMappedPosts(
                posts.map((post) => {
                    return {
                        ...post,
                        // mainImage: imageBuilder
                        //   .image(post.mainImage)
                        //   .width(450)
                        //   .height(500),
                    };
                }));
        } else {
            setMappedPosts([]);
        }
    }, [posts]);
    return (
        <div className="container">
            <h1 className="my-5 fw-bold text-success text-center">Our Respectable Teachers</h1>
            <div className="row g-5">
                {mappedPosts &&
                    mappedPosts.length &&
                    mappedPosts.map((post, index) => (
                        <Teacher data={post} key={index} />
                    ))}
            </div>
        </div>
    );
};
export const getServerSideProps = async (context) => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const data = await fetch(url).then((res) => res.json());
    const posts = data.result;
    if (!posts || !posts.length === 0) {
        return {
            props: {
                posts: [],
            },
        };
    } else {
        return {
            props: {
                posts,
            },
        };
    }
};
export default Teachers;