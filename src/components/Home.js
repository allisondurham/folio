
import React from "react";
import image from "./blog/blogAssets/hammock.png"
import gif from "../assets/tunnel.gif"
import still from "../assets/tunnel2.png"







export default function Home() {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
    const details = document.querySelector(".object-and-details > details");
    
    if (mediaQuery.matches) {
        details.removeAttribute("open");
    }



    return (
        <div id="background" className="gif homepage mt-16">

        
            {/* <div class="object-and-details"> */}
            {/* <div className=" p-28  flex flex-wrap items-center justify-center"> */}
      
                {/* <img src={still} className="still" alt="still" loading="lazy"/>
                    <details open> */}
                     
                        {/* <!-- added role=button to summary to resolve iOS funkiness --> */}
                        {/* <summary role="button" aria-label="static image"></summary>
                        <div class="object-and-details1">
                        <img src={gif} className="gif mt-16" alt="gif" loading="lazy"/>
                        </div>
                </details>
            </div> */}
        
        {/* <div classname="container m-28 p-28"> */}

        <div className=" p-28  flex flex-wrap items-center justify-center">
            

                <img className="image  shadow-2xl mt-20  rounded-lg border-4 border-yellow-800 max-w-3xl h-auto  2xl:max-w-6xl align-middle" src={image} alt="" />
                <h1 className="words mt-44 2xl:mt-48 2xl:text-5xl text-4xl pt-10 z-10">flashy homepage</h1>
                <p id="btn" className="pause toggle z-10 pt-20">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className=" rounded-full shadow pause mr-10 2xl:mr-0 mt-52 2xl:h-20 2xl:w-20 2xl:mt-52  z-10 bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </p>
            </div>
        </div>






    );
}