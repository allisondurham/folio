import React from "react";
import resume from "../assets/ALLISON_DURHAM.pdf";

export default function Template () {
    return (
        <div className="simple">
            <div className="container w-full mx-auto mt-16 relative">
                <div className=" p-20 flex flex-wrap items-center justify-center ">
                <div className=" flex flex-wrap "></div>
                <embed src={resume} width="800px" height="1180px" />
                {/* <p className="absolute bg-black text-white/100 top-24 md:pr-4 lg:pr-32 pl-4 lg:mr-96 md:bg-cyan-400 sm:bg-white/0 sm:text-white/0 lg:bg-red-500">Allison Durham Resume</p> */}



                </div>
            </div>
        </div>
    );
}