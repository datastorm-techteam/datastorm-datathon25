import React from "react";

import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container container-nav">
        <a className="navbar-brand name-nav" href="#home">
          DataStorm '25
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#schedule ">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sponsors">
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#register">
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
