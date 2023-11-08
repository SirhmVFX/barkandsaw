import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Ourstore from "./pages/OurStore";
import SingleProduct from "./pages/SingleProduct";
import CheckOut from "./pages/CheckOut";
import Wishlist from "./pages/Wishlist";
import ShoppingCartList from "./pages/ShoppingCartList";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourstore" element={<Ourstore />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shoppingcartlist" element={<ShoppingCartList />} />
        </Route>
        <Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
