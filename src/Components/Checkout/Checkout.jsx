import React, { useState } from "react";
import "./checkout.css";
import { IoClose } from "react-icons/io5";
import { LuTag } from "react-icons/lu";
const Checkout = ({ props, fun }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={
        props ? "active-checkout-main-container " : "checkout-main-container"
      }
    >
      <div className="checkout blue">
        <div className="close-icon">
          <IoClose onClick={fun} />
        </div>
        <h6>Your cart </h6>
        <div className="wrapper">
          <p>$10 store credit</p>

          <div className="circle-progress">
            <div className="circle" style={{ background: "#153a5b" }}></div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: "60%" }}></div>
            </div>
          </div>
          <p>You're $150.00 away from $10 in store credit!</p>

          <div className="cart-items">
            <div>
              <img src="" alt="cart-item" />
            </div>
            <div>bottle name</div>
            <div> delete or amount</div>
          </div>
          <hr />
          <div className="subtotal">
            <h6>Subtotal</h6>
            <h6>$123</h6>
          </div>
          <hr />
        </div>
        <span>
          <LuTag className="blue shop-tag " />
          <a href="..#">Apply coupon code</a>
        </span>
        <br />
        <br />
        <button
          className={hovered ? " btn-cart" : "btn-cart-hovered"}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          Check out Now
        </button>
        <p>Shipping and taxes calculated at checkout.</p>
      </div>
    </div>
  );
};

export default Checkout;
