import React from "react";
import { Container, Button } from "react-bootstrap";
import "../css/HeroSection.css";

import background from "../img/background.png";
import frame from "../img/frame.png";
import frames from "../img/frames.png";
import desert from "../img/desert.jpg";
import img1 from "../img/img1.png";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex flex-column align-items-center text-center"
      id="home"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   height: "100vh",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   // backgroundAttachment: "fixed",
      // }}
    >
      {/* <img src={frame} className="frame" alt="Frame"/> */}
      <div
        className="px-3 pt-3 my-3 text-center d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="title p-5 rounded-3">
        
          <div className="container px-5 d-flex flex-column text-container">
          
            <h1 className="title-sub text-white display-2 mx-4 fw-bold">Welcome to</h1>
            <h1 className="title-text text-white display-2 fw-bold name-hero">
              {" DataStorm '25 "}
              <div className="highlight"></div>
            </h1>
          </div>
          <div className="col-lg-6 mx-auto flex justify-content-center align-items-center">
            <p className="text-white lead mb-4">Build. Innovate. Compete.</p>
            <div className="d-grid gap-2 flex justify-content center">
              <button
                type="button"
                class="btn btn-outline-danger text-white lead mb-3 px-3 py-2"
              >
                Register Today!
              </button>
            </div>
          </div>
          {/* <div
            className="overflow-hidden border-bottom border-danger"
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
