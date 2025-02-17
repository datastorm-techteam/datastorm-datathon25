import React from "react";
import { Container, Button } from "react-bootstrap";
import "../css/HeroSection.css";

import background from "../img/background.png";
import background2 from "../img/background2.png";
import desert from "../img/desert.jpg";
import img1 from "../img/img1.png";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex flex-column align-items-center text-center"
      id="home"
      style={{
        backgroundImage: `url(${background2})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="px-3 pt-3 my-3 text-center d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="p-5 rounded-3 shadow-lg bg-black bg-opacity-50">
          <div className="container px-5 d-flex text-container">
            <h1 className="text-white display-2 mx-4 fw-bold">Welcome to</h1>
            <h1 className="text-white display-2 fw-bold name-hero">
              {" DataStorm '25 "}
              <div className="highlight"></div>
            </h1>
          </div>
          <div className="col-lg-6 mx-auto">
            <p className="text-white lead mb-4">Build. Innovate. Compete.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button
                type="button"
                class="btn btn-outline-danger text-white lead mb-3 px-3 py-2"
              >
                Register Today!
              </button>
            </div>
          </div>
          <div
            className="overflow-hidden border-bottom"
            style={{ maxHeight: "30vh" }}
          >
            <div className="container px-5 ">
              <img
                src={img1}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
