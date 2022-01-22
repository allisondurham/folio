import React from "react";

export default function Navbar({ fixed }) {
    // const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className=" nav  p-2 mt-0 fixed w-full  top-0 z-10">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
                        <a className="text-white no-underline hover:text-cyan hover:no-underline" href="/">
                            <span className="text-4xl text-cyan-700 pl-2 hover:text-cyan-900" id="nav1">
                                <i  className="em em-grinning"></i> allison durham
                            </span>
                        </a>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold  no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/">home</a>
                            </li>
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold  no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/About">about</a>
                            </li>
                            {/* <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Thing1">Thing1</a>
                            </li>
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Thing2">Thing2</a>
                            </li> */}
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold  no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Boxes">projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}