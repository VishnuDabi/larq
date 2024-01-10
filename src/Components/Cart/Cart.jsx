import React from "react";
import "./cart.css";
const Cart = () => {
  return (
    <section className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-img-container  cart-item">
          <img
            src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWOB068A.png"
            alt=""
            className="img"
          />
        </div>
        <div className="cart-item-detail-container cart-item">
          <h1>Pure Vibes</h1>
          <h4>$115.00</h4>
          <br />
          <span>Size</span>
          <br />
          <div class="button">
            <input type="radio" id="17-oz" name="size" value="17 oz" />
            <label class=" btn-default" htmlFor="17-oz">
              17 oz
            </label>
          </div>
          <div className="button">
            <input type="radio" id="23-oz" name="size" value="23 oz" />
            <label class=" btn-default" htmlFor="23-oz">
              23 oz
            </label>
          </div>
          <span>Obsidian Black</span>
          <br />
          <input type="radio" name="color-name" id="" />
          <input type="radio" name="color-name" id="" />
          <input type="radio" name="color-name" id="" />
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
