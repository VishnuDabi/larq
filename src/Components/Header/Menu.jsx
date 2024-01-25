import React from "react";
import "./menu.css";
const Menu = ({ props }) => {
  return (
    <div className={props ? "menu-container-block" : "menu-container-none"}>
      <div className="menu-cards-container">
        <div className="menu-cards ">
          <div>
            <img
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg"
              alt=""
              className=" menu-img menu-img-0"
            />
            <img
              src="https://res.cloudinary.com/larq/image/upload/w_300/v1692781791/Homepage-v3/Navigation/update/purification-small.png"
              alt=""
              className="menu-img menu-img-1"
            />
            <div className="menu-txt-container">
              <h6>Purification</h6>
              <p>Filter or Purify water on the go.</p>
            </div>
          </div>
        </div>
        <div className="menu-cards ">
          <div>
            <img
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/home-big.jpg"
              alt=""
              className=" menu-img menu-img-0"
            />
            <img
              src="https://res.cloudinary.com/larq/image/upload/w_300/v1692781790/Homepage-v3/Navigation/update/home-small.png"
              alt=""
              className=" menu-img menu-img-1"
            />
            <div className="menu-txt-container">
              <h6>Home</h6>
              <p>Equip Your Home With Nano Zero filtration.</p>
            </div>
          </div>
        </div>
        <div className="menu-cards ">
          <div>
            <img
              src=" https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/drinkware-big-us.jpg"
              alt=""
              className=" menu-img menu-img-0"
            />
            <img
              src=" https://res.cloudinary.com/larq/image/upload/w_300/v1692781790/Homepage-v3/Navigation/update/drinkware-small-us.png"
              alt=""
              className=" menu-img menu-img-1"
            />
            <div className="menu-txt-container">
              <h6>Drinkware</h6>

              <p>Hydrate Effortlessly On The go.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hb-menu-links">
        <button className="btn">
          <h5>Explore all</h5>
        </button>
        <button className="btn">
          <h5>Gift sets</h5>
        </button>
        <button className="btn-none"> Filters & Accessories</button>
        <button className="btn-none"> Corporate gifting</button>
        <button className="btn-none"> Technology</button>
        <button className="btn-none">FAQ</button>
        <button className="btn-none"> Login</button>
      </div>
    </div>
  );
};

export default Menu;
