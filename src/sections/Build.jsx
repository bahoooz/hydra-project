import React from "react";
import SliderBuild from "../components/SliderBuild";
import "./build.css";
import SliderBuild2 from "../components/SliderBuild2";
import { ArrowRight } from "@phosphor-icons/react";
const Build = () => {
  return (
    <section id="build">
      <h2 className="mobile-title">
        Why Build <br /> <span>With Hydra</span>
      </h2>
      <div className="desktop-about-content">
        <div className="left-content-desktop-about">
          <h2 className="desktop-title">
            Why build <br />
            <span>
              With Hydra <ArrowRight className="arrow-icon-about" />
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
      <SliderBuild />
      <div id="techno-and-hw">
        <h3>
          Technologies & Hardware <br /> <span>Used by Hydra VR.</span>
        </h3>
      </div>
      <SliderBuild2 />
    </section>
  );
};

export default Build;