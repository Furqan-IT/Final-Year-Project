import React from 'react'
import "./Intro.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <section className="second">
        <div className="tem2">
          <h3>WELCOME TO THE FOODCYCLE VOLUNTEER PORTAL</h3>
          <p>
            Welcome to our volunteer portal where you can sign up to sessions,
            find volunteer resources and update your information.
            <b>
              {" "}
              If you have any issues on the site, please email
              Ahtramulrizq@gmail.com.
            </b>{" "}
          </p>
        </div>
        <div className="tem3">
          <h3>SURVEY FORMS</h3>
          <Link to="/needy/apply">Needy People Survey Form</Link>
          <br />

          <Link to="/donate-food">
            Donation Points Survey Form
          </Link>
        </div>
      </section>
    </>
  );
}

export default Intro