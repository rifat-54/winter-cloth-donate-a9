import React from 'react';
import slider1 from '../assets/IMG_2906.webp'
import slider2 from '../assets/images (2).jpg'
import slider3 from '../assets/images (3).jpg'
import slider4 from '../assets/WhatsApp-Image-2022-01-01-at-11.50.12-AM-e1641183829683.jpeg'

const Slider = () => {
    return (
        <div>

            <h2 className='text-center font-bold text-4xl mt-16'>Keep Someone Warm This Winter.</h2>
            <p className='text-gray-500 text-center w-10/12 mx-auto mt-5'>1 in 5 families struggles to afford warm clothing. Help us change that We connect generous donors with families in need, one coat at a time."Turning your kindness into warmth for those who need it most.</p>
        
        <div className="carousel h-[250px] lg:h-[400px] mt-16 ">
       
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider1}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider2}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider3}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slider4}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Slider;