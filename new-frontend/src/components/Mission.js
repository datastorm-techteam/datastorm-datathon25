import React from "react";

import background from "../img/background.png";

const Mission = () => {
  return (
    <div
      className="bg-stone-900"
      id="mission"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="border-x-2 border-yellow-600 shadow-2xl px-[1rem] lg:px-[5rem] flex flex-col items-center justify-center w-screen h-auto min-h-[100vh] gap-4 max-w-[80vw] lg:max-w-[70vw] mx-auto text-yellow-600 bg-gradient-to-b from-red-950 to-stone-950">
        <div class="min-w-[60vw] max-w-[70vw] lg:mx-auto font-sans">
          <div class="flex flex-col py-5 text-stone-50">
            <h1 class="text-2xl font-semibold text-yellow-600">Our Mission</h1>
            <div class="h-1 w-full border-b border-yellow-600 mb-3">&nbsp;</div>
            <div class="flex flex-col lg:flex-row justify-center items-center gap-5">
              <p class="lg:text-lg">
                We are developing InsightLegi, the first comprehensive platform
                that tracks fines and fees legislation across states and
                municipalities.
              </p>
              <img
                src="https://placehold.co/200x100"
                alt="Logo"
                class="w-[70%] rounded-2xl shadow-4xl"
              />
            </div>
          </div>

          <div class="flex flex-col py-5 text-stone-50">
            <h1 class="text-2xl font-semibold text-yellow-600">
              Why Participate?
            </h1>
            <div class="h-1 w-full border-b border-yellow-600 mb-3">&nbsp;</div>
            <ul className="list-[upper-roman] pl-7 lg:text-lg">
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
          </div>

          <div class="flex flex-col py-5 text-stone-50">
            <h1 class="text-2xl font-semibold text-yellow-600">
              Who Can Join?
            </h1>
            <div class="h-1 w-full border-b border-yellow-600 mb-3">&nbsp;</div>
            <ul class="list-[upper-roman] pl-7 lg:text-lg">
              <li>Students, professionals, and tech enthusiasts.</li>
              <li>Teams of 3-5 members.</li>
              <li>Open to all skill levels.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
