import React from "react";

const Sponsor = () => {
  return (
    <div class="overflow-x-hidden bg-gradient-to-b from-stone-950 to-red-950 border-x-2 border-yellow-600 shadow-2xl px-[1rem] lg:p-[5rem] flex flex-col items-center justify-center h-auto gap-5 max-w-[80vw] lg:max-w-[70vw] mx-auto pt-20">
      <div class="flex flex-col py-5 text-stone-50 font-sans ">
        <div class="min-w-[70vw] px-[5rem] lg:mx-auto">
          <h1 class="text-2xl font-semibold bg-gradient-to-br from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Sponsors</h1>
          <div class="h-1 w-full border-b border-yellow-600 my-5">&nbsp;</div>
          <div class="w-full flex flex-wrap lg:flex-row justify-center items-center gap-5 mt-10">
            <img
              src="https://placehold.co/250x250"
              alt="Sponsors"
              class="rounded-xl h-[30vw] lg:h-[75%]"
            />
            <img
              src="https://placehold.co/250x250"
              alt="Sponsors"
              class="rounded-xl h-[30vw] lg:h-[75%]"
            />
            <img
              src="https://placehold.co/250x250"
              alt="Sponsors"
              class="rounded-xl h-[30vw] lg:h-[75%]"
            />
            <img
              src="https://placehold.co/250x250"
              alt="Sponsors"
              class="rounded-xl h-[30vw] lg:h-[75%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
