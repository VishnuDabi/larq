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
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Header />
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
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
