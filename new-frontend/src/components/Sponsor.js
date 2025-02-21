import React from "react";

const Sponsor = () => {
  return (
    <div class="bg-red-950 border-x-2 border-yellow-600 shadow-2xl px-[1rem] lg:px-[5rem] flex flex-col items-center justify-center w-screen h-auto min-h-[100vh] gap-5 max-w-[80vw] lg:max-w-[70vw] mx-auto pt-20">
      <div class="flex flex-col py-5 text-stone-50">
            <h1 class="text-2xl font-semibold text-yellow-600">Sponsors</h1>
            <div class="h-1 w-full border-b border-yellow-600 mb-3">&nbsp;</div>
            <div class="w-full flex flex-wrap lg:flex-row justify-center items-center gap-5 mt-3">
              <img
                src="https://placehold.co/200x200"
                alt="Sponsors"
                class="rounded-xl h-[30vw] lg:h-[70%]"
              />
              <img
                src="https://placehold.co/200x200"
                alt="Sponsors"
                class="rounded-xl h-[30vw] lg:h-[70%]"
              />
              <img
                src="https://placehold.co/200x200"
                alt="Sponsors"
                class="rounded-xl h-[30vw] lg:h-[70%]"
              />
              <img
                src="https://placehold.co/200x200"
                alt="Sponsors"
                class="rounded-xl h-[30vw] lg:h-[70%]"
              />
            </div>
          </div>
    </div>
  );
};

export default Sponsor;
