import React from "react";
import box1 from "../assets/box1.jpg";
import box2 from "../assets/box2.jpg";
import box3 from "../assets/box3.jpg";
import box4 from "../assets/box4.jpg";
import box5 from "../assets/box5.jpg";
import box6 from "../assets/box6.jpg";

export default function Home() {
    return (
        <div className="simple">

        <div className="container w-full mx-auto mt-16 ">


            <section className="boxes py-20 grid grid-cols-3 justify-center">
                <div className="card bg-stone-600/50 backdrop-blur-sm">
                    <img className="image" src={box1} alt=""/>
                    <div className="p-5">
                        <h1 className=" text-xl font-extrabold ">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki  coloring book selvage palo santo.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://www.youtube.com/watch?v=cmzx49na6Aw&ab_channel=JanaeGiggles">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50 backdrop-blur-sm">
                    <img className="image" src={box2} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://www.youtube.com/watch?v=f6mJ7e5YmnE&ab_channel=NationalGeographic">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50 backdrop-blur-sm">
                    <img className="image" src={box5} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://www.youtube.com/watch?v=vdrn4ouZRvQ&ab_channel=Minecraft">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg></a>
                        </div>
                    </div>
                </div>


                <div className="card bg-stone-600/50 backdrop-blur-sm">
                    <img className="image" src={box3} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl ">
                                <a href="https://reactjs.org/">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50 backdrop-blur-sm">
                    <img className="image" src={box4} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl p-15">
                                <a href="https://tailwindcss.com/docs/installation">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50 backdrop-blur-sm">
                    <img className="image" src={box6} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl p-15">
                                <a href="https://en.wikipedia.org/wiki/Chocolate">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        </div>
    );
}



