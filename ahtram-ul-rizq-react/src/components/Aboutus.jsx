import React from "react";
import "./Aboutus.css";
const Aboutus = () => {
  return (
    <>
      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">About Us</p>
            <h2> The goal of this project</h2>
            <p>
              In Pakistan, food waste management is a critical concern. It
              evokes empathyand determination to implement effectivesystems that
              minimize waste, promotesustainability,and ensure equitable access
              to food. Through collaboration and innovation, we strive to
              transform the food waste landscape, valuing everymorsel and
              maximizing its potential.
            </p>
          </div>
          <div className="about-img">
            {/* <!-- <img src="/pic/aa.jpg" alt="food" /> --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
