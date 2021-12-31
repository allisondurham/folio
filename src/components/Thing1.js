
import React from "react";
import image from "../assets/thing1.jpeg";

export default function Thing1() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7 pl-20">
            <img
              className="img-fluid rounded mb-4 mb-lg-0 pl-20 pt-20"
              src={image}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-4xl pt-10 pb-10 text-center font-extrabold">Thing1</h1>
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
