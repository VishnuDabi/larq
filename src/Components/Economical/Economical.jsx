import React from "react";
import "./economical.css";
const Economical = () => {
  return (
    <section className="economical-container">
      <div className="eco-wrapper">
        <div className="eco-card">
          <h3>Say yes to refills</h3>
          <p>
            Save money and make single-use water bottles a thing of the past.
          </p>
        </div>
        <div className="eco-card">
          <h3>A smart way to sip</h3>
          <p>
            PureVis™ and Nano Zero technology improves water quality for a
            brilliant hydration experience on the go.
          </p>
        </div>
        <div className="eco-card">
          <h3>Hydrate with purpose</h3>
          <p>
            A portion of proceeds supports environmental and clean water
            projects worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Economical;
