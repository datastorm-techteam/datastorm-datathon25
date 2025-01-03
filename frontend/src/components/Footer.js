import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Hackathon 2025. All Rights Reserved.</p>
            <p>Follow us on <a href="https://twitter.com" className="text-primary">Twitter</a> and <a href="https://linkedin.com" className="text-primary">LinkedIn</a>.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
