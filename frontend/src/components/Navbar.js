import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent p-3">
      <div className="container container-nav p-1">
        <a className="navbar-brand name-nav px-3" href="#home">
          DataStorm '25
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
            <li className="nav-item ">
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
