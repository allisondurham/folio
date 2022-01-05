
import React from "react";
import { Outlet } from "react-router-dom";
import './blog.css';

export default function Blog() {
  return (
    <div className="home w-full mx-auto mt-16">
      <div class="container w-full mx-auto">
        <h1 className="text-center mt-5">Blog page container top</h1>
        <h1 className="text-center mt-5">I abandoned this and followed a tutorial for something awesome</h1>
        <a href="https://blog-next-js-sigma.vercel.app/" alt="better blog link">

        <p className=" shadow-2xl cursor-pointer text-center text-xl text-yellow-900 mt-5 bg-lime-700 rounded mx-96 py-3">Something Awesome</p>
        </a>

        <Outlet />
      </div>
    </div>
  );
}

