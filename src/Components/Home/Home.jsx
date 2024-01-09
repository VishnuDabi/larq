import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section className="home-container">
      <div className="home-wrapper">
        <div className="home-txt">
          <span>Drink Brilliantly</span>
          <h1>Poppin’ bottles in 2024</h1>
          <br />
          <p>
            Forget the bubbly, smart water purification is here to help crush
            those hydration goals.
          </p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="mini-image-container">
          <div className="mini-img">
            <img
              className=""
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDOB074A.png"
              alt=""
            />
            <p> LARQ Bottle PureVis™</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
