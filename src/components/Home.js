
import React from "react";
import image from "./blog/blogAssets/hammock.png"
// import image from "../assets/simple.jpg"
import gif from "../assets/tunnel.gif"
import still from "../assets/tunnel2.png"







export default function Home() {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
    const details = document.querySelector(".object-and-details > details");
    
    if (mediaQuery.matches) {
        details.removeAttribute("open");
    }



    return (
        <div id="background" className="gif 2xl:py-24 homepage mt-16">

        
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
        
        <div classname="container  mx-28 p-28">

        <div className=" p-28   mx-64 flex items-center justify-center">
            

                <img className="image  shadow-2xl mt-32 mb-10 2xl:mt-24 2xl:mb-10 rounded-lg border-4 border-yellow-800/60 max-w-xl h-auto  2xl:max-w-3xl align-middle" src={image} alt="" />

                <div className=" flex space-x-2 pt-10 2xl:pt-24  2xl:space-x-12 top-2 2xl:ml-52  ml-60 2xl:pl-20 absolute mt-52 " >

                <h1 className="words inline 2xl:text-4xl text-3xl pt-2 2xl:pt-4 z-20 pl-10 pr-4">flashy homepage</h1>
                <p id="btn" className=" inline pause toggle z-10 ml-72 pr-4 z-20">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="rounded-full shadow pause mr-10 2xl:mr-0 2xl:h-16 2xl:w-16  z-10 bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </p>
                </div>
            </div>
        </div>
        </div>






    );
}