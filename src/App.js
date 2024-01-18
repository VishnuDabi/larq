import "./App.css";
import Cart from "./Components/Cart/Cart";
import Economical from "./Components/Economical/Economical";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Magazine from "./Components/Magazine/Magazine";
import Mission from "./Components/Mission/Mission";
import Register from "./Components/Register/Register";
import Review from "./Components/Reviews/Review";
import Shop from "./Components/Shop Component/Shop";
import SingIn from "./Components/Signin/SingIn";
import NowTrending from "./Components/Trending/NowTrending";
import { Route, Routes, useNavigate } from "react-router-dom";
// import Main from "./Redux/Main";
import { useState } from "react";
import { ID, account } from "./lib/appwite";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(
  //   localStorage.getItem("cookieFallback") || null
  // );
  const navigate = useNavigate();
  async function loginHandler(email, password) {
    try {
      if (email && password) {
        await account.createEmailSession(email, password);
        setLoggedInUser(await account.get());
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  }

  async function registerHandler(email, password, name) {
    try {
      if (email && password && name) {
        await account.create(ID.unique(), email, password, name);
        loginHandler(email, password);
      }
    } catch (error) {
      alert(error);
    }
  }
  async function logoutHandler() {
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      {/* <Main /> */}
      <Header user={loggedInUser} logout={logoutHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Review />
              <Shop />
              <NowTrending />
              <Economical />
              <Mission />
              <Magazine />
            </>
          }
        />
        <Route path="/sign-in" element={<SingIn login={loginHandler} />} />
        <Route
          path="/registration"
          element={
            <Register
              logout={logoutHandler}
              register={registerHandler}
              user={loggedInUser}
            />
          }
        />
        <Route path="/bottle/:targetIndex" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
