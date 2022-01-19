import React from "react";
import { Link } from "react-router-dom";
import './blog.css';
import image from "./blogAssets/hammock.png";

export default function Posts() {
    return (
        <div className="home w-full mx-auto p-20 ">
            <div class="container w-full mx-auto px-20 pb-20">
                <Link to="/blog/this-is-a-post-title">
                    <div class="row align-items-center my-5">
                        <div class="">
                            <img class="shadow rounded-lg border-none max-w-full h-auto align-middle" src={image} alt="" />
                        </div>
                        <div class="bg-cyan-600/30 rounded-lg shadow-xl py-8 my-8">
                            <h1 class="font-extrabold pl-10 py-4 text-xl hover:text-cyan-600 bg-lime-700/20 ml-8 mr-96 rounded-xl">This is a post title
                            </h1>
                            <p className="pl-20 pt-4 pb-10">
                            Some words that dont connect with anything, especially not a preview of blog post.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

