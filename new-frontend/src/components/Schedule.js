import React from "react";

import Header from "./Header";

import background from "../img/background.png";

const Schedule = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-stone-900 overflow-x-hidden"
        id="schedule"
        style={{
          backgroundImage: `url(${background})`,
          // height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="pt-20 border-x-2 border-yellow-600 shadow-2xl lg:px-[5rem] flex flex-col items-center justify-center min-h-[100vh] gap-4 max-w-[80vw] lg:max-w-[70vw] mx-auto text-yellow-600 bg-gradient-to-b from-red-950 to-stone-950">
          <div class="mx-auto">
            <div class="flex flex-col align-center items-center gap-4 py-5 text-stone-50">
              <h1 class="text-4xl font-semibold text-yellow-600">Schedule</h1>
              <div class="h-1 w-full border-b border-yellow-600 mb-3">
                &nbsp;
              </div>
              <div
                id="default-carousel"
                class="relative w-full min-w-[50vw] "
                data-carousel="slide"
              >
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                  <div class="duration-700 ease-in-out" data-carousel-item>
                    <img
                      src="https://placehold.co/100x400"
                      class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    />
                  </div>

                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <img
                      src="https://placehold.co/200x400"
                      class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    />
                  </div>

                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <img
                      src="https://placehold.co/300x400"
                      class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                    data-carousel-slide-to="3"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 5"
                    data-carousel-slide-to="4"
                  ></button>
                </div>
                <button
                  type="button"
                  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
