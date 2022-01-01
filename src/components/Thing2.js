import React from "react";
import image from "../assets/thing2.jpeg";

export default function Thing2() {
  return (
    <div className="container w-full mx-auto mt-16">
      <div className=" p-20 flex flex-wrap items-center justify-center">
        <img className="" src={image} alt=""/>

          
        <h1 className="font-weight-light text-4xl pt-10  text-center font-extrabold">Thing2 - cards or something?</h1>
      
        <div className="pl-10 pt-10 pb-20">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
