import React, { useState } from 'react'
import Main from './Main'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer/Footer'
import fssai from '../assests/MeatPics/Fssai-Logo.png'
import Mutton from '../Category/Mutton';

// images

import CatChicken from '../assests/HomePics/Chiken-category.webp'
import CatMutton from '../assests/HomePics/Mutton.webp'
import CatFish from '../assests/HomePics/Fish-category.jpg'
import CatEgg from '../assests/HomePics/eggs-category.jpg'
import CatDryfish from '../assests/HomePics/DryFish-category.jpg'
import CatPickle from '../assests/HomePics/Pickle-category.webp'
import Chicken from '../Category/Chicken';
import { Link } from 'react-router-dom';
import SeaFood from '../Category/SeaFood';
import Egg from '../Category/Egg';
import Pickle from '../Category/Pickle';
import DryFish from '../Category/DryFish';

export default function Meats() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

const [filter, setFilter] = useState("chicken")

  return (
    <div className=''>
      <div className="nav-meat">
        <Main />
      </div>
      <div className="bg-warning">
        <div className="meat-head pt-5">
          <h1 className="text-danger text-center fw-bold" style={{ letterSpacing: '3px' }}>
            OUR CATEGORIES
          </h1>
        </div>
        <div className="w-75 m-auto">
          <div className="mt-5 ">
            <Slider {...settings}>
              <Link className='text-decoration-none' onClick={() => { setFilter("chicken") }}>
                <div className='text-dark rounded'>
                  <div className='py-2 rounded-top d-flex justify-content-center align-items-center'>
                    <img src={CatChicken} alt="" className='slider-img rounded-circle' />
                  </div>
                  <div>
                    <p className='text-center slider-text fw-semibold'>Chicken</p>
                  </div>
                </div>
              </Link>
              <Link className='text-decoration-none' onClick={() => { setFilter("mutton") }}>
                <div className='text-dark rounded'>
                  <div className='py-2 rounded-top d-flex justify-content-center align-items-center'>
                    <img src={CatMutton} alt="" className='slider-img rounded-circle' />
                  </div>
                  <div>
                    <p className='text-center slider-text fw-semibold'>Mutton</p>
                  </div>
                </div>
              </Link>
              <Link className='text-decoration-none' onClick={() => { setFilter("seafood") }} >
                <div className='text-dark rounded'>
                  <div className='py-2 rounded-top d-flex justify-content-center align-items-center'>
                    <img src={CatFish} alt="" className='slider-img rounded-circle' />
                  </div>
                  <div>
                    <p className='text-center slider-text fw-semibold'>Sea Food</p>
                  </div>
                </div>
              </Link>
              <Link className='text-decoration-none' onClick={()=>{setFilter("egg")}}>
                <div className='text-dark rounded'>
                  <div className='py-2 rounded-top d-flex justify-content-center align-items-center'>
                    <img src={CatEgg} alt="" className='slider-img rounded-circle' />
                  </div>
                  <div>
                    <p className='text-center slider-text fw-semibold'>Egg</p>
                  </div>
                </div>
              </Link>
              <Link className='text-decoration-none' onClick={() => { setFilter("dryfish") }}>
                <div className='text-dark rounded'>
                  <div className='py-2 rounded-top d-flex justify-content-center align-items-center'>
                    <img src={CatDryfish} alt="" className='slider-img rounded-circle' />
                  </div>
                  <div>
                    <p className='text-center slider-text fw-semibold'>Dry Fish</p>
                  </div>
                </div>
              </Link>
              <Link className='text-decoration-none' onClick={() => { setFilter("pickle") }}>
                <div className='text-dark rounded'>
                  <div className='py-2 rounded-top d-flex justify-content-center align-items-center'>
                    <img src={CatPickle} alt="" className='slider-img rounded-circle' />
                  </div>
                  <div>
                    <p className='text-center slider-text fw-semibold'>Pickle</p>
                  </div>
                </div>
              </Link>
            </Slider>
          </div>
        </div>
      </div>
      <div>
        {
          filter === "chicken" ?
            <Chicken /> :
            filter === "mutton" ?
              <Mutton /> :
              filter === "seafood" ?
                <SeaFood /> :
                filter === "egg" ?
                  <Egg /> :
                  filter === "dryfish" ?
                    <DryFish /> :
                    filter === "pickle" && (
                      <Pickle />
                    )
        }
      </div>
      <div className="fssai-img my-5 d-flex justify-content-center align-items-center">
        <img src={fssai} alt="" height={'35px'} width={'50px'} />
      </div>
      <div className="footer-meat bg-dark">
        <Footer />
      </div>
    </div>
  )
}
