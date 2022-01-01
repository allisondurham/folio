
import React from "react";
import image from "./blog/blogAssets/hammock.png"


export default function Home() {
    return (
        <div className="container w-full mx-auto mt-16">

            <div className="p-20 flex flex-wrap items-center justify-center">



                <img className="shadow rounded-lg border-none max-w-full h-auto align-middle" src={image} alt="" />

                <h1 className="text-4xl pt-10 ">Home Content</h1>


            </div>
        </div>

    );
}