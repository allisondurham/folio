
import React from "react";
import image2 from "../assets/drawing.jpg"
import image3 from "../assets/painting.png"

export default function Flip() {
    return (
        <div className="container w-full mx-auto mt-16">

            <div className="p-20 flex flex-wrap items-center justify-center">


                <div class="container flip w-full flex justify-around z-20">

                    <div class="card p-5">

                        <div class="item front-side">
                            <img className="shadow rounded-lg border-none max-w-full h-auto align-middle" src={image3} alt="" />
                        </div>
                        <div class="item back-side">
                            <img className="shadow rounded-lg border-none max-w-full h-auto align-middle" src={image2} alt="" />
                        </div>
                    </div>
                </div>


                <h1 className="text-4xl pt-10 "></h1>


            </div>
        </div>

    );
}