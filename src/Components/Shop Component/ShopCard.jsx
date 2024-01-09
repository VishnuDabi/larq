import React from "react";
import "./shop-card.css";
const ShopCard = ({ props }) => {
  return (
    <div className="shop-card">
      <div className="shop-img-container">
        <img className="shop-img" src={props.src} alt="" />
      </div>
      <div className="shop-txt blue">
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
};

export default ShopCard;
