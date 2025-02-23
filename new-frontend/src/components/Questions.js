import React from "react";

import background from "../img/background.png";

const Questions = () => {
  return (
    <div
      className="bg-stone-900 overflow-x-hidden"
      id="mission"
      style={{
        backgroundImage: `url(${background})`,
        // height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="py-20 border-x-2 border-yellow-600 shadow-2xl px-[1rem] lg:p-[5rem] flex flex-col items-center justify-center gap-4 max-w-[80vw] lg:max-w-[70vw] mx-auto text-yellow-600 bg-gradient-to-b from-red-950 to-stone-950">
        <div class="min-w-[60vw] max-w-[70vw] mx-auto font-sans">
          <div class="flex flex-col align-center gap-4 py-5 text-stone-50">
            <h1 class="text-2xl font-semibold text-yellow-600">
              Frequently Asked Questions
            </h1>
            <div class="h-1 w-full border-b border-yellow-600 mb-3">&nbsp;</div>
          </div>

          <div class="flex flex-col py-1 lg:py-5 gap-1 text-stone-50">
            <h1 class="text-md lg:text-2xl font-semibold text-yellow-600">
              "What is DataStorm?"
            </h1>
            <p>
              DataStorm is a hackathon that provides a platform for data
              enthusiasts to showcase their skills and compete against each
              other.
            </p>
          </div>

          <div class="flex flex-col py-1 lg:py-5 gap-1 text-stone-50">
            <h1 class="text-md lg:text-2xl font-semibold text-yellow-600">
              "Who is eligible to apply?"
            </h1>
            <p>
              DataStorm is open to all students who are currently enrolled in an
              undergraduate or postgraduate program.
            </p>
          </div>

          <div class="flex flex-col py-1 lg:py-5 gap-1 text-stone-50">
            <h1 class="text-md lg:text-2xl font-semibold text-yellow-600">
              "When is the deadline to apply?"
            </h1>
            <p>The deadline to apply for DataStorm is 15th March 2025.</p>
          </div>

          <div class="flex flex-col py-1 lg:py-5 gap-1 text-stone-50">
            <h1 class="text-md lg:text-2xl font-semibold text-yellow-600">
              "How many members can be in a team?"
            </h1>
            <p>Each team can have a minimum of 3 and a maximum of 5 members.</p>
          </div>

          <div class="flex flex-col py-1 lg:py-5 gap-1 text-stone-50">
            <h1 class="text-md lg:text-2xl font-semibold text-yellow-600">
              "How can I contact the organizers?"
            </h1>
            <p>
              You can contact the organizers by sending an email to
              datastorm@hackathon.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
