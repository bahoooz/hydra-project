import React, { Component } from "react";
import Slider from "react-slick";
import "./slider-build.css";
import ImgSlider1 from "../assets/img-slider-build-1.png";
import ImgSlider2 from "../assets/img-slider-build-2.png";
import ImgSlider3 from "../assets/img-slider-build-3.png";
import ImgSlider4 from "../assets/img-slider-build-4.png";

export default class SliderBuild extends Component {
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
          breakpoint: 1439,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1279,
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
        <Slider className="build-slider" {...settings}>
          <div className="content-slider-build">
            <img src={ImgSlider1} style={{ width: "220px" }} alt="image produit slider 1" />
            <h3>Simulation</h3>
            <div className="separation"></div>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
          <div className="content-slider-build">
            <img src={ImgSlider2} style={{ width: "220px" }} alt="image produit slider 2" />
            <h3>Education</h3>
            <div className="separation"></div>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
          <div className="content-slider-build">
            <img src={ImgSlider3} style={{ width: "220px" }} alt="image produit slider 3" />
            <h3>Self Care</h3>
            <div className="separation"></div>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
          <div className="content-slider-build">
            <img src={ImgSlider4} style={{ width: "220px" }} alt="image produit slider 4" />
            <h3>Outdoor</h3>
            <div className="separation"></div>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
        </Slider>
      </div>
    );
  }
}
