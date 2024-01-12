import React from "react";
import "./sign-in.css";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const SingIn = () => {
  return (
    <section className="sign-in-container blue">
      <h2>Sign In</h2>
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <label htmlFor="email">Email Address</label>

          <input type="email" name="" id="email" />
          <br />
          <label htmlFor="password">Password</label>

          <div className="pwd-div">
            <input type="text" id="password" />
            <div className="pwd-show-hide">
              <IoMdEye className="icon" />
              {/* <IoIosEyeOff className="icon" /> */}
            </div>
          </div>
          <div className="sign-in-forgot-btn">
            <button className="btn-sign-in">Sign In</button>
            <a href="#1">Forgot your password?</a>
          </div>
        </div>
        <div className="new-user">
          <h6>New customer?</h6>

          <p>Create an account with us and you'll be able to:</p>
          <ul>
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
          </ul>
          <p>
            <button className="btn-sign-in create-account-btn">
              Create account
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingIn;
