import React from "react";
import "./Strory.css";
import { Link } from "react-router-dom";

const Storypart2 = () => {
  return (
    <>
      <section className="page2">
        <div className="item1">
          <pre>
            {" "}
            <h3>STORY ABOUT</h3>
            <span className="he2">WHAT WE DO.</span>
          </pre>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laboriosam voluptas nulla atque repellat rerum ipsum, natus
            aspernatur earum culpa perferendis eos ad laborum corrupti dolores
            repellendus? Eaque, doloribus consectetur.
          </p>
          <Link to="/">KNOW MORE</Link>
        </div>
        <div className="item2"></div>
      </section>
    </>
  );
}

export default Storypart2