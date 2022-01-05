
import React from "react";
import { Outlet } from "react-router-dom";
import './blog.css';

export default function Blog() {
  return (
    <div className="home w-full simple mx-auto mt-14">
      <div class="container w-full mx-auto">
        {/* <h1 className="text-center mt-5">Blog page container top</h1> */}
        <h1 className="text-center pt-8">I abandoned this and followed a tutorial for something awesome</h1>
        <a className="" href="https://blog-next-js-sigma.vercel.app/" alt="better blog link">

        <p className=" shadow-2xl cursor-pointer text-center text-xl hover:text-yellow-500 text-yellow-900 mt-5 bg-cyan-600/50 shadow-xl rounded-full mx-96 py-3">Something Awesome</p>
        </a>

        <Outlet />
      </div>
    </div>
  );
}

