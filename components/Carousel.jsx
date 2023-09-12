"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

const Carouseld = () => {
  const images = [{
    id: 1,
    src: "https://www.hostgator.com/blog/wp-content/uploads/2021/03/How-to-Make-a-Website-Quickly.jpg",
    alt: "Image 1"
  },
  {
    id: 2,
    src: "https://www.hostgator.com/blog/wp-content/uploads/2021/03/How-to-Make-a-Website-Quickly.jpg",
    alt: "Image 2 "
  },
  {
    id: 3,
    src: "https://www.hostgator.com/blog/wp-content/uploads/2021/03/How-to-Make-a-Website-Quickly.jpg",

    alt: "Image 3"
  }
  ];
  const settings = {
    dots: true,
    autoFocus: false,
    emulateTouch: true,
    showArrows: true,
    showStatus: false,
    transitionTime: 700,
    useKeyboardArrows: true,

  }
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className="carousel-container">
        <Carousel {...settings} className='mt-6 '>
          {images.map((item) => (
            <div key={item.id}>
              <img className='md:w-1/2 w-full' src={item.src} alt={item.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Carouseld;