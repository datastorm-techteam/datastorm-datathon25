import React from "react";

const Mission = () => {
  return (
    <div class="flex flex-col items-center justify-center w-screen h-full gap-4 text-yellow-600 bg-gradient-to-b from-red-950 to-stone-950">
      <div class="max-w-[60vw] mx-auto">
        <div>
          <h1>Our Mission</h1>
          <p>
            We aim to provide the best services to our customers and ensure
            their satisfaction.
          </p>
        </div>

        <div class="h-1 w-full border-b border-yellow-600 p-2">&nbsp;</div>

        <div class="flex flex-col py-2">
          <h1 className="">Why Participate?</h1>
          <ul className="">
            <li>Collaborate with like-minded individuals.</li>
            <li>Directly impact on transparency in the law-making process.</li>
            <li>Win exciting prizes and boost your resume.</li>
            <li>
              Attend workshops and learn more about data collection, analysis,
              and coding.
            </li>
          </ul>
        </div>

        <div class="h-1 w-full border-b border-yellow-600 p-2">&nbsp;</div>

        <div class="flex flex-col py-2">
          <h1>Who Can Join?</h1>
          <ul>
            <li>Students, professionals, and tech enthusiasts.</li>
            <li>Teams of 3-5 members.</li>
            <li>Open to all skill levels.</li>
          </ul>
        </div>

        <div class="h-1 w-full border-b border-yellow-600 p-2">&nbsp;</div>

        <div class="flex">
            <h1>Sponsors</h1>
        </div>
      </div>
    </div>
  );
};

export default Mission;
