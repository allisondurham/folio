import React from "react";
// import image from "../assets/pick.png";
import song from "../assets/soundClip.mp3"

export default function Meh () {
    return (
        <div className="simple mt-16">
            <div className=" w-full mx-auto mt-16">
                <div className=" p-20  items-center justify-center">

                {/* <img className="" src={image} alt=""/> */}

<div className="grid grid-cols-4 gap-6 mt-20">
<p className=" p-10 bg-lime-900/50 mb-32 rounded-2xl">future page of meh or yeh, idea for voting on stuff </p>

<p className=" p-12 bg-yellow-700/50 rounded-full py-24">Click on Play button...</p>
<p className="p-10 bg-lime-700/50 rounded-2xl mt-40 py-8">(Tech House Vibes by Alejandro Magaria)</p>
    <div className="bg-cyan-700/50 py-20 rounded-full">
    <audio controls >
        <source src={song} type="audio/mpeg"/>
    </audio>
    </div>
</div>


                </div>
            </div>
        </div>
    );
}