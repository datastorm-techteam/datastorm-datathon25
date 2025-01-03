import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Footer.css";

import discord from "../img/discord.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <footer className="footer-background text-white">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center m-1">
            <div className="footer-container rounded p-1 m-1 d-flex" style={{justifyContent: "space-evenly"}}>
              <p style={{ margin: 0 }}>&copy; 2025 | DataStorm</p>
              <p style={{ margin: 0 }}>
                Follow us on{" "}
                <a href="https://discord.com" className="text-primary m-1">
                  <img src={discord} alt="Discord" style={{ width: "18px", height: "18px" }} />
                </a>{" "}
                and{" "}
                <a href="https://instagram.com" className="text-primary m-1">
                  <img src={instagram} alt="Instagram" style={{ width: "15px", height: "15px" }} />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
