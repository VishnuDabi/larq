import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-wrapper">
        <div className="home-txt">
          <span>Drink Brilliantly</span>
          <h1>Bet your bottle can’t do this</h1>
          <p>
            Discover the science of PureVis™ technology for a germ-free and
            stink-free bottle.
          </p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="mini-image-container">
          <div className="mini-img">
            <img
              className="img"
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png"
              alt="
            bottle"
            />
            <p> LARQ Bottle PureVis™</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
