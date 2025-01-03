import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center m-2">
            <p style={{ margin: 0 }}>
              &copy; 2025 | DataStorm
            </p>
            <p style={{ margin: 0 }}>
              Follow us on{" "}
              <a href="https://discord.com" className="text-primary">
                discord
              </a>{" "}
              and{" "}
              <a href="https://instagram.com" className="text-primary">
                instagram
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
