import React from 'react'
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="food">
        <h2>SERVICES</h2>
        <div className="food-container container">
          <div className="food-type vegetable">
            <div className="img-container">
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/618/862/original/donate-hand-drawn-concept-of-charity-and-donation-hands-give-and-share-love-to-people-hands-gesture-on-doodle-style-illustration-vector.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>Donation</h3>
                <Link
                  to="/donate-food"
                  className="btn btn-primary"
                  target="blank"
                >
                  <pre>learn more </pre>
                </Link>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img
                src="https://st5.depositphotos.com/4177785/65926/v/450/depositphotos_659269528-stock-illustration-build-community-blue-gradient-concept.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>Community build</h3>
                <Link
                  to="/volunteer/apply"
                  className="btn btn-primary"
                  target="blank"
                >
                  learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img
                src="https://play-lh.googleusercontent.com/6EiNBnMq1ApxIxlC-8ARBifVCG6C-Ib18BjPbhxLmhLk4Sa3_r1iIUrBy0yBSqZEiw"
                alt="error"
              />
              <div className="img-content">
                <h3>ChatBot</h3>
                <Link
                  to="/chatpage"
                  className="btn btn-primary"
                >
                  <pre>learn more </pre>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services