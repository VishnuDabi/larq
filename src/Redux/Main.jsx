import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectAuth } from "./AuthSlice";
const Main = () => {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  console.log(auth);
  return (
    <div>
      <button onClick={() => dispatch(login())}>true</button>
      <button onClick={() => dispatch(logout())}>true</button>
    </div>
  );
};
export default Main;
