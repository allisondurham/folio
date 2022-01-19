import React from "react";
import image from "../assets/box2.jpg";

export default function About () {
    return (
        <div className="simple">



            <div className="about p-6 sm:p-10 md:p-28 flex flex-wrap">

                <div className=" w-full w-1/3 md:pr-10 pl-2 order-3 md:order-1">

                    <div className="bg-stone-900/80 p-6 shadow-xl rounded-2xl max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">

                        {/* <h1 className="font-bold py-2 ">Left column pic and links</h1> */}
                        <img className="rounded-2xl" src={image} alt=""/>
                        <ul className="pt-4 flex flex-wrap justify-between flex-col">
                            <li><a href="" className="hbout">super cool interesting link</a></li>
                            <li><a href="" className="hbout">probably very helpful and worthwhile link</a></li>
                            <li><a href="" className="hbout">someone might click on this one day link</a></li>
                            <li><a href="" className="hbout">another link</a></li>
                        </ul>
                        <a href="" className="hbout normal font-bold hover:font-bold">more...</a>
                    </div>
                </div>

                <div className="w-full w-2/3 order-1 md:order-2">
                    <div className="bg-stone-900/80 shadow-xl p-6 rounded-2xl max-w-3xl leading-loose tracking-tight">
                        <h1 className="font-extrabold my-3">Right Column</h1>
                        <div className="text-yellow-900">
                            <p className="mb-8">Four dollar toast hella green juice heirloom. Gluten-free ugh synth skateboard seitan squid farm-to-table direct trade try-hard. Tbh vexillologist farm-to-table 90's kickstarter selfies listicle authentic, next level adaptogen chillwave. Af direct trade chambray everyday carry, post-ironic hell of messenger bag pitchfork gluten-free keytar.</p>
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
                            <p className="mb-8">Hipster Ipsum</p>
                        </div>
                    </div>
                </div>

                <div className="w-full  w-1/3 md:pr-10 mt-4 pt-10 md:pt-20  md:bottom-0 order-4 md:order-3">
                    <div className=" bg-stone-900/80 shadow-xl p-6 rounded-2xl md:float-right md:text-right leading-loose tracking-tight mb-6">
                        <h1 className="  font-bold my-3 ">Get In Touch</h1>

                        <ul className="grid grid-cols-3 mb-6 justify-between flex-row ">
                            <li><a href="" className="hbout mx-2 ">Twitter</a></li>
                            <li><a href="" className="hbout mx-2 ">Instagram</a></li>
                            <li><a href="" className="hbout mx-2 ">Social</a></li>
                            <li><a href="" className="hbout mx-2 ">Media</a></li>
                            <li><a href="" className="hbout mx-2 ">Github</a></li>
                            <li><a href="" className="hbout mx-2 ">Link</a></li>
                        </ul>
                    </div>
                </div>



                <div className="w-full w-2/3 order-2 md:order-4">
                    <div className="bg-stone-900/80 shadow-xl p-6 mt-24 rounded-2xl max-w-3xl leading-loose tracking-tight">
                        <h1 className="font-bold my-3 ">Final Blurb</h1>

                        <p className="mb-8 text-yellow-900">Typewriter mlkshk la croix, unicorn poutine before they sold out coloring book vaporware +1 PBR&B tumblr iceland hoodie poke semiotics. Irony whatever before they sold out umami green juice.</p>
                    </div>
                </div>



            </div>
        </div>
    );
}
