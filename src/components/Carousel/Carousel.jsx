import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const imgs = ["/Images/carousel-2.jpg", "/Images/carousel-1.jpg"];

  const prev = () => {
    setCurrent((current) => (current === 0 ? imgs.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current === imgs.length - 1 ? 0 : current + 1));
  };
  return (
    <div className="carousel relative w-full h-full flex overflow-hidden text-white">
      <div
        className="w-full flex transition duration-500 ease-[cubic-bezier(0.61, 1, 0.88, 1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imgs.map((item, idx) => (
          <img
            src={item}
            alt={idx}
            className="w-full object-cover flex-shrink-0"
            key={idx}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between md:px-20 sm:px-12 px-6 text-[3vw] font-extrabold z-10">
        <button
          onClick={prev}
          className="bg-[#ff5000] rounded-lg opacity-50 hover:opacity-100"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={next}
          className="bg-[#ff5000] rounded-lg opacity-50 hover:opacity-100"
        >
          <GrFormNext />
        </button>
      </div>

      <div className="absolute inset-0 w-full flex justify-center items-center flex-col h-full leading-none mt-5 md:mt-0">
        <h6 className="md:text-[2vw] text-[3vw] font-semibold">
          Best Pet Services
        </h6>
        <h1 className="md:text-[5.5vw] text-[7vw] font-black tracking-wide">
          Pet Spa & Grooming
        </h1>
        <p className="md:text-[1.5vw] text-[2.5vw] md:pt-5 pt-3 font-bold">
          Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat
        </p>
        <span className="flex md:gap-2  md:py-7 py-2 md:text-[1.5vw] text-[2vw]">
          <button className="bg-[#ff5000] rounded-md mx-1 md:m-0 md:px-8 px-4 md:py-4 py-1 text-white font-semibold">
            Book Now
          </button>
          <button className="bg-green-500 rounded-md mx-1 md:m-0 md:px-8 px-4 md:py-4 py-2 text-black font-semibold">
            Learn More
          </button>
        </span>
      </div>

      <div className="absolute inset-0 flex items-end sm:mb-5 mb-1 sm:gap-5 gap-2 justify-center ">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`md:h-5 h-3 w-3 md:w-5 rounded-full transition-colors z-10 ${
              idx === current ? "bg-neutral-50" : "bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
