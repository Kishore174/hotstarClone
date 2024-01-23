// Carousel.js

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ slides, autoPlayInterval = 1900 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleCircleClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, autoPlayInterval]);

  return (
    <div className="relative overflow-hidden transparent rounded border border-white max-h-[500px]">
      <div
        className="flex transition-transform ease-out duration-400"
        style={{
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={slide.image}
              alt={`slide-${index}`}
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            <div className="absolute top-0 left-0 text-white font-bold text-2xl p-4">
              {slide.text}
            </div>
            {slide.kishore}
            <div className="absolute bottom-0 left-0 text-white p-4">
              {slide.additionalText}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
        {slides.map((s, index) => (
          <div
            onClick={() => handleCircleClick(index)}
            key={`circle-${index}`}
            className={`rounded-full w-5 h-5 ${
              index === currentSlide ? "bg-gray-300" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
