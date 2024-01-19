import React, { useEffect, useState } from "react";
import "./cart.css";
import { data as localData } from "../Trending/data";
import { useParams } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";
const Cart = () => {
  const tr = useParams();

  const [data, setData] = useState({});
  const [imgScaler, setImgScaler] = useState(false);
  useEffect(() => {
    localData.forEach((value, index) => {
      if (index === Number(tr.targetIndex)) {
        setData(value);
      }
    });
  }, [tr.targetIndex]);
  function imgHandler(value, name, rs) {
    // console.log(value);
    data.src = value;
    setData({ ...data, src: value, cap: name, rs: rs });
  }

  return (
    <section className="cart-container">
      <div className="cart-wrapper">
        <div className=" cart-item">
          <div className="cart-img-container ">
            <img
              src={data.src}
              alt=""
              className={imgScaler ? " img-scale" : ""}
            />
          </div>
        </div>
        <div className="cart-item-detail-container cart-item">
          <h3>{data.h5}</h3>
          <h4>{data.rs}</h4>
          <br />
          <span>Size</span>
          <br />
          <div className="button">
            <input
              type="radio"
              id="23-oz"
              name="size"
              value="23 oz"
              onChange={() => setImgScaler(false)}
            />
            <label className=" btn-default" htmlFor="23-oz">
              23 oz
            </label>
          </div>
          <div className="button">
            <input
              type="radio"
              id="34-oz"
              name="size"
              value="34 oz"
              onChange={() => setImgScaler(true)}
            />
            <label className=" btn-default" htmlFor="34-oz">
              34 oz
            </label>
          </div>
          {data.cap === ("23 oz" || "34 oz") ? null : (
            <>
              <span>{data.cap}</span>
              <br />

              <div className="radio-option">
                {data.option ? (
                  <>
                    {data.option.map((value, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="radio"
                            name="color-name"
                            id=""
                            className={
                              data.size[index].includes("Blue")
                                ? " radio-bg-blue  "
                                : data.size[index].includes("White")
                                ? "radio-bg-white "
                                : data.size[index].includes("Black")
                                ? " radio-bg-black"
                                : data.size[index].includes("Mint")
                                ? " radio-bg-mint "
                                : data.size[index].includes("Pink")
                                ? " radio-bg-pink "
                                : " radio-bg-default"
                            }
                            checked={
                              data.size[index] === data.cap ? true : false
                            }
                            value={(value, data)}
                            onChange={() =>
                              imgHandler(
                                value,
                                data.size[index],
                                data.price[index]
                              )
                            }
                          />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  "no"
                )}
              </div>
            </>
          )}

          <br />
          <button className="btn-cart">Add to cart-{data.rs}</button>
          <div className="info">
            <p>
              Or 4 interest-free installments of $28.75{" "}
              <BsFillInfoCircleFill className="info-icon" />
            </p>
            <p>Free shipping within the contiguous U.S. on orders over $80.</p>
          </div>
          <br />
          <div className="info-more">
            <div>
              <IoIosCheckmarkCircleOutline className="cart-icon" />
              <p>1 year warranty</p>
            </div>
            <div>
              <IoArrowBackCircleOutline className="cart-icon" />
              <p>Free returns</p>
            </div>
            <div>
              <HiOutlineShieldCheck className="cart-icon" />
              <p>Secure checkout</p>
            </div>
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
