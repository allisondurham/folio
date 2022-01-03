
import React, {useState} from "react";
import CarouselData from "./CarouselData"



export const Carousel = ({items}) => {
    const [current, setCurrent] = useState(0);
    const length = items.length;

    const nextPic = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevPic = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



if (!Array.isArray(items) || items.length <= 0) {
    return null;
}


    return (
        <div className="burlap">

            <div className=" container w-full mx-auto mt-16">
                <div className=" p-10 flex flex-wrap items-center justify-center">

                    <div className="carousel">

                        <svg onClick={prevPic} width="1em" height="1em" viewBox="0 0 16 16" className="left-arrow bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                        </svg>
                        <svg onClick={nextPic} width="1em" height="1em" viewBox="0 0 16 16" class="right-arrow bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                        </svg>

                            {CarouselData.map((item, index) => {
                                return (
                                    <div className={ index === current ? "item active" : "item"} key={index}>
                                        {index === current && (
                                            <img src={item.image} alt="tree image" className="image align-middle "/>
                                            
                                            )}
                                    </div>
                                    )
                                })}

                    </div>


            </div>
        </div>
        </div>
    );
}