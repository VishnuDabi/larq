import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-card blue">
          <h2>Become an insider</h2>
          <p>
            Receive exclusive offers, hydration news, and more when you
            subscribe.
          </p>
          <br />
          <input
            type="email"
            className="email-input blue"
            placeholder=" Email Address"
          />
          <br />
          <p className="icons">
            <i>
              <FaFacebook className="icon" />
            </i>
            <i>
              <FaInstagram className="icon" />
            </i>
            <i>
              <FaYoutube className="icon" />
            </i>
            <i>
              <FaTwitter className="icon" />
            </i>
            <br />
          </p>
          <br />
          <div className="footer-btn">
            <button className="btn">
              {" "}
              <div className="d__flex">
                <img
                  className="flag-img"
                  src="https://res.cloudinary.com/larq/image/upload/v1702649207/v3-images/flags/us.svg"
                  alt=""
                />
                <span>United States</span>
              </div>
            </button>
            <button className="btn">Terms & Privacy</button>
            <button className="btn">Accessibility</button>
          </div>
        </div>
        <div className="footer-card blue">
          <div className="footer-menu">
            <div className="footer-links">
              <p>FAQ</p>
              <p>Reviews</p>
              <p>Contact</p>
              <p> Find a retailer</p>
              <p>Corporate gifting </p>
            </div>
            <div className="footer-links">
              <p>basq magazine</p>
              <p>Press</p>
              <p>Our story</p>
              <p>Affiliate program</p>
              <p>Ambassador program</p>
            </div>
          </div>
        </div>
        <div className=" footer-img">
          <img
            className="cy-img"
            src="https://res.cloudinary.com/larq/image/upload/e_replace_color:f5f9fc:100:white/v1682247434/v3-images/footer/bicycle-animation.gif"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
