import React, { useState } from "react";
import "./checkout.css";
import { IoClose } from "react-icons/io5";
import { LuTag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { removeItem } from "../../Redux/features/counter/cartSlice";
const Checkout = ({ props, fun }) => {
  const [hovered, setHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  console.log(cartItems);
  const handleDeleteProduct = (item) => {
    dispatch(removeItem(item));
  };

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
          {cartItems.map((item, index) => {
            return (
              <div key={index}>
                <div className="cart-items">
                  <div className="cart-items-img ">
                    <img className="img" src={item.src} alt="cart-item" />
                  </div>
                  <div className="cart-items-name">
                    <h6>{item.h5}</h6>

                    <span>{item.cap}</span>
                    <span>{item.bottleSize}</span>
                    <br />
                    <span className="quantity-btn">
                      <button className="decreament-btn">-</button>
                      <input type="text" value={quantity} readOnly />
                      <button className="increament-btn">+</button>
                    </span>
                  </div>
                  <div className="cart-items-div">
                    <span>
                      <AiTwotoneDelete
                        onClick={() => handleDeleteProduct(item)}
                        className="icon"
                      />
                    </span>
                    <br />
                    <br />
                    <span>{item.rs}</span>
                  </div>
                </div>
                <hr />
                {/* <div className="subtotal">
                  <h6>Subtotal</h6>
                  <h6>$123</h6>
                </div>
                <hr /> */}
              </div>
            );
          })}
        </div>
        <span>
          <LuTag className="blue shop-tag " />
          <Link>Apply coupon code</Link>
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
