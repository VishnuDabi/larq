import "./App.css";
import Economical from "./Components/Economical/Economical";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Magazine from "./Components/Magazine/Magazine";
import Mission from "./Components/Mission/Mission";
import Review from "./Components/Reviews/Review";
import Shop from "./Components/Shop Component/Shop";
import NowTrending from "./Components/Trending/NowTrending";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Review />
      <Shop />
      <NowTrending />
      <Economical />
      <Mission />
      <Magazine />
      <Footer />
    </div>
  );
}

export default App;
