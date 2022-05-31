import React from "react";
import { ArrowOnButtonLeftGrey, ArrowOnButtonRightGrey } from '../../services/svg.service';

function Arrows({prevSlide, nextSlide}){
    return (
    <div className="arrows">
        {/* <LeftArrowOnCircle className="prev" onClick={prevSlide}/>
        <RightArrowOnCircle className="next" onClick={nextSlide}/> */}
           <span className="prev" onClick={prevSlide}>&#60;</span>
        <span className="next" onClick={nextSlide}>&#62;</span>
        {/* <span className="prev" onClick={prevSlide}><ArrowOnButtonLeftGrey/></span>
        <span className="next" onClick={nextSlide}><ArrowOnButtonRightGrey/></span> */}
        {/* <span className="prev" onClick={prevSlide}>&#10094;</span>
        <span className="next" onClick={nextSlide}>&#10095;</span> */}
    </div>
    )
}

export default Arrows