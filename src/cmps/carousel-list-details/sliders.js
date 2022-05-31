import React, { useEffect, useState } from "react";
import  SliderContent  from "./sliderContent";
import  imageSlider  from "./imageSlider";
import  Arrows  from "./arrows";
import  Dots  from "./dots";
// import '../assets/slder.scss'

const len = imageSlider.length - 1

function Sliders(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1)
        }, 5000)
        return () => clearInterval(interval)
    },[activeIndex])
    return (
        // <div className="img-container">
            <div className="slider-container" >
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
                />
            <Dots activeIndex={activeIndex} imageSlider={imageSlider} onClick={(activeIndex) => setActiveIndex}/>
        </div>
    )
}


export default Sliders