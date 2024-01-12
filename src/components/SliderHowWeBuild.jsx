import React, { Component } from "react";
import Slider from "react-slick";
import "./slider-how-we-build.css";
import DecoEffectHwb from "../assets/deco-effect-hwb.png";
import { ArrowRight } from "@phosphor-icons/react";

export default class SliderHowWeBuild extends Component {
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
            dots: true,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 904,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container-slider-how-we-build">
        <img
          className="img-slider-hwb"
          src={DecoEffectHwb}
          alt="Decoration How We Build"
        />
        <Slider className="slider-how-we-build" {...settings}>
          <div className="content-slider-how-we-build">
            <div>
              <span>01</span>
            </div>
            <p>
              <ArrowRight className="arrow-slider-icon-hwb" /> 3D Conception <br /> &
              Design
            </p>
          </div>
          <div className="content-slider-how-we-build">
            <div>
              <span>02</span>
            </div>
            <p>
              <ArrowRight className="arrow-slider-icon-hwb" /> Interaction <br />
              Design
            </p>
          </div>
          <div className="content-slider-how-we-build">
            <div>
              <span>03</span>
            </div>
            <p>
              <ArrowRight className="arrow-slider-icon-hwb" /> VR World <br /> User
              Testing
            </p>
          </div>
          <div className="content-slider-how-we-build">
            <div>
              <span>04</span>
            </div>
            <p>
              <ArrowRight className="arrow-slider-icon-hwb" /> Hydra VR <br /> Deploy
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
