import React from "react";

export default function Navbar({ fixed }) {
    // const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className=" nav bg-gradient-to-r from-yellow-700 to-yellow-400 p-1 mt-0 fixed w-full z-10 top-0 ">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
                        <a className="text-white no-underline hover:text-cyan hover:no-underline" href="/">
                            <span className="text-4xl text-yellow-900 pl-2 hover:text-cyan-900" id="nav1">
                                <i  className="em shadow-yellow-800 em-grinning"></i> NAME OF SITE!
                            </span>
                        </a>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/">Home</a>
                            </li>
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/About">About</a>
                            </li>
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Thing1">Thing1</a>
                            </li>
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Thing2">Thing2</a>
                            </li>
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Blog">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}