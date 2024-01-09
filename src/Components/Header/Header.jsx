import React from "react";
import "./header.css";
import { CiUser } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import HoveredCard from "./HoveredCard";
import { menuData1 } from "./menuData";
import { menuData2 } from "./menuData";
import { menuData3 } from "./menuData";
import { menuData4 } from "./menuData";

const Header = () => {
  return (
    <>
      <header className="header-container blue">
        <div className="header-wrapper">
          <div className="header-item">
            <div className="header-links ">
              <ul>
                <li className="menu-link">
                  <span>Shop all</span>
                  <HoveredCard Props={menuData1} />
                </li>
                <li className="menu-link">
                  <span>purifiction</span>
                  <HoveredCard Props={menuData2} />
                </li>
                <li className="menu-link">
                  <span>home</span>
                  <HoveredCard Props={menuData3} />
                </li>
                <li className="menu-link">
                  <span>drinkware</span>
                  <HoveredCard Props={menuData4} />
                </li>
              </ul>
            </div>
          </div>

          <div className="cmp-logo">
            <img
              className="img"
              src="https://www.augmentventures.com/wp-content/uploads/2020/02/larq-logo.jpg"
              alt=""
            />
          </div>
          <div className="icons-container">
            <div className="login-icons">
              <p>
                <span>technology</span>
                <span>faq</span>
                <span>
                  <CiUser className="icon" />
                </span>
                <span>
                  <PiShoppingCart className="icon" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
