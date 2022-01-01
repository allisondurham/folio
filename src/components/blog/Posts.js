import React from "react";
import { Link } from "react-router-dom";
import './blog.css';
import image from "./blogAssets/hammock.png";

export default function Posts() {
    return (
        <div className="home w-full mx-auto">
            <div class="container w-full mx-auto p-20">
                <Link to="/blog/this-is-a-post-title">
                    <div class="row align-items-center my-5">
                        <div class="">
                            <img class="shadow rounded-lg border-none max-w-full h-auto align-middle" src={image} alt="" />
                        </div>
                        <div class="">
                            <h1 class="font-extrabold py-10 text-xl hover:text-cyan-600">This is a post title
                            </h1>
                            <p className="pb-10">
                            Some words that dont connect with anything, not a preview of blog post.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

