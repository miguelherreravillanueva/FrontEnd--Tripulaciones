import React from 'react'
import { Carousel } from "antd";
import "./Carousel.css"

const CarouselHome = () => {
    return (
        <div>
            <Carousel autoplay className="carousel">
                <div className="ft1" />
                <div className="ft2" />
                <div className="ft3" />
                <div className="ft4" />
                <div className="ft5" />
                <div className="ft6" />
              </Carousel>
        </div>
    )
}

export default CarouselHome