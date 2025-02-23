import React from "react";

import background from "../img/background.png";

const Mission = () => {
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
      <div className="border-x-2 border-yellow-600 shadow-2xl px-[1rem] lg:p-[5rem] flex flex-col items-center justify-center gap-4 max-w-[80vw] lg:max-w-[70vw] mx-auto text-yellow-600 bg-gradient-to-b from-stone-950 to-red-950">
        <div class="min-w-[60vw] max-w-[70vw] lg:mx-auto font-sans">
          <div class="flex flex-col py-5 text-stone-50">
            <h1 class="text-2xl font-semibold bg-gradient-to-br from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Our Mission</h1>
            <div class="h-1 w-full border-b border-yellow-600 my-3">&nbsp;</div>
            <div class="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] justify-center items-center gap-5 my-5">
              <p class="lg:text-lg">
                DataStorm is a groundbreaking 3-day datathon where students,
                faculty, and industry leaders will come together to track
                legislative changes that will shape the future of equitable
                lawmaking.
              </p>
              <img
                src="https://placehold.co/200x100"
                alt="Logo"
                class="w-[70%] rounded-2xl shadow-4xl justify-self-center"
              />
            </div>
            <div class="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] justify-center items-center gap-5">
              <img
                src="https://placehold.co/200x100"
                alt="Logo"
                class="w-[70%] rounded-2xl shadow-4xl justify-self-center"
              />
              <p class="lg:text-lg">
                We are developing InsightLegi, the first comprehensive platform
                that tracks fines and fees legislation across states and
                municipalities.
              </p>
            </div>
          </div>

          <div class="flex flex-col py-5 text-stone-50">
            <h1 class="text-2xl font-semibold bg-gradient-to-br from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Why Participate?
            </h1>
            <div class="h-1 w-full border-b border-yellow-600 my-3">&nbsp;</div>
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
            <h1 class="text-2xl font-semibold bg-gradient-to-br from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Who Can Join?
            </h1>
            <div class="h-1 w-full border-b border-yellow-600 my-3">&nbsp;</div>
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
