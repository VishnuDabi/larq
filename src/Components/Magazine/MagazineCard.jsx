import React from "react";
import "./magazine-card.css";
const MagazineCard = ({ props, id }) => {
  return (
    <section className="mg-card-main">
      <div className="mg-card-container blue" key={id}>
        <div className="mg-card">
          <img src={props.img} className="mg-img" alt="" />
          <p>{props.h4}</p>
          <button className="mg-card-btn blue">{props.rd}</button>
        </div>
      </div>
    </section>
  );
};

export default MagazineCard;
