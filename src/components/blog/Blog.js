
import React from "react";
import { Outlet } from "react-router-dom";
import './blog.css';

export default function Blog() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Thing3 Blog page</h1>
        <Outlet />
      </div>
    </div>
  );
}

