import React from "react";
import "./header.css";
import ImgHeader from "../assets/img-header.png";
import DecoEffect from "../assets/deco-effect.png";
import DecoEffectDesktop from "../assets/deco-effect-desktop.png";
import DecoEffectDesktop2 from "../assets/deco-effect-header-desktop.png";
import { ArrowRight } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header id="header">
      <div className="header-img-container">
        <img className="img-header" src={ImgHeader} alt="image produit" />
        <img className="deco-img" src={DecoEffect} alt="image de décoration" />
        <img
          className="deco-img-desktop"
          src={DecoEffectDesktop}
          alt="image de décoration"
        />
      </div>
      <div className="header-content">
        <div className="left-header-content">
          <img className="deco-img-desktop-2" src={DecoEffectDesktop2} alt="image de décoration" />
          <h1>
            <span className="gradient-effect">Dive</span> Into The Depths <br />
            of <span className="gradient-effect">Virtual Reality</span>
          </h1>
          <p className="header-desktop-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
          <div className="button-arrow">
            <button className="header-btn">Build Your World</button>
            <ArrowRight className="arrow-btn" />
          </div>
          <p className="header-mobile-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
