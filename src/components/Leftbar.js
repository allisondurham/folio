import React, { useState } from 'react'

export default function Leftbar() {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <>
        {!isOpen ?
            (
            <button className="fixed z-30 flex items-center cursor-pointer left-10 top-20" onClick={() => setIsOpen(!isOpen)}>
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
            <button className="text-3xl text-yellow-400  fixed top-20 left-10 z-50"
            onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
                )
            }
                <div className={`top-0 z-40 mt-16 left-0 fixed overflow-scroll bg-gradient-to-br from-yellow-800/95 to-cyan-700/95  w-[35vw] h-full p-3
                ${isOpen ? 'translate-x-0': '-translate-x-full'}
                ease-in-out duration-300`}>
                    <h2 className="text-2xl text-yellow-400 pt-20 pl-24 font-extrabold">LEFTBAR!</h2>

                <div className="col-span-1 text-yellow-500 pl-24 ">
                    <div className="uppercase font-semibold mb-2 flex justify-center md:justify-start">slide to the left
                    </div>
                    <div className="">
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12 pt-8 mb-2 ">
                            <a href="/Calculator" className="">Calculator</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="https://en.wikipedia.org/wiki/Muenster_cheese" className="">Muenster</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="https://en.wikipedia.org/wiki/Cheddar_cheese" className="">Cheddar</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="https://en.wikipedia.org/wiki/Gouda_cheese" className="">Gouda</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="https://en.wikipedia.org/wiki/Brie" className="">Brie</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="https://en.wikipedia.org/wiki/Muenster_cheese" className="">Muenster</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="https://en.wikipedia.org/wiki/Cheddar_cheese" className="">Cheddar</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 text-2xl font-semibold pl-12  mb-2">
                            <a href="/Oldest" className="">Oldest Code</a>
                        </p>
                    </div>
                </div>
            </div>
                
        </>
    )
}