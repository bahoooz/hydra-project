import React from "react";
import "./how-we-build.css";
import SliderHowWeBuild from "../components/SliderHowWeBuild";
import { ArrowRight } from "@phosphor-icons/react";

const HowWeBuild = () => {
  return (
    <section id="how-we-build">
      <div className="container-hwb-content">
        <div className="text-how-we-build">
          <h2>
            How We Build <br />
            <span>
              With Hydra VR ? <ArrowRight className="arrow-icon-hwb" />
            </span>
          </h2>
          <p className="mobile-desc">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
          <div className="container-desc-desktop-hwb">
            <p className="desktop-desc">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat
            </p>
            <p className="desktop-desc">
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
              mauris commodo
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
      </div>
      <SliderHowWeBuild />
    </section>
  );
};

export default HowWeBuild;
