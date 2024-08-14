import React from "react";
import image from "../assets/selfie.jpg";

export default function About () {
    return (
        <div className="simple">



            <div className="about p-6  md:p-28 flex flex-wrap">

                <div className=" sm:w-full md:w-1/3  mt-0 md:pr-10 md:pl-2 py-2 order-1 md:order-1">

                    <div className="bg-stone-600/50 p-6 backdrop-blur-sm shadow-xl rounded-2xl  md:float-right text-right leading-loose tracking-tight sticky mt-24 md:mt-0 md:top-16 ">

                        {/* <h1 className="font-bold py-2 ">Left column pic and links</h1> */}
                        <img className="rounded-2xl selfie shadow-xl " src={image} alt=""/>
                        <ul className="pt-4 flex flex-wrap justify-between flex-col">
                            <li><p className="text-stone-400">hi, i'm allison durham</p></li>
                            <li><p className="text-stone-400">i love to code</p></li>
                            <li><p className="text-stone-400">i'm looking for work</p></li>
                            <li><p className="text-stone-400">i'll code for you</p></li>
                            <li><p className="text-stone-400">hire me please :)</p></li>
                            <li><a href="/resume" className="text-lg hbout">resume</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-2/3 py-2 order-2 md:order-2">
                    <div className="bg-stone-600/50 backdrop-blur-sm shadow-xl p-6 rounded-2xl max-w-3xl leading-loose tracking-tight">
                        <h1 className="font-extrabold my-3">background and interests</h1>
                        <div className="text-stone-400">
                            <p className="mb-8">my background is as varied as the day is long.  from carpentry to genetics research, and vineyard work to massage therapy, i've worn many professional hats and became a valued member of every team i've been a part of.</p>
                            <p className="mb-8">i'm endlessly curious and tremendously adaptable. a self motivated problem solver with an eye for detail.  i like to know how things work and to make them work better. if there's something i dont understand, i learn it. </p>
                            <p className="mb-8">as a musician and artist, i enjoy creating, building, practicing, and trying something again and again until the piece turns out like i'd like for it to.</p>
                            <p className="mb-8">perhaps these characteristics are what drew me to coding.  </p>
                            <p className="mb-8">i also love to help people, and that is how i curated such a varied work history. most of my jobs have been helping people i know who needed an assistant. they ask me because they know i am capable, dependable, responsible, hard working, easy going, and pleasant to be around.</p>
                            <p className="mb-8">this love for helping people, and a lifelong interest in health and human anatomy, coupled with an ever-strengthening desire to guarantee that i'd work indoors in the seasonal extremes is what sparked my shift from being a reliable hired hand for friends to becoming a skilled massage therapist with the ability to help people feel better. </p>
                            <p className="mb-8">everything was going along swimmingly, and then the pandemic struck.</p>
                            <p className="mb-8">massage was declared non-essential, and without the ability to work remotely, i found myself facing unemployment for the first time.  i'd always had a job, sometimes two or three at a time. this period of unemployment necessitated that i move out of the place i'd been, and in with some friends. </p>
                            <p className="mb-8">the friends i moved in with are software engineers and developers.  at that point i'd never used a computer for more than minecraft and search engines. they directed me towards some coding games because they believed i'd enjoy it, and maybe even have a knack for it.  they were right.</p>
                            <p className="mb-8">the world eventually opened up again, i went back to work as a massage therapist, but things were still slow. so, i enrolled in a part-time full-stack coding bootcamp and learned a thing or two.</p>
                            <p className="mb-8">i absolutely love it.</p>
                            <p className="mb-8">i love that coding is like a pick your own adventure book combined with a puzzle.  i love the logic, the malleability, the limitless creative possibilities, and the fact that there is always something more to learn.</p>
                            <p className="mb-8">i love to learn.</p>
                            <p className="mb-8">presently, i'm learning react.  </p>
                            <p className="mb-8">my coding school taught html, css, javascript, python, and django to their part time co-horts.  they taught object oriented programming and used agile methodoligies. they taught us how to use the command line and use github for version control. we'd do pull requests, code reviews, and merge things back to the main branch. </p>
                            <p className="mb-8">my co-hort was fully remote and each part-time student had their own unique life schedule, so i have first hand experience with developing remotely on an asynchronous team.</p>
                            <p className="mb-8">i'm hopeful that soon i'll developing remotely for an awesome company.</p>
                            <p className="mb-8">practice makes improvement!</p>





                            {/* <p className="mb-8">Four dollar toast hella green juice heirloom. Gluten-free ugh synth skateboard seitan squid farm-to-table direct trade try-hard. Tbh vexillologist farm-to-table 90's kickstarter selfies listicle authentic, next level adaptogen chillwave. Af direct trade chambray everyday carry, post-ironic hell of messenger bag pitchfork gluten-free keytar.</p>
                            <p className="mb-8">Tote bag meggings yuccie semiotics, hexagon ennui deep v. Occupy green juice cloud bread gastropub af authentic church-key, lyft dreamcatcher. Poke chillwave vinyl, roof party twee raclette messenger bag tbh pug stumptown keffiyeh pickled hot chicken church-key listicle. Wolf sustainable copper mug shaman activated charcoal.</p>
                            <p className="mb-8">Distillery paleo coloring book, succulents kickstarter selfies pitchfork thundercats tousled narwhal fanny pack activated charcoal. Tote bag vice heirloom, hella thundercats flexitarian pork belly swag raw denim slow-carb. Kinfolk literally wayfarers cloud bread keffiyeh twee quinoa, ennui kale chips normcore kickstarter YOLO fashion axe subway tile slow-carb. Fingerstache selvage af 8-bit bespoke, marfa kickstarter chia distillery. Heirloom glossier pug normcore pok pok gochujang.</p>
                            
                            <p className="mb-8">Mustache mlkshk raclette, chartreuse coloring book bushwick art party heirloom wayfarers tilde sustainable poke meggings. Cray selvage twee, vinyl unicorn semiotics VHS kale chips portland drinking vinegar farm-to-table. XOXO tousled small batch, subway tile vexillologist austin raclette pour-over gluten-free cardigan hella pitchfork master cleanse. Prism edison bulb you probably haven't heard of them selvage letterpress banjo wayfarers waistcoat snackwave kombucha. Adaptogen banjo kombucha flannel sustainable chambray shaman glossier yuccie post-ironic 8-bit. Food truck biodiesel ugh swag freegan. Master cleanse next level hell of, YOLO cardigan vexillologist shoreditch echo park hella.</p>
                            <p className="mb-8">Neutra craft beer YOLO, gluten-free try-hard occupy knausgaard echo park pitchfork hell of meggings. Cred normcore slow-carb humblebrag, chicharrones squid kickstarter. Venmo keffiyeh artisan copper mug wayfarers schlitz ethical man braid flannel. Church-key chartreuse 3 wolf moon, ethical franzen mlkshk organic. Listicle pour-over tumblr trust fund.</p>
                            <p className="mb-8">Photo booth prism fam truffaut tumeric vegan roof party skateboard irony butcher. 90's normcore viral, cloud bread man braid helvetica poutine roof party. Meditation iceland DIY, freegan waistcoat yuccie wayfarers brooklyn. Retro unicorn freegan copper mug slow-carb plaid pickled poutine austin fashion axe next level neutra cred lo-fi truffaut. Unicorn gluten-free prism helvetica 8-bit. Asymmetrical irony disrupt, tumblr lumbersexual readymade occupy street art pitchfork. Raw denim edison bulb palo santo, chia trust fund hashtag keffiyeh.</p>
                            <p className="mb-8">Prism photo booth af thundercats shoreditch. You probably haven't heard of them cronut artisan, helvetica live-edge kogi poke aesthetic 90's hot chicken. Try-hard beard af chillwave brunch. Selvage pickled artisan church-key ennui microdosing. Farm-to-table meditation ennui quinoa paleo air plant mlkshk raw denim fanny pack. Flexitarian pop-up freegan hoodie irony vape, authentic synth schlitz gastropub chartreuse beard.</p>
                            <p className="mb-8">Truffaut ethical quinoa direct trade synth ennui vice. Squid irony woke coloring book. Mlkshk hexagon disrupt put a bird on it selfies vice try-hard franzen viral. Cred dreamcatcher four loko next level, listicle try-hard PBR&B chartreuse cloud bread lo-fi unicorn.</p>
                            <p className="mb-8">Tbh fanny pack mlkshk cronut. Keytar +1 air plant pinterest, before they sold out cloud bread tumblr jean shorts flexitarian seitan readymade. Edison bulb woke art party, leggings hell of shaman marfa meh poutine. Single-origin coffee seitan kickstarter, cliche snackwave kitsch fixie portland williamsburg VHS blog chambray adaptogen cloud bread next level. Distillery kogi taiyaki, deep v fixie franzen irony pop-up waistcoat skateboard. Dreamcatcher mixtape meggings vaporware four loko activated charcoal wayfarers 8-bit hell of.</p>
                            <p className="mb-8">Ramps copper mug lo-fi blue bottle biodiesel cloud bread flannel raw denim palo santo tofu edison bulb tote bag. Williamsburg readymade seitan heirloom, craft beer kickstarter enamel pin DIY tote bag franzen la croix church-key street art lyft. Affogato pinterest celiac, fashion axe jean shorts succulents craft beer tbh enamel pin marfa flannel williamsburg tote bag truffaut. Coloring book aesthetic mixtape neutra schlitz irony, activated charcoal raw denim fam live-edge umami tumblr lyft. Williamsburg locavore cardigan, jean shorts neutra 90's try-hard. Next level vaporware thundercats food truck tote bag photo booth.</p>
                            <p className="mb-8">Dummy text? More like dummy thicc text, amirite?</p>
                            <p className="mb-8">Hipster Ipsum</p> */}
                        </div>
                    </div>
                </div>

                <div className=" hbout w-full md:w-1/3 py-2 md:pr-10 md:mt-4 md:pt-11 md:pt-20  md:bottom-0 order-3 md:order-3">
                    <div className=" bg-stone-600/50 backdrop-blur-sm shadow-xl p-6 rounded-2xl md:float-right md:text-right leading-loose tracking-tight md:mb-6">
                        <h1 className="  font-bold my-3 ">get in touch</h1>

                        <ul className="grid grid-cols-3  justify-between flex-row ">

                        <a href="mailto:allison.durham@gmail.com" className="p-3">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" className="w-6" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" className="hover:fill-cyan-600" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/allisondurham/" className="p-3 ">
                            <svg width="2em" height="2em" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" className="hover:fill-cyan-600" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://github.com/allisondurham/" className="p-3">
                            <svg width="2em" height="2em" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="currentColor" className="hover:fill-cyan-600" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                </path>
                            </svg>
                        </a>
                    <a href="https://www.facebook.com/allison.m.durham" className="p-3 ">
                            <svg idth="2em" height="2em" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" className="hover:fill-cyan-600" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/amdurham522" className="p-3 " >
                            <svg idth="2em" height="2em" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" className="hover:fill-cyan-600" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                </path>
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/amdurham522/" className="p-3 ">
                            <svg idth="2em" height="2em" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" className="hover:fill-cyan-600" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path>
                            </svg>
                        </a>
                        </ul>
                    </div>
                </div>



                <div className="w-full py-2 md:w-2/3 order-4 md:order-4">
                    <div className="bg-stone-600/50 backdrop-blur-sm shadow-xl p-6 mb-12 md:mb-0 md:mt-12 rounded-2xl max-w-3xl leading-loose tracking-tight">
                        <h1 className="font-bold my-3 ">final blurb</h1>

                        <p className="mb-8 text-stone-400">i built this site with react, which i'd never used before, but wanted to try it out and needed to build a place for my portfolio anyhow. i think this site turned out okay! it's always fun to learn something new, and if you hire me, i'll learn whatevers in your stack!</p>
                    </div>
                </div>



            </div>
        </div>
    );
}
