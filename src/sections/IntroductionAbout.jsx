import React from "react";
import "./introduction-about.css";
import ImgIntroductionAbout from "../assets/img-introduction.png";
import DecoEffect2Desktop from "../assets/deco-effect-2-desktop.png"
import { ArrowRight } from "@phosphor-icons/react";

const IntroductionAbout = () => {
  return (
    <section id="introduction-about">
      <div className="desktop-introduction-content">
        <div className="left-content-desktop-introduction">
          <h2 className="desktop-title">
            Introduction <br />
            <span>
              To Hydra VR <ArrowRight className="arrow-icon" />
            </span>
          </h2>
        </div>
        <div className="container-desktop-desc">
          <p className="desktop-desc">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat
          </p>
          <p className="desktop-desc">
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
            commodo
          </p>
          <p className="desktop-desc">
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
            tellus. Ornare
          </p>
          <p className="desktop-desc">
            lectus sit amet est placerat in.Lectus magna fringilla urna
            porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className="desktop-about-container">
        <img className="img-about-container-desktop" src={ImgIntroductionAbout} alt="image produit 2" />
        <div className="right-content-about">
          <h2 className="desktop-title">
            About <span>Hydra VR</span>
          </h2>
          <div className="container-desktop-desc">
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus
            </p>
            <p>
              urna neque viverra justo. Vivamus at augue eget arcu dictum.
              Ultrices gravida
            </p>
            <p>
              dictum fusce ut placerat orci. Aenean et tortor at risus viverra
              adipiscing at in.
            </p>
            <p>
              Mattis aliquam faucibus purus in massa. Est placerat in egestas
              erat imperdiet
            </p>
            <p>
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam
            </p>
            <p>
              etiam erat velit scelerisque in dictum non consectetur a. Laoreet
              sit amet
            </p>
            <p>
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
              nulla pha
            </p>
            <p>
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
              sollicitudi n tempor.
            </p>
          </div>
          <button className="about-btn">Let's get in touch</button>
        </div>
        <img className="deco-img" src={DecoEffect2Desktop} alt="image de décoration" />
      </div>

      <h2 className="mobile-title">
        Introduction <br /> <span>To Hydra VR</span>
      </h2>
      <img
        className="mobile-img"
        src={ImgIntroductionAbout}
        alt="image produit 2"
      />
      <p className="mobile-desc">
        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
        rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
        Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
        risus viverra adipisci ng at in. Mattis aliquam faucibus purus in massa.
        Est placerat in egestas erat imperdiet sed. Consequat sem per viverra
        nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque
        in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros
        donec ac odio tempor orci dapibus. Sem nulla pharetra diam sit amet nisl
        suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.
      </p>
      <button className="intro-btn mobile-btn">Let's Get In Touch</button>
    </section>
  );
};

export default IntroductionAbout;
