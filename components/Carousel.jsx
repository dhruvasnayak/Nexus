"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

const Carouseld = () => {
  const images = [{
    id: 1,
    src: "/images/events/unsplash_-HIiNFXcbtQ.png",
    alt: "Image 1"
  },
  {
    id: 2,
    src: "/images/events/unsplash_fT49QnFucQ8.png",
    alt: "Image 2 "
  },
  {
    id: 3,
    src: "/images/events/unsplash_ioJBsYQ-pPM.png",

    alt: "Image 3"
  },
  {
    id: 4,
    src: "/images/events/unsplash_XtUd5SiX464.png",

    alt: "Image 4"
  },
  {
    id: 5,
    src: "/images/events/unsplash_Wa9ilX9XYOI.png",

    alt: "Image 5"
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
    interval:1300,
  }
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className="carousel-container">
        <Carousel {...settings} className='mt-6 rounded'>
          {images.map((item) => (
            <div key={item.id}>
              <img className='rounded-2xl' src={item.src} alt={item.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Carouseld;