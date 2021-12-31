import React from "react";
import image from "../assets/thing2.jpeg";

export default function Thing2() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7 pl-20">
            <img
              class="img-fluid rounded mb-4 mb-lg-0 pt-20 pl-20"
              src={image}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light text-4xl pt-10 text-center font-extrabold">Thing2</h1>
            <p className="pl-10 pt-10 pb-20 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
