import React, { useState } from "react";
import "./trending-card.css";
const TrendingCard = ({ Props }) => {
  const [data, setData] = useState(Props);
  const [data2, setData2] = useState({
    src:
  })
  const imageChangeHandler = (i) => {
    data.src =
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png";
    setData(data);
    console.log(data);
  };
  return (
    <>
      <section className="trending-card">
        <div className="trending-shop-card">
          <div className="shop-card-img">
            <img
              className="img"
              // src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-3XSWIGM.png"
              src={data.src}
              alt="abc"
            />
          </div>
          <div className="shop-card-txt">
            <h5>{data.h5}</h5>
            <p> {data.cap}</p>
            <div className="shop-card-option">
              {data.option.map((v, i) => {
                console.log(v);
                return (
                  <div key={i} className="option-img">
                    <img
                      className="img"
                      src={v}
                      alt=""
                      onClick={() => imageChangeHandler(v)}
                    />
                  </div>
                );
              })}
            </div>
            <p>{data.rs}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCard;
