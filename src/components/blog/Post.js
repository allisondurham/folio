
import React, { useEffect } from "react";
import { useParams } from "react-router";
import './blog.css';

export default function Post() {
    let { postSlug } = useParams();

    useEffect(() => {
    // Fetch post using the postSlug
    }, [postSlug]);

    return (
        <div className="home w-full mx-auto">
            <div class="container w-full mx-auto p-20">
                <h1 className="pb-5 text-4xl">This is a Post Title</h1>
                <h6 className="pb-10 text-xl font-extrabold">The post slug is, {postSlug}</h6>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
                </p>
                <br></br>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
                </p>
                <br></br>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
                </p>
                <br></br>
            </div>
        </div>
    );
}