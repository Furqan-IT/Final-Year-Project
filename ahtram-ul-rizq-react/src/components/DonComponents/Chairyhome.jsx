import React from "react";
import "./Charity.css";
import { Link } from "react-router-dom";
const Chairyhome = () => {
  return (
    <>
      <section className="home">
        <div className="head">
          <h3>Charity and Donation</h3>
          <p>A man true wealth is the good he does</p>
          <Link to="/volunteer/apply">Volunteer</Link>
          <Link to="/ssignin">SignIN / SIgnUp</Link>
        </div>

        <div className="social">
          <b>SOCIAL MEDIA LINKS.</b>
        </div>

        <div className="pic1">
          <Link to="/needy/apply">Needy People Submission Form</Link>
          <br />
          <br />
          <br />

          <Link to="/donate-food">Donate Meal Pack for Needy and Poor people.</Link>
        </div>
        <div className="pic2"></div>
        <div className="pic3"></div>
      </section>
    </>
  );
};

export default Chairyhome;
