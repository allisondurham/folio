import React from "react";

export default function Navbar({ fixed }) {
    // const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav class="bg-gradient-to-r from-yellow-700 to-yellow-400 p-2 mt-0 fixed w-full z-10 top-0">
                <div class="container mx-auto flex flex-wrap items-center">
                    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                        <a class="text-white no-underline hover:text-cyan hover:no-underline" href="/">
                            <span class="text-2xl text-yellow-900 pl-2 hover:text-cyan-900" id="nav1">
                                <i  class="em em-grinning"></i> NAME OF SITE!
                            </span>
                        </a>
                    </div>
                    <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li class="mr-3">
                                <a id="nav" class="inline-block py-2 font-semibold px-2 text-yellow-900 no-underline" href="/">Home</a>
                            </li>
                            <li class="mr-3">
                                <a id="nav" class="inline-block font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Thing1">Thing1</a>
                            </li>
                            <li class="mr-3">
                                <a id="nav" class="inline-block font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Thing2">Thing2</a>
                            </li>
                            <li class="mr-3">
                                <a id="nav" class="inline-block font-semibold text-yellow-900 no-underline hover:text-cyan-600 hover:text-underline py-2 px-2" href="/Blog">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}