import React from 'react'
import "./Betherescue.css";
import { Link } from "react-router-dom";

const Betherescue = () => {
  return (
    <>
      <section className="firstvolun">
        <div className="firstv1">
          <h1>BE THE RESCUE.</h1>
          <h3>
            <pre>FIGHT WITH US FOOD WASTE. HELP NEEDIES.</pre>
          </h3>
          <div className="ac">
            <Link to="/SignIN/index.html">LEARN TO REDUCE FOOD WASTE.</Link>
          </div>
        </div>
        <div className="firstv2"></div>
      </section>
    </>
  );
}

export default Betherescue