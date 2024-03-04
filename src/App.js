import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>

          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="/mens" element={<ShopCategory catrgory="men" banner={men_banner}></ShopCategory>}></Route>
          <Route path="/womens" element={<ShopCategory catrgory="women" banner={women_banner}></ShopCategory>}></Route>
          <Route path="/kids" element={<ShopCategory catrgory="kid" banner={kid_banner}></ShopCategory>}></Route>
          
          <Route path="/product" element={<Product></Product>}>
            <Route path=":productId" element={<Product></Product>}></Route>
          </Route>

          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>

        </Routes>

        <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
