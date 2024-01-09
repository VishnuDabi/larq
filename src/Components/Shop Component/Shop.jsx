import React from "react";
import "./shop.css";
import { data } from "./data";
import ShopCard from "./ShopCard";
const Shop = () => {
  return (
    <section className="shop-conatiner">
      <h1 className="blue">Shop</h1>
      <div className="shop-wrapper">
        {data.map((item, index) => {
          return (
            <div className="shop-childs" key={index}>
              <ShopCard props={item} i={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
