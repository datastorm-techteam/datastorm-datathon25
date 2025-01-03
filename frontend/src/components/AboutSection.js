import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">About the Hackathon</h2>
            <p className="text-center text-muted">Join us for an exciting 24-hour coding marathon to solve real-world challenges and innovate solutions.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h5>Why Participate?</h5>
            <p>
              - Collaborate with like-minded individuals.  
              - Build innovative projects.  
              - Win exciting prizes and recognition.
            </p>
          </Col>
          <Col md={6}>
            <h5>Who Can Join?</h5>
            <p>
              - Students, professionals, and tech enthusiasts.  
              - Teams of 3-5 members.  
              - Open to all skill levels.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
