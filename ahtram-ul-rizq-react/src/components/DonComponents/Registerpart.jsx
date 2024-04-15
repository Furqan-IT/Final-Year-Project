import React from 'react'
import "./Registerpart.css";
import { Link } from "react-router-dom";

const Registerpart = () => {
  return (
    <>
      <section className="page3">
        <div className="inner3">
          <div className="item3">
            <u>
              {" "}
              <h3>DONATION FORM REQUEST</h3>{" "}
            </u>
            <h2>FOR RESTAURENTS & HOTELS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos qui quo totam minus delectus aut facilis alias iste
              incidunt enim!
            </p>
            <Link to="/donorfrm">FORM LINK</Link>
          </div>
          <div className="item3">
            <u>
              {" "}
              <h3>NEEDY FORM REQUEST</h3>{" "}
            </u>
            <h2>NEEDIES PEOPLE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos qui quo totam minus delectus aut facilis alias iste
              incidunt enim!
            </p>
            <Link to="/needform">FORM LINK</Link>
          </div>
          <div className="item3">
            <u>
              {" "}
              <h3>VOLUNTEER FORM</h3>{" "}
            </u>
            <h2>REGISTRATION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos qui quo totam minus delectus aut facilis alias iste
              incidunt enim!
            </p>
            <Link to="/Volform">FORM LINK</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registerpart