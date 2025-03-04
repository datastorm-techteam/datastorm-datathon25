import React, { useState } from "react";

import "../css/QuestionSection.css";

import desert from "../img/desert.jpg";
import background from "../img/background.png";

const QuestionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is DataStorm?",
      answer:
        "DataStorm is a hackathon that provides a platform for data enthusiasts to showcase their skills and compete against each other.",
    },
    {
      question: "Who is eligible to apply?",
      answer:
        "DataStorm is open to all students who are currently enrolled in an undergraduate or postgraduate program.",
    },
    {
      question: "When is the deadline to apply?",
      answer: "The deadline to apply for DataStorm is 15th March 2025.",
    },
    {
      question: "How many members can be in a team?",
      answer: "Each team can have a minimum of 3 and a maximum of 5 members.",
    },
    {
      question: "How can I contact the organizers?",
      answer:
        "You can contact the organizers by sending an email to datastorm@hackathon.com.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="hero-section d-flex flex-column align-items-center text-center"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="container my-5 py-5 text-light p-5 rounded-3 shadow-lg bg-black bg-opacity-50">
        <h2 className="mb-5 fs-1">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {questions.map((item, index) => (
            <div
              key={index}
              className="card border-0 mb-3 shadow-sm rounded card-question"
            >
              <div
                className="card-header border-0"
                id={`heading${index}`}
                onClick={() => toggleQuestion(index)}
                style={{ cursor: "pointer" }}
              >
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-white"
                    type="button"
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                    style={{ pointerEvents: "none", textDecoration: "none" }}
                  >
                    <p>{item.question}</p>
                  </button>
                </h5>
              </div>
              <div
                id={`collapse${index}`}
                className={`collapse ${activeIndex === index ? "show" : ""}`}
                aria-labelledby={`heading${index}`}
                data-parent="#faqAccordion"
              >
                <div className="card-body card-answer text-white rounded px-4">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
