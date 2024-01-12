import React from "react";
import "./footer.css";
import Logo from "../assets/logo.png";
import DecoEffectMobile from "../assets/deco-effect-mobile-footer.png";
import DecoEffectTablet from "../assets/deco-effect-tablet-footer.png";
import DecoEffectDesktop from "../assets/deco-effect-desktop-footer.png";
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
  InstagramLogo,
  PinterestLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer>
      <div className="container-primary-footer">
        <a href="#">
          <img className="logo-footer" src={Logo} alt="Logo" />
        </a>
        <img
          className="deco-effect-mobile-footer"
          src={DecoEffectMobile}
          alt="décoration footer"
        />
        <img
          className="deco-effect-tablet-footer"
          src={DecoEffectTablet}
          alt="décoration footer"
        />
        <img
          className="deco-effect-desktop-footer"
          src={DecoEffectDesktop}
          alt="décoration footer"
        />
        <div className="content-nav-footer">
          <div className="separation-footer"></div>
          <ul>
            <li>
              <a href="#introduction-about">About</a>
            </li>
            <li>
              <a href="#build">Services</a>
            </li>
            <li>
              <a href="#techno-and-hw">Technologies</a>
            </li>
            <li>
              <a href="#how-we-build">How To</a>
            </li>
            <li>
              <a href="#container-form">Join Hydra</a>
            </li>
          </ul>
          <div className="separation-footer"></div>
          <ul>
            <li>
              <a href="#">F.A.Q.</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Conditions</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
          <div className="separation-footer"></div>
        </div>
        <div className="networks-hydra">
          <h4>Socialize With Hydra</h4>
          <ul>
            <li>
              <a href="">
                <FacebookLogo weight="fill" className="icon-footer" />
              </a>
            </li>
            <li>
              <a href="">
                <TwitterLogo weight="fill" className="icon-footer" />
              </a>
            </li>
            <li>
              <a href="">
                <LinkedinLogo weight="fill" className="icon-footer" />
              </a>
            </li>
            <li>
              <a href="">
                <YoutubeLogo weight="fill" className="icon-footer" />
              </a>
            </li>
            <li>
              <a href="">
                <InstagramLogo weight="bold" className="icon-footer" />
              </a>
            </li>
            <li>
              <a href="">
                <PinterestLogo weight="fill" className="icon-footer" />
              </a>
            </li>
          </ul>
          <button>Build Your World</button>
        </div>
      </div>
      <div className="container-secondary-footer">
        <div className="separation-2-footer"></div>
        <span>
          2023 © HYDRA LANDING PAGE <br /> BY ZINE. E. FALOUTI FOR DESIGN AND
          BAHOZ FOR DEVELOPMENT <br /> ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
};

export default Footer;
