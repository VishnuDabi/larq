import React, { useState } from "react";
import "./sign-in.css";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
// import { account, ID } from "./lib/appwrite";
// import { account, ID } from "../../lib/appwite";
const SingIn = () => {


  // async function login(email, password) {
  //   await account.createEmailSession(email, password);
  //   setLoggedInUser(await account.get());
  // }
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
            <button
              className="btn-sign-in"
              // onClick={() => login(email, password)}
            >
              Sign In
            </button>

            <Link>Forgot your password?</Link>
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
            <Link to="/registration">
              <button className="btn-sign-in create-account-btn">
                Create account
              </button>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingIn;
