import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Event Agenda</h2>
        <Row>
          <Col md={4}>
            <h5>Day 1</h5>
            <ul>
              <li>9:00 AM - Check-in</li>
              <li>10:00 AM - Opening Ceremony</li>
              <li>11:00 AM - Hacking Begins</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Day 2</h5>
            <ul>
              <li>8:00 AM - Submission Deadline</li>
              <li>10:00 AM - Project Presentations</li>
              <li>12:00 PM - Awards Ceremony</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AgendaSection;
