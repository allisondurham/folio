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
                <div className={`right-bar top-1 mt-16 bottom-12  right-0 shadow-xl z-40 rounded-lg fixed overflow-scroll bg-gradient-to-br from-cyan-700/95 to-yellow-800/95 w-[35vw]  p-3
                ${isOpen ? 'translate-x-0': 'translate-x-full'}
                ease-in-out duration-300`}>
                    <h2 className="text-2xl text-yellow-400 pt-20 pl-5 font-extrabold">s i d e b a r !</h2>

                <div className="col-span-1 text-yellow-500">
                    <div className="  mb-4 flex justify-center pl-5 md:justify-start">s t u f f &nbsp; o n &nbsp; t h e &nbsp; r i g h t &nbsp;-&nbsp; i n t e r n a l
                    </div>
                    <div className="pl-20 text-xl 2xl:text-2xl">

                        <p id="side" className="hover:text-yellow-700 pt-8 mb-4">
                        <a href="/Flip">f l i p</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-4">
                            <a href="/Boxes" className="">b o x e s</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-4">
                            <a href="/Carousel" className="">c a r o u s e l</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-4">
                            <a href="/Flex" className="">f l e x</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700 mb-4">
                            <a href="/Pause" className="">p a u s e</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700  mb-4">
                            <a href="/Meh" className="">m e h &nbsp; o r &nbsp; y e h ?</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700   mb-4">
                            <a href="/Brick" className="">b r i c k &nbsp;-&nbsp; c u r r e n t l y &nbsp; d o w n</a>
                        </p>

                        <p id="side" className="hover:text-yellow-700 mb-4 ">
                            <a href="/Calculator" className="">c a l c u l a t o r</a>
                        </p>
                        <p id="side" className="hover:text-yellow-700  mb-4">
                            <a href="/Oldest" className="">o l d e s t &nbsp; c o d e</a>
                        </p>
                    </div>
                </div>
            </div>
                
        </>
    )
}