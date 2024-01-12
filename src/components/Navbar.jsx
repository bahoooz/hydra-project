import React, { useContext } from "react";
import { BurgerMenuContext } from './BurgerMenuContext';
import "./navbar.css";
import Logo from "../assets/logo-with-text.png";

const Navbar = () => {
  const { setBurgerMenuOpen } = useContext(BurgerMenuContext);

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <ul>
        <li className="logo">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </li>

        <ul className="container-links-nav">
          <li className="desktop">
            <a href="#introduction-about">About</a>
          </li>
          <li className="desktop">
            <a href="#build">Services</a>
          </li>
          <li className="desktop">
            <a href="#techno-and-hw">Technologies</a>
          </li>
          <li className="desktop">
            <a href="#how-we-build">How To</a>
          </li>
        </ul>

        <li className="button-container-nav">
          <button>Join Hydra</button>
          <button>
            <a href="#container-form">Contact Us</a>
          </button>
        </li>

        <li className="burger-menu" onClick={handleBurgerMenuClick}>
          <div className="rod-top rod"></div>
          <div className="rod-middle rod"></div>
          <div className="rod-bottom rod"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
