import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import desert from "../img/desert.jpg";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

import "../css/AboutSection.css";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-light"
      
    >
      <Container>
        <Row className="mb-4 justify-content-center">
          <Col>
            <h2 className="text-center text-danger fs-1 my-5">
              About DataStorm'25 Datathon
            </h2>
            <p className="text-center text-primary mb-5">
              A datathon is like a marathon - but with data. You’ll spend three
              days with 200 students on a fun and exciting project to create the
              first legislative tracker for legal system penalties.
            </p>
            <p></p>
            <p className="text-center text-primary">
              Our Mission: We are developing InsightLegi, the first
              comprehensive platform that tracks fines and fees legislation
              across states and municipalities.
            </p>
          </Col>
        </Row>

        <div className="divider"></div>

        <Row className="flex align-items-start">
          <Col md={6}>
            <h5 className="text-danger">Why Participate?</h5>
            <ul className="text-primary">
              <li>Collaborate with like-minded individuals.</li>
              <li>
                Directly impact on transparency in the law-making process.
              </li>
              <li>Win exciting prizes and boost your resume.</li>
              <li>
                Attend workshops and learn more about data collection, analysis,
                and coding.
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h5 className="text-danger">Who Can Join?</h5>
            <ul className="text-primary">
              <li>Students, professionals, and tech enthusiasts.</li>
              <li>Teams of 3-5 members.</li>
              <li>Open to all skill levels.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div class="rounded-0">
        <div class="row m-5 justify-content-center gap-5">
          <div class="col-md-4">
            <img src={desert} class="img-fluid rounded" alt="..."></img>
          </div>
          <div class="col-md-5">
            <div class="card-body text-primary">
              <h5 class="card-title my-3">What is the DataStorm?</h5>
              <p class="card-text">
                DataStorm is a groundbreaking 3-day datathon where students,
                faculty, and industry leaders will come together to track
                legislative changes that will shape the future of equitable
                lawmaking.
              </p>
            </div>
          </div>
        </div>
        <div class="row m-5 justify-content-center gap-5">
          <div class="col-md-5">
            <div class="card-body text-primary">
              <h5 class="card-title my-3">
                “Creating Data-Driven Impact Through Community to Foster
                Innovation, Transparency, and Change.”
              </h5>
              <p class="card-text">
                DataStorm was born out of the need to bring transparency to
                financial penalties that impact millions of people, especially
                those in under-resourced communities. Despite the immense role
                fines and fees play in the justice system, there isn’t a unified
                platform to track how these laws evolved. Join us in creating
                it!
              </p>
              {/* <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div class="col-md-4">
            <img src={desert} class="img-fluid rounded" alt="..."></img>
          </div>
        </div>
      </div>
      <div className="container my-5 px-5 py-3 rounded-3 shadow-lg bg-black bg-opacity-50" id="icon-grid">
        <h2 className="border-bottom ">Questions?</h2>
        <div className="justify-content-evenly row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-5 ">
          <a
            href="https://discord.com"
            className="m-1 d-flex align-items-center flex-column rounded social"
          >
            <IoLogoDiscord className="text-light fs-2"/>
            <p className="social-text text-light" style={{ margin: 0 }}>
              Join our Discord!
            </p>
          </a>

          <a
            href="https://instagram.com"
            className="m-1 d-flex align-items-center flex-column p-3 rounded social"
          >
            <FaInstagramSquare className="text-light fs-2"/>
            <p className="social-text text-light" style={{ margin: 0 }}>
              Join our Instagram!
            </p>
          </a>

          <a
            href="https://google.com"
            className="m-1 d-flex align-items-center flex-column p-3 rounded social"
          >
            <GoLaw className="text-light fs-2"/>
            <p className="social-text text-light" style={{ margin: 0 }}>
              Join our Organization!
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
