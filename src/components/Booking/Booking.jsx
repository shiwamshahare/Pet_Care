import React from "react";
import BookingForm from "./BookingForm";
import BookingCard from "./BookingCard";
import Title from "../TextCompo/Title";

const Booking = () => {
  return (
    <div className="lg:px-28  lg:grid flex flex-col-reverse  bg-slate-200/80 grid-cols-5">
      <div className="col-span-2">
        <BookingForm />
      </div>
      <div className="col-span-3  px-12 sm:py-10 py-5 sm:px-20">
        <Title title="Going for a vacation?" />

        <h1 className="lg:text-[4.5vw] md:text-[6vw] text-[8vw] font-black">
          Book For <span className="text-[#FF5000]">Your Pet</span>
        </h1>
        <p className="lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] font-light">
          Labore vero lorem eos sed aliquy ispum aliquy sed. Vero dolore dolore
          takima ipsum lorem rebum
        </p>
        <div className="grid grid-cols-2 py-3 md:gap-x-16 gap-x-5 w-full text-justify">
          <BookingCard icon="/Icons/home.svg" service="Boarding" />
          <BookingCard icon="/Icons/fishfood.svg" service="Feeding" />
          <BookingCard icon="/Icons/hair.svg" service="Grooming" />
          <BookingCard icon="/Icons/train.svg" service="Training" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
