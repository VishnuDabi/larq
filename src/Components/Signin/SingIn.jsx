import React, { useState } from "react";
import "./sign-in.css";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const SingIn = ({ login }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dataHandler = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  return (
    <section className="sign-in-container blue">
      <h2>Sign In</h2>
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            name="email"
            id="email"
            value={loginData.email}
            onChange={dataHandler}
          />
          <br />
          <label htmlFor="password">Password</label>

          <div className="pwd-div">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={loginData.password}
              onChange={dataHandler}
            />
            <div className="pwd-show-hide">
              {showPassword ? (
                <IoIosEyeOff
                  className="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IoMdEye
                  className="icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <div className="sign-in-forgot-btn">
            <button
              className="btn-sign-in"
              onClick={() => login(loginData.email, loginData.password)}
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
