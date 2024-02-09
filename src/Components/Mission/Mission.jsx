import React, { useState } from "react";
import "./mission.css";
import LearnCard from "./LearnCard";
import { data } from "./missionCardData";
const Mission = () => {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <section className="">
      <div className="mission-container">
        <button
          className={learnMore ? "active-back-btn  btn" : "back-btn btn"}
          onClick={() => setLearnMore(!learnMore)}
        >
          Back
        </button>
        <div
          className={
            learnMore
              ? "active-mission-container-text"
              : "mission-container-text"
          }
        >
          <span>Our Mission</span>
          <h1>Drink brilliantly</h1>
          <br />
          <p>
            We make it easy to opt for the healthier and more sustainable
            hydration choice, anytime and anywhere.
          </p>
          <br />
          <button className="btn" onClick={() => setLearnMore(!learnMore)}>
            {learnMore ? "Back " : ` Learn More  `}
          </button>
        </div>
        <div
          className={
            learnMore ? "active-learn-more-container" : "learn-more-container"
          }
          onClick={() => setLearnMore(!learnMore)}
        >
          <div className="learn-more-card">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <LearnCard Props={item} id={index} />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="btn-next-prev">
          <button className="btn" onClick={() => translate("Prev")}>
            +efewfwf
          </button>
          <button className="btn" onClick={() => translate("Next")}>
            -
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Mission;
