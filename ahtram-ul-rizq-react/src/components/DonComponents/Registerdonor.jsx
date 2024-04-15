import React from 'react'
import "./Registerdonor.css";
import { Link } from "react-router-dom";

const Registerdonor = () => {
  return (
    <>
      <section className="item5">
        <div className="inn2">
          <h2>Registered Restaurents. </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            cupiditate saepe ipsam distinctio numquam reprehenderit, ipsum
            maxime hic laudantium suscipit. Nulla, iusto.
          </p>
          <Link to="/registerrest">Registered Restaurents.</Link>
        </div>
        <div className="inn2">
          <h2>Registered Volunteer. </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            cupiditate saepe ipsam distinctio numquam reprehenderit, ipsum
            maxime hic laudantium suscipit. Nulla, iusto.
          </p>
          <Link to="/restaurents/index.html">Registered Restaurents.</Link>
        </div>
        <div className="inn2">
          <h2>Registered Bakeries.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            cupiditate saepe ipsam distinctio numquam reprehenderit, ipsum
            maxime hic laudantium suscipit. Nulla, iusto.
          </p>
          <Link to="/restaurents/index.html">Registered Restaurents.</Link>
        </div>
      </section>
    </>
  );
}

export default Registerdonor