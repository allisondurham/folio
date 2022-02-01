
import React from "react";





export default function Home() {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
    const details = document.querySelector(".object-and-details > details");
    
    if (mediaQuery.matches) {
        details.removeAttribute("open");
    }



    return (
        <div id="" className="home  mt-0  relative">
            <input type="checkbox" loading="lazy"/>

            <div className="words absolute z=50 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl pt-14 px-0 py-10 lg:py-16">
            {/* <div className="absolute words"> */}
            <a href="/projects">
                <p className="text-yellow-700/90 hover:text-yellow-600">software engineer</p>
            </a>
                <p className="ml-4 text-yellow-600/60">problem solver</p>
                <p className="ml-8 text-cyan-500/40">adventurer</p>
               
               <a href="https://main.d2fc793b4oh906.amplifyapp.com/">
                <p className="ml-12 text-yellow-700/60 hover:text-yellow-600">musician</p>
               </a>
                <p className="ml-16 text-yellow-600/50">artist</p>
                <p className="ml-20 text-cyan-500/30">pal</p>

            </div>
        </div>
    );
}