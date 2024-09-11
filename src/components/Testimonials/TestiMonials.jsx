import React from "react";
import Title from "../TextCompo/Title";
import ClientsCarousel from "./ClientsCarousel";

const TestiMonials = () => {
  return (
    <div className="xl:p-16 py-10 p-10 overflow-hidden grid w-full place-items-center bg-slate-200/80 h-full">
      <div className="text-center">
        <Title title="Testimonial" />
        <h1 className="lg:text-[5vw] md:text-[6vw] text-[9vw] tracking-wide font-black leading-none">
          <span>Our Client</span> <span className="text-[#ff5000] ">Says</span>
        </h1>
      </div>
      <div className="lg:w-5/6 xl:w-2/3 h-full sm:p-10 pt-10 sm:ml-10 flex items-center justify-center overflow-hidden ">
        <ClientsCarousel />
      </div>
    </div>
  );
};

export default TestiMonials;
