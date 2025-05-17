// src/components/Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-dark text-white p-3">
      <div className="d-flex justify-content-between align-items-center ">
        {/* Logo */}
        <h1 className="h4">
          <Link to="/" className="text-white text-decoration-none ">
            𝒮𝒽ℴ𝓅𝓅𝓎𝒢𝓁ℴ𝒷ℯ
          </Link>
        </h1>

        {/* Menu bar for small screen */}
        <div className="d-lg-none cursor-pointer" onClick={toggleSidebar}>
          {" "}
          ☰{" "}
        </div>

        {/* Sidebar for small and large screen */}
        {isSidebarOpen && (
          <div
            className="sidebar position-fixed top-0 start-0 bg-dark text-white p-4"
            style={{ width: "250px", height: "100%", zIndex: 1000 }}
          >
            <h1 className="h4 mb-5">
              <Link to="/" className="text-white text-decoration-none">
                𝒮𝒽ℴ𝓅𝓅𝓎𝒢𝓁ℴ𝒷ℯ
              </Link>
            </h1>
            <nav className="d-flex flex-column gap-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white" onClick={toggleSidebar}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white" onClick={toggleSidebar}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link text-white" onClick={toggleSidebar}
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/checkout" className="nav-link text-white" onClick={toggleSidebar}
                  >
                    Checkout
                  </Link>
                </li>
              </ul>

              <form className="">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                />
              </form>
              <Link to="/loginSignup" className="nav-link text-white" onClick={toggleSidebar}>
                Login
              </Link>
            </nav>
          </div>
        )}

        {/* xl and xxl screen navbar */}
        <div className="d-none d-xxl-block d-xl-block d-lg-block">
          <nav className="d-flex gap-5">
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
            {/* input for search */}
            <form className="input-group w-auto">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
              />
              <span className="input-group-text " id="search-addon">
                🔍
              </span>
            </form>
          </nav>
        </div>
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
            </div>
            <Link to="/loginSignup" className="nav-link text-white " role="btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
