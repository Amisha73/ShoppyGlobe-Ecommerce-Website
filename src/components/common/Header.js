// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center ">
        <h1 className="h4">
          <Link to="/" className="text-white text-decoration-none ">
            𝒮𝒽ℴ𝓅𝓅𝓎𝒢𝓁ℴ𝒷ℯ
          </Link>
        </h1>
        {/* menu bar for small screen */}
        <div className="d-lg-none">☰</div>
        <nav className="d-none d-xxl-block d-xl-block d-lg-block">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link text-white">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link text-white">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
        {/* cart icon svg */}
        <div className="d-none d-xxl-block d-xl-block d-lg-block">
          <div className="d-flex gap-5 align-items-center">
            <div className="position-relative">
              <Link to="/cart" className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-cart"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M6.5 0a.5.5 0 0 1 .5.5V1h10V.5a.5.5 0 0 1 1 0V1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.5l-1.5 7H7.5l-1.5-7H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5V.5a.5.5 0 0 1 .5-.5zM1 3v1h1.5l1.5 7h8l1.5-7H20V3H1zm5 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </div>{" "}
            <Link to="/loginSignup" className="nav-link text-white"
            role="btn">
                Login          
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
