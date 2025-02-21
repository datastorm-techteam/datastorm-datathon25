import React from "react";

import background from "../img/background.png";

const Main = () => {
  return (
    <div class="flex flex-col items-center justify-center w-screen h-[calc(100vh-200px)] gap-4 max-w-[60vw] mx-auto pt-[220px]">
      <h1 class="text-4xl text-yellow-600">InsightLegi DataStorm 25</h1>

      <div class="h-1 w-full border-b border-yellow-600">&nbsp;</div>

      <img src={background} alt="Logo" class="w-[100vw] rounded-2xl shadow-2xl" />

      {/* <div class="h-1 w-full border-b border-yellow-600">&nbsp;</div> */}

      <p class="text-yellow-600 text-xl">
        A datathon is like a marathon - but with data. You’ll spend three days
        with 200 students on a fun and exciting project to create the first
        legislative tracker for legal system penalties. Register now!
      </p>
    </div>
  );
};

export default Main;
