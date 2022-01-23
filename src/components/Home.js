
import React from "react";





export default function Home() {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
    const details = document.querySelector(".object-and-details > details");
    
    if (mediaQuery.matches) {
        details.removeAttribute("open");
    }



    return (
        <div id="" className="home  mt-16  relative">
            <input type="checkbox" loading="lazy"/>

            <div className="absolute z=50 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-700 words mt-72 md:mt-80 lg:mt-96 2xl:mt-96 pt-14 pb-0 lg:pb-12 ">

                <p className="text-yellow-700/90">software engineer</p>
                <p className="ml-4 text-yellow-600/60">problem solver</p>
                <p className="ml-8 text-cyan-700/60">adventurer</p>
                <p className="ml-12 text-yellow-700/60">musician</p>
                <p className="ml-16 text-yellow-600/50">artist</p>
                <p className="ml-20 text-cyan-700/50">pal</p>

            </div>
        </div>
    );
}