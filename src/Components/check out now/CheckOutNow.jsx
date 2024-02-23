import React from "react";
import "./checkout-now.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckOutNow = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const Subtotal = useSelector((state) => state.cart.totalAmount);
  return (
    <section className="checkout_now_container">
      <div className="check__main">
        <div className="chek__main__child1 blue">
          <h4 className="">Customer</h4>
          <p className="sm__text">
            Already have an account? <Link to="/login"> Sign in now</Link>
          </p>
          <hr />
          <h4>Shipping Payment</h4>
          <hr />
          <h4>Billing</h4>
          <hr />
          <h4>Payment</h4>
        </div>
        <div className="chek__main__child2">
          <h5>Order Summary</h5>
          <hr />
          {cartItem.map((value, index) => {
            return (
              <div key={index}>
                <div className="check__mini__flex ">
                  <div>
                    <img className="img" src={value.src} alt="evfrf" />
                  </div>
                  <div>
                    <p className="blue tx-13 fw-700">
                      {value.totalQuantities}x{value.h5}
                    </p>
                    <p className="tx-13">Size {value.bottleSize}</p>
                    <p className="tx-13">{value.cap}</p>
                  </div>
                  <div>
                    <p className="blue tx-13 fw-700">${value.rs}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="d__flex__space__between">
            <div className=" co__price">
              <p className="blue fw-700">Subtotal</p>
              <p>Shipping </p>
              <p> Tax</p>
            </div>
            <div className=" co__price">
              <p className="blue fw-700">${Subtotal}</p>
              <p>--</p>
              <p>$0.00</p>
            </div>
          </div>
          <hr />
          <div className="d__flex__space__between blue">
            <h6>Total (USD)</h6>
            <h6>${Subtotal}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutNow;
