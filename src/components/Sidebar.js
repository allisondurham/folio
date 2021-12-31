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
                    >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </button>
        ) : (
            <button className="text-xl text-yellow-400 fixed top-20 right-10 z-10"
            onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
                )
            }
                <div className={`top-0 right-0 fixed bg-gradient-to-br from-cyan-700/95 to-yellow-800/95 w-[35vw] h-full p-3
                ${isOpen ? 'translate-x-0': 'translate-x-full'}
                ease-in-out duration-300`}>
                    <h2 className="text-2xl text-yellow-500 pt-20 pl-5 font-extrabold">SIDEBAR!</h2>

        <div class="col-span-1 text-yellow-500">
        {/* <div class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        </div> */}
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-8 mb-4">
          <a href="https://en.wikipedia.org/wiki/Brie" class="">Brie</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-4 mb-4">
          <a href="https://en.wikipedia.org/wiki/Muenster_cheese" class="">Muenster</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-4 mb-4">
          <a href="https://en.wikipedia.org/wiki/Cheddar_cheese" class="">Cheddar</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-5 mb-4">
          <a href="https://en.wikipedia.org/wiki/Gouda_cheese" class="">Gouda</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-4 mb-4">
          <a href="https://en.wikipedia.org/wiki/Brie" class="">Brie</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-4 mb-4">
          <a href="https://en.wikipedia.org/wiki/Muenster_cheese" class="">Muenster</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-4 mb-4">
          <a href="https://en.wikipedia.org/wiki/Cheddar_cheese" class="">Cheddar</a>
        </p>
        <p class="hover:text-yellow-700 text-2xl font-extrabold pl-12 pt-4 mb-4">
          <a href="https://en.wikipedia.org/wiki/Gouda_cheese" class="">Gouda</a>
        </p>
      </div>
                </div>
                
        </>
    )
}