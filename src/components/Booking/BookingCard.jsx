import React from "react";

const BookingCard = (props) => {
  return (
    <div className="pt-5">
      <p className="flex md:gap-5 gap-2 items-center lg:text-[1.2vw] md:text-[2.5vw] text-[4vw]">
        <img
          src={props.icon}
          alt={props.service}
          className="lg:w-[2.5vw] md:w-[3.5vw] w-[6vw]"
        />

        <span className="font-bold ">{`Pet ${props.service}`}</span>
      </p>
      <p className="py-3 font-light lg:text-[1.2vw] md:text-[2vw] text-[2.8vw]">
        Diam amet eos at no eos sit lorem, amet rebum ispum clita stet
      </p>
    </div>
  );
};

export default BookingCard;
