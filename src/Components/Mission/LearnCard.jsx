import React from "react";
import "./learn-card.css";
const LearnCard = ({ Props, id }) => {
  return (
    <section className="learn-card-container" key={id}>
      <div className="learn-card">
        <div>
          <img className="img-cr" src={Props.src} alt="" />
          <div className="learn-card-text">
            <h1>{Props.h2}</h1>
            <p>{Props.p}</p>

            <button className="shop-now-btn btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnCard;
