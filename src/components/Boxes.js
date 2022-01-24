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
import box11 from "../assets/thumbnails/llama.png";
import box12 from "../assets/thumbnails/brick.png";
import box13 from "../assets/thumbnails/folio.png";

export default function Boxes() {
    return (
        <div className="simple">

        <div className="container w-full mx-auto mt-16 ">


            <section className="boxes py-20 grid grid-cols-3 justify-center">

                <div className="card bg-stone-600/50 ">
                    <img className="image" src={box13} alt=""/>
                    <div className="p-5">
                        <a href="https://www.allisondurham.dev/">
                            <h1 className=" text-xl font-extrabold ">this website</h1>
                        </a>
                        <p>homemade portfolio with self-taught react and tailwind. responsive, shiny, and the gif on the homepage will pause when clicked. hosted with aws.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://www.allisondurham.dev/">
                                <svg className="bg-cyan-600  rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50 ">
                    <img className="image" src={box1} alt=""/>
                    <div className="p-5">
                        <a href="https://blog-next-js-sigma.vercel.app/">
                            <h1 className=" text-xl font-extrabold ">next.js blog</h1>
                        </a>
                        <p>responsive blog made with react, next.js, graphql, graphcms and tailwind. graphcms api.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://blog-next-js-sigma.vercel.app/">
                                <svg className="bg-cyan-600  rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box11} alt=""/>
                    <div className="p-5">
                        <a href="https://main.d3xjpzj0upw45.amplifyapp.com/">
                            <h1 className=" text-xl font-extrabold">llamas</h1>
                        </a>
                        <p>pocket tanks style game, but with llamas! and vanilla javascript! hosted with aws.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://main.d3xjpzj0upw45.amplifyapp.com/">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box2} alt=""/>
                    <div className="p-5">
                        <a href="https://stormy-coast-33083.herokuapp.com/">
                            <h1 className=" text-xl font-extrabold">artTracker</h1>
                        </a>
                        <p>final project for code school. app for finding public art in downtown durham. python, django, django REST framework, mapbox. deployed with heroku.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://stormy-coast-33083.herokuapp.com/">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box12} alt=""/>
                    <div className="p-5">
                        <a href="https://main.d163z1au1m83f4.amplifyapp.com/">
                            <h1 className=" text-xl font-extrabold">brick</h1>
                        </a>
                        <p>pseudo-classic brickbreaker game. vanilla javascript. first javascript game. not mobile friendly.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://main.d163z1au1m83f4.amplifyapp.com/">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box8} alt=""/>
                    <div className="p-5">
                        <a href="/flip">
                            <h1 className=" text-xl font-extrabold">flip</h1>
                        </a>
                        <p>a flip card to show off some art i've recently made. part of this react app.  also tailwind.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="/flip">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box9} alt=""/>
                    <div className="p-5">
                        <a href="/carousel">
                            <h1 className=" text-xl font-extrabold">carousel</h1>
                        </a>
                        <p>i'd never made a photo carousel before, so i did. hosted here. it's not awesome but it exists. theres always more to learn! </p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="/carousel">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box3} alt=""/>
                    <div className="p-5">
                        <a href="http://allisondurham.pythonanywhere.com/">
                            <h1 className=" text-xl font-extrabold">djangoGirls</h1>
                        </a>
                        <p>my first hosted project.  simple blog built with django, following djangoGirls tutorial.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="http://allisondurham.pythonanywhere.com/">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box10} alt=""/>
                    <div className="p-5">
                        <a href="/calculator">
                            <h1 className=" text-xl font-extrabold">calculator</h1>
                        </a>
                        <p>code school project.  made a calculator. works pretty good too.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="/calculator">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box5} alt=""/>
                    <div className="p-5">
                    <a href="https://replit.com/@AllisonDurham/turtle-game#main.py">
                        <h1 className=" text-xl font-extrabold">turtle game</h1>
                    </a>
                        <p>silly little python game.  turn based turtle racing.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://replit.com/@AllisonDurham/turtle-game#main.py">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box4} alt=""/>
                    <div className="p-5">
                        <a href="https://earsketch.gatech.edu/earsketch2/?sharing=TshpLEOWEowz30twX69L0A">
                            <h1 className=" text-xl font-extrabold">earSketch</h1>
                        </a>
                        <p>fun little song i made with earSketch's digital audio workstation that creates songs by coding them in python.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://earsketch.gatech.edu/earsketch2/?sharing=TshpLEOWEowz30twX69L0A">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box7} alt=""/>
                    <div className="p-5">
                        <a href="https://scratch.mit.edu/projects/454614781/fullscreen/">
                            <h1 className=" text-xl font-extrabold ">animation</h1>
                        </a>
                        <p>made before code school with scratch.  light hearted little video made with a coding for kids tool.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://scratch.mit.edu/projects/454614781/fullscreen/">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="card bg-stone-600/50  ">
                    <img className="image" src={box6} alt=""/>
                    <div className="p-5">
                        <a href="https://deserted-funky-beach.glitch.me/">
                            <h1 className=" text-xl font-extrabold">hello world</h1>
                        </a>
                        <p>my very first webpage. simple html & css.  its a bio made with glitch.  i've come a long way.</p>
                    </div>
                    <div className="middle">
                        <div>
                            <a href="https://deserted-funky-beach.glitch.me/">
                                <svg className="bg-cyan-600 rounded-xl" fill="#a8a29e" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>








            </section>

        </div>
        </div>
    );
}



