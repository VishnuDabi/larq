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
        {data.map((item, index) => {
          return (
            <>
              <div key={index}>
                <TrendingCard Props={item} />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default NowTrending;
