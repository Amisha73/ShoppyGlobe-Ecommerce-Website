import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
// import SearchResult from "./components/SearchResult";
import Footer from './components/common/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/search" element={<SearchResult />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/checkout"  element={<CheckOutPage/>}/> */}
        {/* <Route path="/signin" element={<Signin/>} /> */}
        {/* <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
