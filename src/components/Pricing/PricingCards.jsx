import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const PricingCards = (props) => {
  return (
    <div className="grid w-full gap-5 bg-white">
      <div className="relative h-full">
        <img src={props.src} alt={props.plan} className="w-full" />
        <span className="absolute backdrop-brightness-50 h-full inset-0 w-full flex flex-col justify-center items-center">
          <span
            className={`lg:text-[3vw] md:text-[4vw] text-[8vw] leading-none font-semibold ${
              props.price === 99 ? "text-green-500" : "text-[#ff5000]"
            }`}
          >
            {props.plan}
          </span>
          <p className="flex lg:text-[1.5vw] md:text-[2vw] text-[2.8vw]  justify-center items-center p-5 font-bold text-white leading-none">
            <sup>$</sup>
            <span className="lg:text-[4.5vw] md:text-[6vw] text-[9vw]">
              {props.price}{" "}
            </span>
            <sub className="mt-5">/Mo</sub>
          </p>
        </span>
      </div>
      <div className="grid px-5">
        <span className="flex items-center justify-center lg:gap-5 gap-2 p-2">
          <span className="text-green-500">
            <FaCheck />
          </span>
          <span className="lg:text-[1.5vw] md:text-[2.2vw] text-[3.5vw] ">
            Feeding
          </span>
        </span>
        <hr />
        <span className="flex items-center justify-center lg:gap-5 gap-2 p-2">
          <span className="text-green-500">
            <FaCheck />
          </span>
          <span className="lg:text-[1.5vw] md:text-[2.2vw] text-[3.5vw]">
            Boarding
          </span>
        </span>

        <hr />
        <span className="flex items-center justify-center lg:gap-5 gap-2 p-2">
          <span className={` ${props.spa ? "text-green-500" : "text-red-500"}`}>
            {props.spa ? <FaCheck /> : <ImCross />}
          </span>
          <span className="lg:text-[1.5vw] md:text-[2.2vw] text-[3.5vw]">
            Spa & Grooming
          </span>
        </span>
        <hr />
        <span className="flex items-center justify-center lg:gap-5 gap-2 p-2">
          <span
            className={` ${props.medi ? "text-green-500" : "text-red-500"}`}
          >
            {props.medi ? <FaCheck /> : <ImCross />}
          </span>
          <span className="lg:text-[1.5vw] md:text-[2.2vw] text-[3.5vw]">
            Veterinary Medicine
          </span>
        </span>
      </div>

      <button
        className={`p-5 font-semibold lg:text-[1.2vw] md:text-[2vw] text-[4vw]  ${
          props.price === 99
            ? "bg-green-500 text-black"
            : "bg-[#ff5000] text-white"
        } w-full`}
      >
        Signup Now
      </button>
    </div>
  );
};

export default PricingCards;
