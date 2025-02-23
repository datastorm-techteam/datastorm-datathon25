import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import background from "../img/background.png";

const images = [
  "https://placehold.co/1000x500",
  "https://placehold.co/1000x600",
  "https://placehold.co/1000x700",
  "https://placehold.co/1000x800",
];

const Schedule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto");
  const imageRefs = useRef([]);

  useEffect(() => {
    if (imageRefs.current[currentIndex]) {
      setContainerHeight(`${imageRefs.current[currentIndex].offsetHeight}px`);
    }
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Header />
      <div
        className="bg-stone-900 overflow-x-hidden"
        id="schedule"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="pt-20 border-x-2 border-yellow-600 shadow-2xl lg:px-[5rem] flex flex-col items-center min-h-[100vh] gap-4 max-w-[80vw] lg:max-w-[70vw] mx-auto text-yellow-600 bg-gradient-to-b from-red-950 to-stone-950">
          <div className="flex flex-col items-center gap-4 py-5 text-stone-50 w-[50vw] mt-5">
            <h1 className="text-4xl font-semibold text-yellow-600">Schedule</h1>
            <div className="h-1 w-full border-b border-yellow-600 mb-3" />

            <div className="relative w-full min-w-[50vw]" style={{ height: containerHeight }}>
              {/* Carousel Images */}
              <div className="relative w-full transition-all duration-500">
                {images.map((img, index) => (
                  <img
                    key={index}
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className={`absolute rounded-xl top-0 left-1/2 transform -translate-x-1/2 transition-opacity ${
                      index === currentIndex ? "opacity-100 relative" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute z-30 flex justify-center w-full bottom-5 space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full border-2 border-yellow-600 transition-colors duration-300 ${
                      index === currentIndex ? "bg-yellow-600" : "bg-transparent"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
                aria-label="Previous Slide"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 6 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                  </svg>
                </span>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
                aria-label="Next Slide"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 6 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
