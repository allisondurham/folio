import React from "react";
import image from "../assets/resume.png";
import resume from "../assets/ALLISON_DURHAM.pdf";

export default function Template () {
    return (
        <div className="simple">
            <div className="resume container w-full mx-auto pt-16 md:pt-0 mt-16 pb-20 relative">
                <div className=" p-4 md:p-10 lg:p-20 xl:px-32 2xl:px-52 flex flex-wrap items-center justify-center ">
                <div className=" flex flex-wrap "></div>

                {/* <a target={resume} href={resume} title="" className="mr-2 mdg:mr-24 text-cyan-600 hover:text-cyan-500 text-lg md:text-2xl hover:text-3xl bg-stone-500/50 backdrop-blur-sm rounded-full p-3 lg:px-12 mb-10" >link to pdf</a> */}
                <a href={resume} download="ALLISON_DURHAM" className=" text-cyan-600 hover:text-cyan-500 text-lg md:text-2xl hover:text-3xl bg-stone-500/50 backdrop-blur-sm rounded-full p-3 lg:px-12 mb-10">download</a>
                <img src={image}  alt="resume.png"/>









                </div>
            </div>
        </div>
    );
}