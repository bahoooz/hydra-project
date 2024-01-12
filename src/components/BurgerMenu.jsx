import React, {useContext} from "react";
import { BurgerMenuContext } from "./BurgerMenuContext";
import "./burger-menu.css";
import Logo from "../assets/logo-with-text.png";
import Cross from "../assets/cross-btn.png";

const BurgerMenu = () => {
  const { isBurgerMenuOpen, setBurgerMenuOpen } = useContext(BurgerMenuContext);
  const top = isBurgerMenuOpen ? '0' : '-50%';

  const handleCloseClick = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <div id="burger-menu" style={{ top }}>
      <div className="top-burger-menu">
        <img className="logo-burger-menu" src={Logo} alt="logo hydra" />
        <img className="cross-btn" src={Cross} alt="bouton croix" onClick={handleCloseClick} />
      </div>
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
          <a href="how-we-build">How To</a>
        </li>
      </ul>
      <div className="container-btn-burger-menu">
        <button className="btn-1-burger-menu">Contact Us</button>
        <button className="btn-2-burger-menu">Join Hydra</button>
      </div>
    </div>
  );
};

export default BurgerMenu;
