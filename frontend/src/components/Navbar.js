import React, { useState } from "react";
import "../css/Navbar.css";

import logo from "../img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-outside navbar-expand-lg navbar-dark fixed-top">
      <div className="navbar-inside container-nav">
        <a className="navbar-brand name-nav" href="#home">
          <img src={logo} alt="Logo" className="logo" style={{ width: "30px", height: "30px"}}/>
          DataStorm
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link px-3"
                href="#about"
                onClick={() => setIsOpen(false)} // Close navbar after clicking link
              >
                About
              </a>
            </li>

            <li className="nav-item ">
              <a
                className="nav-link px-3"
                href="#schedule"
                onClick={() => setIsOpen(false)} // Close navbar after clicking link
              >
                Schedule
              </a>
            </li>

            <li className="nav-item ">
              <a
                className="nav-link px-3"
                href="#sponsors"
                onClick={() => setIsOpen(false)} // Close navbar after clicking link
              >
                Sponsors
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link px-3"
                href="#register"
                onClick={() => setIsOpen(false)} // Close navbar after clicking link
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
