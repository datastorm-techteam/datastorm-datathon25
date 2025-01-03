import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const SponsorSection = () => {
  return (
    <section id="sponsors" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Sponsors</h2>
        <Row>
          <Col xs={6} md={3} className="text-center">
            <Image src="/path-to-sponsor1-logo.png" fluid />
          </Col>
          <Col xs={6} md={3} className="text-center">
            <Image src="/path-to-sponsor2-logo.png" fluid />
          </Col>
          <Col xs={6} md={3} className="text-center">
            <Image src="/path-to-sponsor3-logo.png" fluid />
          </Col>
          <Col xs={6} md={3} className="text-center">
            <Image src="/path-to-sponsor4-logo.png" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SponsorSection;
