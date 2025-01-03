import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../css/SponsorSection.css';

import google from '../img/google.png';
import meta from '../img/meta.png';
import uber from '../img/uber.png';
import microsoft from '../img/microsoft.png';

const SponsorSection = () => {
  return (
    <section id="sponsors" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 py-3 fs-1">Our Sponsors</h2>
        <Row>
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
