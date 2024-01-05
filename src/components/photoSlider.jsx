import React, { Component } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/css/photo-slider.css'

import Foto1 from "../assets/img/20230624_0010_01.jpg"
import Foto2 from "../assets/img/20230624_0003_01.jpg"
import Foto3 from "../assets/img/20230624_0005_01.jpg"
import Foto4 from "../assets/img/20230624_0006_01.jpg"
import Foto5 from "../assets/img/20230624_0008_01.jpg"
import Foto6 from "../assets/img/20230624_0009_01.jpg"

export default function PhotoSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 5,
        //         slidesToScroll: 1
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 1
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]
    };
      return (
        <div className="container pb-4 pb-xl-5 pb-5">
          {/* <div className='col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6'> */}
            <Slider {...settings}>
              {/* <div className='col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12'> */}
                <img className="img-fluid" style={{width:"10px"}} src={Foto1} />
                <img className="img-fluid" style={{width:"10px"}} src={Foto2} />
                <img className="img-fluid" style={{width:"10px"}} src={Foto3} />
                <img className="img-fluid" style={{width:"10px"}} src={Foto4} />
                <img className="img-fluid" style={{width:"10px"}} src={Foto5} />
                <img className="img-fluid" style={{width:"10px"}} src={Foto6} />
              {/* </div> */}
            </Slider>
          {/* </div> */}
        </div>
      );
}