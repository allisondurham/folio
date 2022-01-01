
import React from "react";
import image from "./blog/blogAssets/hammock.png"
import gif from "../assets/tunnel.gif"
import still from "../assets/tunnel2.png"






function ToggleBG () {
    const isMoving = true;

    return(
        <div
            style={{
                backgroundImage: isMoving ? gif : still,
            }}>
        </div>
    )
}









export default function Home() {
    return (
        <div className="homepage mt-16 bg"
        style={{backgroundImage: gif}}>
        


            <div className="p-20 flex flex-wrap items-center justify-center">
                <img className="image shadow mt-20 rounded-lg border-4 border-yellow-800 max-w-3xl h-auto align-middle" src={image} alt="" />
                <h1 className="words text-4xl pt-10 z-10">flashy homepage</h1>
                <button className="toggle" onClick={ToggleBG()}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className=" pause bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>
            </div>


        </div>
    );
}