import React from "react";
import "./magazine.css";
import MagazineCard from "./MagazineCard";
import { data } from "./magazineData";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Magazine = () => {
  return (
    <>
      <section className="magazine-container">
        <div className="magazine-wrapper">
          <div className="magazine-text blue">
            <h1>basq magazine</h1>
            <p>
              Take a peek at our online magazine where we cover everything from
              water to travel and wellness.
            </p>
          </div>
          <div className="explore-btn">
            <button className="btn">
              Explore basq <HiOutlineArrowNarrowRight className="arrow-right-icon" />
            </button>
          </div>
        </div>
        <div className="magazine-scoll-container" id="style-4">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <MagazineCard props={item} id={index} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Magazine;
