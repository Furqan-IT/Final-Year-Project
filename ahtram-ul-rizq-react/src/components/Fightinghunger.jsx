import React from 'react'
import "./Fightinghunger.css";
import { Link } from "react-router-dom";

const Fightinghunger = () => {
  return (
    <>
      <section id="info">
        <div className="item">
          <h2>FIGHTING HUNGER ACROSS PAKISTAN</h2>
          <p>
            Move For Hunger is a national non-profit organization that mobilizes
            transportation networks to deliver surplus food to communities in
            need.
          </p>
          <Link className="btn2 center" href="/">
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Fightinghunger