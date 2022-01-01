import React from "react";
import box1 from "../assets/box1.jpg";
import box2 from "../assets/box2.jpg";
import box3 from "../assets/box3.jpg";
import box4 from "../assets/box4.jpg";
import box5 from "../assets/box5.jpg";
import box6 from "../assets/box6.jpg";

export default function Home() {
    return (
        <div className="container w-full mx-auto mt-16">


            <section class="boxes py-20 justify-center">
                <div class="card">
                    <img class="image" src={box1} alt=""/>
                    <div class="p-5">
                        <h1 class=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div class="middle">
                        <div>
                            <a href="https://www.youtube.com/watch?v=cmzx49na6Aw&ab_channel=JanaeGiggles">
                                <i class="fab fa-youtube text-6xl" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="image" src={box2} alt=""/>
                    <div class="p-5">
                    <h1 class=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div class="middle">
                        <div>
                            <a href="https://www.youtube.com/watch?v=f6mJ7e5YmnE&ab_channel=NationalGeographic">
                                <i class="fab fa-youtube text-6xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="image" src={box5} alt=""/>
                    <div class="p-5">
                    <h1 class=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div class="middle">
                        <div>
                            <a href="https://www.youtube.com/watch?v=vdrn4ouZRvQ&ab_channel=Minecraft">
                                <i class="fab fa-youtube text-6xl"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <img class="image" src={box3} alt=""/>
                    <div class="p-5">
                    <h1 class=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div class="middle">
                        <div>
                            <h1 class="article text-center bg-yellow-500 text-xl pl-15">
                                <a href="https://reactjs.org/">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="image" src={box4} alt=""/>
                    <div class="p-5">
                    <h1 class=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div class="middle">
                        <div>
                            <h1 class="article text-center bg-yellow-500 text-xl p-15">
                                <a href="https://tailwindcss.com/docs/installation">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="image" src={box6} alt=""/>
                    <div class="p-5">
                    <h1 class=" text-xl font-extrabold">Hipster Ipsum</h1>
                        <p>Copper mug direct trade venmo raclette brunch pinterest. Prism trust fund shaman authentic chambray aesthetic roof party ennui taiyaki coloring book selvage palo santo.</p>
                    </div>
                    <div class="middle">
                        <div>
                            <h1 class="article text-center bg-yellow-500 text-xl p-15">
                                <a href="https://en.wikipedia.org/wiki/Chocolate">
                                    &nbsp; Learn More &nbsp;
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}




// import image from "./blog/blogAssets/hammock.png"
{/* <img className="shadow rounded-lg border-none max-w-full h-auto align-middle" src={image} alt="" /> */}


            // <div className="p-20 flex flex-wrap items-center justify-center">
            //     <h1 className="text-4xl pt-10 ">Boxes</h1>
            // </div>