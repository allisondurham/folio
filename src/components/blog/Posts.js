import React from "react";
import { Link } from "react-router-dom";
import './blog.css';
import image from "./blogAssets/hammock.png";

export default function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0 p-10"
                src={image}
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-extrabold p-10 text-xl hover:text-cyan-600">This is a post title</h1>
              <p className="pl-10 pb-10">
                Some words that dont connect with anything, not a preview of blog post.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

