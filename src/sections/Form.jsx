import React from "react";
import "./form.css";

const Form = () => {
  return (
      <form id="container-form">
        <h2>Join Hydra</h2>
        <div className="separation-form"></div>
        <h3>
          Let's Build <br /> Your VR Experience
        </h3>
        <div className="container-inputs-form">
          <div className="inputs-desktop-container">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="inputs-desktop-container">
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Tell Us Something..."></textarea>
        </div>
        <button type="submit">Send to Hydra</button>
      </form>
  );
};

export default Form;
