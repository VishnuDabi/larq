import React, { useEffect, useState } from "react";
import "./cart.css";
import { useLocation } from "react-router-dom";
const Cart = () => {
  const location = useLocation();
  const linkProp = location.state;
  const [data, setData] = useState({
    url: linkProp.mainSrc,
    name: linkProp.mainName,
    amount: linkProp.mainAmount,
    size: linkProp.mainSize,
  });
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  function imgHandler(value) {
    // console.log(value);
    setData({ ...data, url: value });
  }
  return (
    <section className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-img-container  cart-item">
          <img src={data.url} alt="" className="img" />
        </div>
        <div className="cart-item-detail-container cart-item">
          <h3>{data.name}</h3>
          <h4>{data.amount}</h4>
          <br />
          <span>Size</span>
          <br />
          <div className="button">
            <input type="radio" id="17-oz" name="size" value="17 oz" />
            <label className=" btn-default" htmlFor="17-oz">
              17 oz
            </label>
          </div>
          <div className="button">
            <input type="radio" id="23-oz" name="size" value="23 oz" />
            <label className=" btn-default" htmlFor="23-oz">
              23 oz
            </label>
          </div>
          <span>{data.size}</span>
          <br />
          <div className="radio-option">
            {linkProp.srcOption.map((value, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="color-name"
                    id=""
                    value={value}
                    onClick={() => imgHandler(value)}
                  />
                </div>
              );
            })}
          </div>
          {/* <input type="radio" name="color-name" id="" />B
          <input type="radio" name="color-name" id="" />C */}
          <br />
          <button className="btn-cart">Add to cart-$115.00</button>
          <div className="info">
            <p>Or 4 interest-free installments of $28.75</p>
            <p>Free shipping within the contiguous U.S. on orders over $80.</p>
          </div>
          <br />
          <div className="info-more">
            <div>1 year warranty</div>
            <div>Free returns</div>
            <div>Secure checkout</div>
          </div>
          <hr />
          <p className="bottle-txt">
            LARQ Bottle Flip Top makes it easy to hydrate on the go — just flip
            the straw up for easy access. Take hydration to the next level with
            PureVis™ and Nano Zero. Switch between filtering out contaminants
            with the LARQ Filter Straw or the self-cleaning power of the LARQ
            Bottle PureVis™ Cap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
