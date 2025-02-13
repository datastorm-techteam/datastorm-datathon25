import React from "react";
import { Container } from "react-bootstrap";

import "../css/ScheduleSection.css";

import desert from "../img/desert.jpg";
import background from "../img/background.png";
import background2 from "../img/background2.png";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-5" style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}>
      
      <Container className="p-5 rounded-3 shadow-lg bg-black bg-opacity-50">
      <h2 className="py-5 fs-1 text-light text-center">Schedule</h2>
        <div id="scheduleCarousel" className="carousel slide d-flex">
          <div className="d-flex flex-row">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#scheduleCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <div className="carousel-inner text-light">
              {/* Day 1 */}
              <div className="carousel-item active">
                <div className="">
                  <h5>Day 1</h5>
                  <ul className="list-group list-group-flush p-3 bg-white rounded-3">
                    <li className="list-group-item">
                      4:30 PM - Student Check-in - Horizon 1st Floor
                    </li>
                    <li className="list-group-item">
                      6:00 PM - Opening Ceremony - Atrium
                    </li>
                    <li className="list-group-item">
                      7:00 PM - Dinner - Horizon 2nd Floor
                    </li>
                    <li className="list-group-item">
                      8:00 PM - Brainstorming Ideas/ Team Matchmaker - Horizon
                      2008
                    </li>
                    <li className="list-group-item">
                      8:30 PM - Peraton: Intro to React - Horizon 2017
                    </li>
                    <li className="list-group-item">
                      9:00 PM - Intro to GitHub - Horizon 2009
                    </li>
                    <li className="list-group-item">
                      9:30 PM - Microsoft x Cloudforce: Track Learning Session -
                      Horizon 2008
                    </li>
                    <li className="list-group-item">
                      10:30 PM - Python Web Development: Django Quickstart -
                      Horizon 2017
                    </li>
                    <li className="list-group-item">
                      11:15 PM - Serverless Clouds: Modal and Beam.cloud -
                      Horizon 2008
                    </li>
                  </ul>
                </div>
              </div>

              {/* Day 2 */}
              <div className="carousel-item">
                <div className="py-3">
                  <h5>Day 2</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      8:00 AM - Breakfast - Horizon 2nd Floor
                    </li>
                    <li className="list-group-item">
                      9:00 AM - AWS: Intro to AWS - Horizon 2016
                    </li>
                    <li className="list-group-item">
                      10:00 AM - Raja Yoga - Horizon 1014
                    </li>
                    <li className="list-group-item">
                      10:00 AM - Sahaja Yoga Meditation - Horizon 1012
                    </li>
                    <li className="list-group-item">
                      10:00 AM - Resume Workshop with CEO of MyTurn - Horizon
                      2017
                    </li>
                    <li className="list-group-item">
                      11:00 AM - Salesforce: Tableau Workshop - Horizon 2016
                    </li>
                    <li className="list-group-item">
                      11:00 AM - MetroStar: Intro to Computer Vision Track -
                      Horizon 2008
                    </li>
                    <li className="list-group-item">
                      12:00 PM - Lunch - Horizon 2nd Floor
                    </li>
                    <li className="list-group-item">
                      12:00 PM - Amazon x Codepath Lunch n’ Learn Q&A - Horizon
                      Atrium
                    </li>
                    <li className="list-group-item">
                      1:00 PM - Microsoft: Coding with Github Copilot - Horizon
                      2016
                    </li>
                    <li className="list-group-item">
                      2:00 PM - Arcfield: Technical Workshop - Horizon 2017
                    </li>
                    <li className="list-group-item">
                      2:00 PM - Peraton: Info Session - Horizon 2008
                    </li>
                    <li className="list-group-item">
                      2:30 PM - Mason Illustrators: Animation and Drawing -
                      Horizon 2016
                    </li>
                    <li className="list-group-item">
                      3:00 PM - AI Panel Speaker Event - Horizon Atrium
                    </li>
                    <li className="list-group-item">
                      3:30 PM - 3D Printing - The MIX
                    </li>
                    <li className="list-group-item">
                      4:30 PM - Arduino - The MIX
                    </li>
                    <li className="list-group-item">
                      5:30 PM - Soldering - The MIX
                    </li>
                    <li className="list-group-item">
                      6:00 PM - Dinner with Microsoft x Cloudforce Networking
                      Opportunity - Horizon Atrium
                    </li>
                    <li className="list-group-item">
                      6:30 PM - Esports Presents: Smash Tourney - Horizon 2017
                    </li>
                    <li className="list-group-item">
                      7:00 PM - Microsoft: LinkedIn Guide - Horizon Atrium
                    </li>
                    <li className="list-group-item">
                      8:00 PM - How to Run a Hackathon - Horizon 2008
                    </li>
                    <li className="list-group-item">
                      10:00 PM - Initial Devpost Submission Due
                    </li>
                  </ul>
                </div>
              </div>

              {/* Day 3 */}
              <div className="carousel-item">
                <div className="py-3">
                  <h5>Day 3</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      8:00 AM - Submission Deadline
                    </li>
                    <li className="list-group-item">
                      10:00 AM - Project Presentations
                    </li>
                    <li className="list-group-item">
                      12:00 PM - Awards Ceremony
                    </li>
                    <li className="list-group-item">
                      8:00 AM Breakfast Horizon Atrium
                    </li>
                    <li className="list-group-item">
                      10:00 AM Final Devpost Submission
                    </li>
                    <li className="list-group-item">
                      11:00 AM Judging Starts Horizon 2009, 2014, 2016
                    </li>
                    <li className="list-group-item">
                      1:00 PM Judging Ends, Lunch Starts Horizon Atrium
                    </li>
                    <li className="list-group-item">
                      2:00 PM Closing Ceremony Starts Horizon Atrium
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Controls */}

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#scheduleCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#scheduleCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#scheduleCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#scheduleCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScheduleSection;
