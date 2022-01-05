import React, { useState } from 'react'

export default function Sidebar() {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <>
        {!isOpen ?
            (
            <button className="fixed z-30 flex items-center cursor-pointer right-10 top-20" onClick={() => setIsOpen(!isOpen)}>
                <svg
                    onClick={() => setIsOpen(!isOpen)}
                    
                    fill="#a16207"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                    className="hover:fill-cyan-600"
                    
                    >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </button>
        ) : (
            <button className="text-3xl text-yellow-400  fixed top-20 right-10 z-50"
            onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
                )
            }
                <div className={`right-bar top-1 mt-14 right-0 shadow-xl z-40 rounded-lg fixed overflow-scroll bg-gradient-to-br from-cyan-700/95 to-yellow-800/95 w-[35vw] h-full p-3
                ${isOpen ? 'translate-x-0': 'translate-x-full'}
                ease-in-out duration-300`}>
                    <h2 className="text-2xl text-yellow-400 pt-20 pl-5 font-extrabold">sidebar!</h2>

                <div className="col-span-1 text-yellow-500">
                    <div className="  mb-2 flex justify-center pl-5 md:justify-start">stuff on the right - internal
                    </div>
                    <div className="pl-20 text-xl 2xl:text-2xl">

                        <p id="side" className="hover:text-yellow-700 pt-8 mb-2">
                        <a href="/Flip">flip</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-2">
                            <a href="/Boxes" className="">boxes</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-2">
                            <a href="/Carousel" className="">carousel</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-2">
                            <a href="/Flex" className="">flex</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-2">
                            <a href="/Pause" className="">pause</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700  mb-2">
                            <a href="/Meh" className="">meh or yeh?</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700   mb-2">
                            <a href="/Brick" className="">brick - currently down</a>
                        </p>

                        <p id="side" className="hover:text-yellow-700 mb-2 ">
                            <a href="/Calculator" className="">calculator</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700  mb-2">
                            <a href="/Oldest" className="">oldest code</a>
                        </p>
                    </div>
                </div>
            </div>
                
        </>
    )
}