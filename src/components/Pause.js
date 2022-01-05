
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
            <div className=" m-28  z-20 flex flex-wrap items-center justify-center">
            <img className="image z-30 shadow-2xl mt-20  rounded-lg border-4 border-yellow-800 max-w-3xl h-auto  2xl:max-w-6xl align-middle" src={image} alt="" />
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
            </div>
        

 


    );
}