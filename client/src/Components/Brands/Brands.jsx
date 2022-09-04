import React from 'react'
import { Layout } from './barnds.styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Brands() {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  
  };
  return (
    <Layout>
      <div className="layout-headline">
        <h1>პოპულარული ბრენდები</h1>
      </div>
      <Slider className='slider-wrapper' {...settings}>
      <div className='slider-circle slick-slide'>
              <div className="circle-hero">
                <img src={""} alt="" />
              </div>
              <div className="circle-description">
                <h5>{}</h5>
              </div>
          </div>
      </Slider>
    </Layout>
  )
}

export default Brands
