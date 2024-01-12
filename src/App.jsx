import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./sections/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroductionAbout from "./sections/IntroductionAbout";
import Build from "./sections/Build";
import HowWeBuild from "./sections/HowWeBuild";
import SliderHeader from "./components/SliderHeader";
import Form from "./sections/Form";
import Footer from "./sections/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { BurgerMenuContext } from "./components/BurgerMenuContext";

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  return (
    <>
      <BurgerMenuContext.Provider
        value={{ isBurgerMenuOpen, setBurgerMenuOpen }}
      >
        <BurgerMenu />
        <Navbar />
        <Header />
        <SliderHeader />
        <IntroductionAbout />
        <Build />
        <HowWeBuild />
        <Form />
        <Footer />
      </BurgerMenuContext.Provider>
    </>
  );
}

export default App;
