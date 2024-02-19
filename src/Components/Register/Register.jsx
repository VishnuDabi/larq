import React, { useEffect, useState } from "react";
import "./register.css";
const Register = ({ logout, register }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    Fname: "",
    Lname: "",
    ad1: "",
    ad2: "",
    city: "",
    zipCode: "",
    phone: "",
    state: "",
    companyName: "",
  });
  const [fnameErr, setFnameErr] = useState("");
  const [LnameErr, setLnameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [countryErr, setCountryErr] = useState("");
  const [ad1Err, setAd1Err] = useState("");
  const [zipCodeErr, setZipCodeErr] = useState("");
  const [stateErr, setStatetErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  useEffect(() => {
    validateHandler();
  }, [data]);
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validateHandler = async (submit) => {
    let result = true;
    if (data.email === "") {
      setEmailErr("Please enter valid email ID");
      result = false;
      return;
    } else if (
      !data.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailErr("Enter Valid Email id");
      result = false;
      return;
    } else {
      setEmailErr("");
    }
    if (data.password === "") {
      setPasswordErr("Please Select your password");
      result = false;
      return;
    } else if (
      !data.password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      setPasswordErr(
        "Passwords must be at least 7 characters and contain both alphabetic and numeric characters."
      );

      result = false;
      return;
    } else {
      setPasswordErr("");
    }
    if (data.confirmPassword === "") {
      setConfirmPasswordErr("Please confirm your password");
      result = false;
      return;
    } else if (data.password !== data.confirmPassword) {
      setConfirmPasswordErr("Password not matched");
      result = false;
      return;
    } else {
      setConfirmPasswordErr("");
    }
    if (data.country === "") {
      console.log(data.country);
      setCountryErr("please select your country");
      result = false;
      return;
    } else {
      setCountryErr("");
    }
    if (data.Fname === "") {
      setFnameErr("Please Enter your Name");
      result = false;
      return;
    } else if (data.Fname.length < 4) {
      setFnameErr("Name should be have 4 letters");
      result = false;
      return;
    } else {
      setFnameErr("");
    }

    if (data.Lname === "") {
      setLnameErr("Please Enter your last  Name");
      result = false;
      return;
    } else if (data.Lname.length < 4) {
      setLnameErr(" Last name should be have 4 letters");
      result = false;
      return;
    } else {
      setLnameErr("");
    }
    if (data.ad1 === "") {
      setAd1Err("Please Provide your Address");
      result = false;
      return;
    } else {
      setAd1Err("");
    }
    if (data.city === "") {
      setCityErr("Please Enter your city Name");

      result = false;
      return;
    } else {
      setCityErr("");
    }
    if (data.state === "") {
      setStatetErr("Please enter your city ");
      result = false;
      return;
    } else {
      setStatetErr("");
    }
    if (data.zipCode === "") {
      setZipCodeErr("Please Provie your Zip Code ");
      result = false;
      return;
    } else {
      setZipCodeErr("");
    }
    if (result && submit) {
      register(data.email, data.password, data.Fname);
      alert("successfully submitted");
    }
  };
  return (
    <section className="register-main-container blue">
      <h3>New Account</h3>
      <form>
        <div className="registration-form">
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="email">Email</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="email"
              id="email"
              name="email"
              value={data.email}
            />
            <br />
            {emailErr && <span> {emailErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="pwd">Password</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="password"
              name="password"
              id="pwd"
              value={data.password}
            />
            <br />
            {passwordErr && <span> {passwordErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="Cpwd">Confirm Password</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              id="Cpwd"
            />
            <br />
            {confirmPasswordErr && <span> {confirmPasswordErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="country">Country</label>
              <small>Required</small>
            </div>
            <select
              name="country"
              onChange={dataHandler}
              value={data.country}
              id="country"
            >
              <option>Select Country</option>
              <option>United State</option>
              <option>Japan</option>
            </select>
            <br />
            {countryErr && <span> {countryErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="fname">First Name</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="Fname"
              id="fname"
              value={data.Fname}
            />
            <br />
            {fnameErr && <span> {fnameErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="lname">Last Name</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="Lname"
              value={data.Lname}
              id="lname"
            />
            <br />
            {LnameErr && <span> {LnameErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="ad1">Address Line 1</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="ad1"
              id="ad1"
              value={data.ad1}
            />
            <br />
            {ad1Err && <span> {ad1Err}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="ad2">Address Line 2</label>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="ad2"
              id="ad2"
              value={data.ad2}
            />
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="companyName">Company Name</label>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="companyName"
              value={data.companyName}
              id="companyName"
            />
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="city">Suburban/City</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="city"
              id="city"
              value={data.city}
            />
            <br />
            {cityErr && <span> {cityErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="state">State/Province</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="state"
              value={data.state}
              id="state"
            />
            <br />
            {stateErr && <span> {stateErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="postcode">Zip/Postcode</label>
              <small>Required</small>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="zipCode"
              id="postcode"
              value={data.zipCode}
            />
            <br />
            {zipCodeErr && <span> {zipCodeErr}</span>}
          </div>
          <div className="rg-child">
            <div className="label-child">
              <label htmlFor="phone">Phone Number</label>
            </div>

            <input
              onChange={dataHandler}
              type="text"
              name="phone"
              value={data.phone}
              id="phone"
            />
            <br />
          </div>
        </div>
      </form>
      <button
        className="create-account-btn"
        onClick={() => validateHandler("submit")}
      >
        Create account
      </button>
    </section>
  );
};

export default Register;
