import React from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import Aboutus from "../components/Aboutus";
import Fightinghunger from "../components/Fightinghunger";
import Betherescue from "../components/Betherescue";
import Services from "../components/Services";
import Animation from "../components/Animation";
import Pageofqoute from "../components/Pageofqoute";
import Techniquesreduce from "../components/Techniquesreduce";
import Contactus from "../components/Contactus";
const Home = () => {
  return (
    <>
      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home">
            ZERO Food WASTE
          </h1>
          <p>Eat Healty, it is good for our health.</p>
          <Link className="homebtn" to="/don">
            DONATION & REGISTRATION
          </Link>
        </div>
      </section>
      <Aboutus />
      <Fightinghunger />
      <Betherescue />
      <Services />
      <Animation />
      <Pageofqoute />
      <Techniquesreduce />
      <Contactus/>
    </>
  );
};

export default Home;
