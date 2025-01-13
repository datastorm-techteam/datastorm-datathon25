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
          <Col className="text-center">
            <div className="footer-container rounded p-1 d-flex flex-col text-secondary">
              <p style={{ margin: 0 }}>
                <a href="https://discord.com" className="text-primary mx-2">
                  <img
                    src={discord}
                    alt="Discord"
                    style={{ width: "18px", height: "18px" }}
                  />
                </a>
                <a href="https://instagram.com" className="text-primary mx-2">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "15px", height: "15px" }}
                  />
                </a>
              </p>
              <p style={{ margin: 0, marginLeft: "1em" }}>&copy; 2025 DataStorm</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
