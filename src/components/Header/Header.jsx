import React from "react";
import Faqs from "./Faqs";
import Visit from "./Visit";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="relative flex sm:flex-col  sm:justify-center justify-between sm:items-center sm:bg-white bg-slate-200/80">
        <Faqs />
        <div className="w-full lg:ps-20 md:ps-12 sm:ps-8 ps-6 my-2">
          <div className="flex justify-between items-center">
            <h1 className="md:text-[3vw] text-[5vw] font-extrabold">
              <span className="text-[#FF5000]">Pet</span>
              <span>Lover</span>
            </h1>
            <span className="hidden sm:flex lg:pe-14 md:pe-8 sm:pe-6 pe-4">
              <Visit title="Opening Hours" subtitle="8.00AM - 9.00PM" />
              <span className="border-r-2  sm:my-3 my-1"></span>
              <Visit title="Email Us" subtitle="info@example.com" />
              <span className="border-r-2  sm:my-3 my-1"></span>
              <Visit title="Call Us" subtitle="+012 345 6789" />
            </span>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
