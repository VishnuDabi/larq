import React from "react";
import "./now-trending.css";
import { data } from "./data";
import TrendingCard from "./TrendingCard";
const NowTrending = () => {
  return (
    <section className="now-trending-container">
      <div className="trending-wrapper blue">
        <h1>Now trending</h1>
        <br />
        <div className="trending-flex-container " id="style-1">
          {data.map((item, index) => {
            return (
              <div key={index + item.h5}>
                <TrendingCard Props={item} Index={index}  />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NowTrending;
