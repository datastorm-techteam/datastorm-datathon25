import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-4 py-5">
          <Col>
            <h2 className="text-center fs-1">About the Hackathon</h2>
            <p className="text-center text-muted">
              Join us for an exciting 24-hour coding marathon to solve
              real-world challenges and innovate solutions.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h5>Why Participate?</h5>
            <ul>
              <li>Collaborate with like-minded individuals.</li>
              <li>Build innovative projects.</li>
              <li>Win exciting prizes and recognition.</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Who Can Join?</h5>
            <ul>
              <li>Students, professionals, and tech enthusiasts.</li>
              <li>Teams of 3-5 members.</li>
              <li>Open to all skill levels.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="py-2 border-bottom ">Icon grid</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 ">
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
