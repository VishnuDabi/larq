import React from "react";
import "./economical.css";
import { MdAutorenew } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";

const Economical = () => {
  return (
    <section className="economical-container">
      <div className="eco-wrapper">
        <div className="eco-card">
          <i>
            <MdAutorenew className="icon eco-icon" />
          </i>
          <h3>Say yes to refills</h3>
          <p>
            Save money and make single-use water bottles a thing of the past.
          </p>
        </div>
        <div className="eco-card">
          <i>
            <BsDroplet className="icon eco-icon" />
          </i>
          <h3>A smart way to sip</h3>
          <p>
            PureVis™ and Nano Zero technology improves water quality for a
            brilliant hydration experience on the go.
          </p>
        </div>
        <div className="eco-card">
          <i>
            <PiPlantLight className="icon eco-icon" />
          </i>
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
