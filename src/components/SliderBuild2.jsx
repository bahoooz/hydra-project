import React, { Component } from "react";
import Slider from "react-slick";
import "./slider-build-2.css";
import Logo1 from "../assets/logo1-slider-build.png";
import Logo2 from "../assets/logo2-slider-build.png";
import Logo3 from "../assets/logo3-slider-build.png";
import Logo4 from "../assets/logo4-slider-build.png";

export default class SliderBuild2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 904,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider className="build-slider-2" {...settings}>
          <div>
            <img style={{width: "150px"}} src={Logo1} alt="Logo Unreal Engine" />
          </div>
          <div>
          <img src={Logo2} alt="Logo Unity" />
          </div>
          <div>
          <img src={Logo3} alt="Logo Oculus" />
          </div>
          <div>
          <img src={Logo4} alt="Logo Vive" />
          </div>
        </Slider>
      </div>
    );
  }
}