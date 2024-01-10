import React, { useState } from "react";
import "./trending-card.css";
import { data } from "./data";
const TrendingCard = ({ Props }) => {
  const [img, setImg] = useState(false);
  console.log(Props.cap.includes("Blue"));
  const imageChangeHandler = (v, i) => {
    data.forEach((item, index) => {
      // console.log();
      item.src = v;
      // item.h5 = item.name[i];
      item.cap = item.size[i];
      item.rs = item.price[i];

      setImg(!img);
    });
  };
  return (
    <>
      <section className="trending-card">
        <div
          className={
            Props.cap.includes("Blue")
              ? "trending-shop-card bg-blue  "
              : Props.cap.includes("Green")
              ? "trending-shop-card bg-green "
              : Props.cap.includes("White")
              ? "trending-shop-card bg-white "
              : Props.cap.includes("Black")
              ? "trending-shop-card bg-black "
              : Props.cap.includes("Mint")
              ? "trending-shop-card bg-mint "
              : Props.cap.includes("Pink")
              ? "trending-shop-card bg-pink "
              : "trending-shop-card bg-default "
          }

          // className="trending-shop-card"
        >
          <div className="shop-card-img">
            <img
              className={Props.cap.includes("34 oz") ? "img-scale" : "img"}
              src={Props.src}
              alt=""
            />
          </div>
          <div className="shop-card-txt">
            <h5>{Props.h5}</h5>
            <p> {Props.cap}</p>
            <div className="shop-card-option">
              {Props.option.map((v, i) => {
                return (
                  <div key={i + v} className="option-img">
                    <img
                      className="img"
                      src={v}
                      alt=""
                      onClick={() => imageChangeHandler(v, i)}
                    />
                  </div>
                );
              })}
            </div>
            <p>{Props.rs}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCard;
