import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/styles.css";

// Brown Photo
// import Foto1 from "../assets/img/DSC5461.JPG";
import Foto2 from "../assets/img/DSC5472.JPG";
import Foto3 from "../assets/img/DSC5506.JPG";
// import Foto4 from "../assets/img/DSC5517.JPG";
// import Foto5 from "../assets/img/DSC5527.JPG";
import Foto6 from "../assets/img/DSC5526.JPG";

// Circular Photo
import Foto1 from "../assets/img/DSC5530.JPG";
// import Foto2 from "../assets/img/DSC5531.JPG";
// import Foto3 from "../assets/img/DSC5532.JPG";
import Foto4 from "../assets/img/DSC5563.JPG";
import Foto5 from "../assets/img/DSC5567.JPG";
// import Foto6 from "../assets/img/DSC5570.JPG";

export default function PhotoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container pb-4 pb-xl-5 pb-5">
      <Slider {...settings}>
        <img className="img-fluid img-slider" src={Foto1} />
        <img className="img-fluid img-slider" src={Foto2} />
        <img className="img-fluid img-slider" src={Foto4} />
        <img className="img-fluid img-slider" src={Foto3} />
        <img className="img-fluid img-slider" src={Foto5} />
        <img className="img-fluid img-slider" src={Foto6} />
      </Slider>
    </div>
  );
}
