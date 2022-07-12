import React, { useState, useEffect } from "react"
import SliderData from "../components/SliderData.js"
import SliderContent from "./SliderContent.jsx"
import Arrows from "./Arrows.jsx"
import Dots from "./Dots.jsx"



const len = SliderData.length -1

function ImageSlider(slides) {

    const [current, setCurrent] = useState(0)
    const length = slides.length
   

    // Funcionalidade do Slider

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    console.log(current);

    // Efeito carrousel

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent(current === len ? 0 : current + 1);
        }, 5000);
        return () => clearInterval(interval);
      }, [current]);


    // Prevenir loops infinitos

    if(Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (<>
        <div className="slider-container">
            <SliderContent 
                activeIndex={current}
                displayImage={SliderData}
            />
            <Arrows 
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
            <Dots 
                activeIndex={current}
                sliderImage={SliderData}
                onclick={(current) => setCurrent(current)}
            />
        </div>

            </>

            )
}

export default ImageSlider