import React, { Component } from "react";
import Slider from "react-slick";
import "./slider-header.css";
import { MapPin, PhoneCall, EnvelopeSimple } from "@phosphor-icons/react";

export default class SliderHeader extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 904,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="container-header-slider">
        <Slider className="header-slider" {...settings}>
          <div className="content-slider">
            <MapPin weight="regular" className="icon-slider-header" />
            <div className="desktop-text-header-slider">
              <h3>Pay Us a Visit</h3>
              <p>
                Union St, Seattle, <br /> United States
              </p>
            </div>
            <div className="separation-desktop"></div>
            <h3 className="mobile-text-header-slider">
              Union St, Seattle, WA 98101 <br /> United States
            </h3>
          </div>

          <div className="content-slider">
            <PhoneCall weight="regular" className="icon-slider-header" />
            <div className="desktop-text-header-slider">
              <h3>Give Us a Call</h3>
              <p>(110) 1111-1010</p>
            </div>
            <div className="separation-desktop"></div>

            <h3 className="mobile-text-header-slider">(110) 1111-1010</h3>
          </div>

          <div className="content-slider">
            <EnvelopeSimple weight="regular" className="icon-slider-header" />
            <div className="desktop-text-header-slider">
              <h3>Send Us a Message</h3>
              <p>Contact@HydraVTech.com</p>
            </div>
            <h3 className="mobile-text-header-slider">
              Contact@HydraVTech.com
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
