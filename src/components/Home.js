
import React from "react";
import image from "./blog/blogAssets/hammock.png"
import image2 from "../assets/simple.jpg"
import bg from "../assets/bg.jpg"
import gif from "../assets/tunnel.gif"
import still from "../assets/tunnel2.png"







export default function Home() {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
    const details = document.querySelector(".object-and-details > details");
    
    if (mediaQuery.matches) {
        details.removeAttribute("open");
    }



    return (
        <div id="" className="home  mt-16  relative">
            <input type="checkbox" loading="lazy"/>
            
            <div className="absolute z=50 text:xs md:text-2xl lg:text-4xl xl:text-5xl text-yellow-700 words ">

                <p className="text-yellow-700/90">software engineer</p>
                <p className="ml-4 text-yellow-600/60">problem solver</p>
                <p className="ml-8 text-cyan-700/60">adventurer</p>
                <p className="ml-12 text-yellow-700/60">musician</p>
                <p className="ml-16 text-yellow-600/50">artist</p>
                <p className="ml-20 text-cyan-700/50">fun</p>

            </div>
        </div>
    );
}