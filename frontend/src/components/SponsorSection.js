import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "../css/SponsorSection.css";

import google from "../img/google.png";
import meta from "../img/meta.png";
import uber from "../img/uber.png";
import microsoft from "../img/microsoft.png";

import frames from "../img/frames.png";
import desert from "../img/desert.jpg";
import background from "../img/background.png";

const SponsorSection = () => {
  return (
    <section
      id="sponsors"
      className="py-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      
      <Container className="py-5 p-5 rounded-3 shadow-lg bg-black bg-opacity-50">
      <img src={frames} className="frame" alt="Frame" />
        <h2 className="text-center text-light mb-4 fs-1">Our Sponsors</h2>
        <Row className="p-5">
          <Col xs={6} md={3} className="text-center sponsor-img">
            <Image src={google} fluid />
          </Col>
          <Col xs={6} md={3} className="text-center sponsor-img">
            <Image src={meta} fluid />
          </Col>
          <Col xs={6} md={3} className="text-center sponsor-img">
            <Image src={uber} fluid />
          </Col>
          <Col xs={6} md={3} className="text-center sponsor-img">
            <Image src={microsoft} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SponsorSection;
