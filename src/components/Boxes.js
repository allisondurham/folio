import React from "react";
import box1 from "../assets/thumbnails/nextjsblog.png";
import box2 from "../assets/thumbnails/arttracker.png";
import box3 from "../assets/thumbnails/djangogirls.png";
import box4 from "../assets/thumbnails/earsketch.png";
import box5 from "../assets/thumbnails/turtle.png";
import box6 from "../assets/thumbnails/hello_world.png";
import box7 from "../assets/thumbnails/animation.png";
import box8 from "../assets/thumbnails/flip.png";
import box9 from "../assets/thumbnails/carousel.png";
import box10 from "../assets/thumbnails/calc.png";
import box11 from "../assets/box5.jpg";
import box12 from "../assets/box6.jpg";

export default function Home() {
    return (
        <div className="simple">

        <div className="container w-full mx-auto mt-16 ">


            <section className="boxes py-20 grid grid-cols-3 justify-center">
                <div className="card bg-stone-600/50 ">
                    <img className="image" src={box1} alt=""/>
                    <div className="p-5">
                        <h1 className=" text-xl font-extrabold ">next.js blog</h1>
                        <p>responsive blog made with react, next.js, graphql, graphcms and tailwind.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://blog-next-js-sigma.vercel.app/">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box2} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">artTracker</h1>
                        <p>final project for code school. app for finding public art in downtown durham. python, django, django REST framework, mapbox. deployed with heroku.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://stormy-coast-33083.herokuapp.com/">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box3} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">djangoGirls</h1>
                        <p>my first hosted project.  simple blog built with django, following djangoGirls tutorial.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="http://allisondurham.pythonanywhere.com/">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg></a>
                        </div>
                    </div>
                </div>


                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box4} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">earSketch</h1>
                        <p>fun little song i made with earSketch's digital audio workstation that creates songs by coding them in python.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl ">
                                <a href="https://earsketch.gatech.edu/earsketch2/?sharing=TshpLEOWEowz30twX69L0A">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box5} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">turtle game</h1>
                        <p>silly little python game.  turn based turtle racing.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl p-15">
                                <a href="https://replit.com/@AllisonDurham/turtle-game#main.py">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box6} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">hello world</h1>
                        <p>my very first webpage. simple html & css.  its a bio made with glitch.  i've come a long way.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl p-15">
                                <a href="https://deserted-funky-beach.glitch.me/">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box7} alt=""/>
                    <div className="p-5">
                        <h1 className=" text-xl font-extrabold ">animation</h1>
                        <p>made before code school with scratch.  light hearted little video made with a coding for kids tool.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://scratch.mit.edu/projects/454614781/fullscreen/">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box8} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">flip</h1>
                        <p>a flip card to show off some art i've recently made</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="/Flip">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box9} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">carousel</h1>
                        <p>i'd never made a photo carousel before, so i did. </p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="/Carousel">
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg></a>
                        </div>
                    </div>
                </div>


                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box10} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">calculator</h1>
                        <p>code school project.  made a calculator. works pretty good too.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <h1 className="article text-center bg-yellow-500 text-xl ">
                                <a href="/Calculator">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box11} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">llamas</h1>
                        <p>pocket tanks style game, but with llamas!</p>
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
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box12} alt=""/>
                    <div className="p-5">
                    <h1 className=" text-xl font-extrabold">brick</h1>
                        <p>classic brickbreaker game.  first javascript game.</p>
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



