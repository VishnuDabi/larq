import React from "react";

import "./review.css";
const Review = () => {
  return (
    <>
      <section className="review-container blue">
        <div className="review-wrapper">
          <div className="review-title-container">
            <div>
              <h1>Brilliant</h1>
              <span>******</span>
              <br />
              <p>based on 10798 reviews</p>
              <br />
            </div>
            <div className="all-review-btn">
              <button className="btn">All Reviews</button>
            </div>
          </div>
          <div className="review-slider-box" id="style-1">
            <div className="review-items">
              <div>
                <p>
                  What’s the Next Status Water Bottle? Three of our experts
                  named the LARQ bottle as one to watch.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png"
                  alt=""
                />
              </div>
            </div>
            <div className="review-items">
              <div>
                <p>
                  The result is that every glass of water tastes crisp and
                  fresh.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/oprah_Magazine.png"
                  alt=""
                />
              </div>
            </div>
            <div className="review-items">
              <div>
                <p>
                  LARQ's PureVis™ water pitcher erased my fears about drinking
                  water from the tap.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/digital_trends.png"
                  alt=""
                />
              </div>
            </div>
            <div className="review-items">
              <div>
                <p>
                  You Should Ditch Your Old Water Dispenser For The High-Tech
                  LARQ Pitcher PureVis™.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1689147058/v3-images/media-block/BP-logo-black.png"
                  alt=""
                />
              </div>
            </div>
            <div className="review-items">
              <div>
                <p>
                  The result is that every glass of water tastes crisp and
                  fresh.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/oprah_Magazine.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
