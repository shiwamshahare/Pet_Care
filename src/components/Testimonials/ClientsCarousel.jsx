import React, { useState } from "react";
import TestiCards from "../Testimonials/TestiCards";

const ClientsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const imges = [
    "/Images/testimonial-1.jpg",
    "/Images/testimonial-2.jpg",
    "/Images/testimonial-3.jpg",
    "/Images/testimonial-4.jpg",
    "/Images/user.jpg",
  ];
  return (
    <>
      <div className="carousel relative md:pb-20 md:-mb-10 sm:w-full  h-full lg:mr-10 md:mr-3 lg:-ml-10 md:-ml-16">
        <div
          className={`md:flex grid lg:w-1/3 md:w-1/2  xl:gap-10 lg:gap-8 sm:gap-9  gap-5  transition-transform duration-500 ease-in-out `}
          style={{
            transform: `translateX(-${current * 100 + current * 10}%)`,
          }}
        >
          <TestiCards imges={imges} />
        </div>
        <div className="absolute hidden inset-0 sm:flex items-end gap-5  justify-center ">
          {imges.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`md:h-5 h-3 w-3 md:w-5 rounded-full transition-colors z-10 ${
                idx === current ? "bg-black" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientsCarousel;
