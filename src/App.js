import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Footer from './components/common/Footer'
import AboutPage from "./components/AboutPage";
import LoginSignup from "./components/LoginSignup";
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
    <div className="page-container">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<SearchResult />} />
        {/* <Route path="/checkout"  element={<CheckOutPage/>}/> */}
        <Route path="/loginSignup" element={<LoginSignup/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;
