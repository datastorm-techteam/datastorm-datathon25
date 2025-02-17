import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Footer.css";

import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

import background from "../img/background.png";
import background2 from "../img/background2.png";

const Footer = () => {
  return (
    <footer
      className="footer-background text-white p-5"
      // style={{
      //   backgroundImage: `url(${background2})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="footer-container rounded p-1 d-flex flex-col text-secondary gap-3">
              <p style={{ margin: 0 }}>
                <a href="https://discord.com" className="text-primary mx-2">
                  <IoLogoDiscord className="text-secondary fs-4" />
                </a>
                <a href="https://instagram.com" className="text-primary mx-2">
                  <FaInstagramSquare className="text-secondary fs-4" />
                </a>
                <a href="https://google.com" className="text-primary mx-2">
                  <GoLaw className="text-secondary fs-4" />
                </a>
              </p>
              <p style={{ margin: 0, marginLeft: "1rem" }}>
                &copy; 2025 InsightLegi DataStorm
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
