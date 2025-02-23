import React from "react";

import Mission from "./Mission";
import Questions from "./Questions";

import background from "../img/background.png";

const Main = () => {
  return (
    <div class="bg-gradient-to-b from-red-950 to-stone-950 border-x-2 border-yellow-600 shadow-2xl px-[1rem] lg:px-[5rem] flex flex-col items-center justify-center h-auto min-h-[100vh] gap-5 max-w-[80vw] lg:max-w-[70vw] mx-auto pt-20">
      <h1 class="text-4xl lg:text-6xl bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">InsightLegi DataStorm 25</h1>

      <div class="h-1 w-full border-b border-yellow-600">&nbsp;</div>

      <img src="https://placehold.co/700x400" alt="Logo" class="w-[70%] rounded-2xl shadow-4xl" />

      <div class="h-1 w-full border-b border-yellow-600">&nbsp;</div>

      <p class="bg-gradient-to-br from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-lg lg:text-2xl">
        A datathon is like a marathon - but with data. You’ll spend three days
        with 200 students on a fun and exciting project to create the first
        legislative tracker for legal system penalties. Register now!
      </p>
    </div>
  );
};

export default Main;
