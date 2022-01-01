
import React from "react";
import { Outlet } from "react-router-dom";
import './blog.css';

export default function Blog() {
  return (
    <div className="home w-full mx-auto mt-16">
      <div class="container w-full mx-auto">
        <h1 className="text-center mt-5">Thing3 Blog page container top</h1>
        <Outlet />
      </div>
    </div>
  );
}

