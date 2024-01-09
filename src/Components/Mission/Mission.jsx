import React, { useState } from "react";
import "./mission.css";
import LearnCard from "./LearnCard";
import { data } from "./missionCardData";
const Mission = () => {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <section className="">
      <div className="mission-container">
        <div className="mission-container-text">
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
      </div>
    </section>
  );
};

export default Mission;
