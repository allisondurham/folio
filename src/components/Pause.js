
import React from "react";
import image from "./blog/blogAssets/hammock.png"
import gif from "../assets/tunnel.gif"
import still from "../assets/tunnel2.png"







export default function Pause() {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
    const details = document.querySelector(".object-and-details > details");
    
    if (mediaQuery.matches) {
        details.removeAttribute("open");
    }



    return (
        <div  className=" stopStart"
        style={{backgroundImage: still}}
        >

            <div className=" position-fixed flex flex-wrap items-center justify-center">
            <div className=" m-28 z-10 flex flex-wrap items-center justify-center">
            <img className="image  shadow-2xl mt-32 mb-10 2xl:mt-24 2xl:mb-10 rounded-lg border-4 border-yellow-800/60 max-w-xl h-auto  2xl:max-w-3xl align-middle" src={image} alt="" />
            </div>
            </div>
      
                {/* <img 
                    src={still} 
                    className="still" 
                    alt="still" 
                    loading="lazy"
                    /> */}
                    
                <details open background-image={still}>
                    <summary role="button" className="butt" aria-label="static image"></summary>
                    <div class="object-and-details1">
                    <img src={gif} className="gif " alt="gif" loading="lazy"/>
                    </div>
                </details>



                {/* <details>
                    <summary className="absolute butt z-30">
                        <svg width="5em" height="5em" viewBox="0 0 16 16" className="rounded-full shadow pause mt-20 mr-10 2xl:mr-0 2xl:h-20 2xl:w-20  z-10 bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </summary>
                </details> */}
            </div>
        

 


    );
}