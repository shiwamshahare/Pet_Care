import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const Links = () => {
  return (
    <div className="grid lg:text-[1.2vw] md:text-[2.2vw] text-[5vw] ">
      <p className="text-[#ff5000] font-bold">Popular Links</p>
      <ul className="items-center">
        <li className=" flex gap-2 items-center">
          <span className="lg:text-[0.7vw] md:text-[1.2vw] sm:text-[1.8vw] text-[2.5vw]">
            <FaGreaterThan />
          </span>
          <a href="#" target="_blank">
            Home
          </a>
        </li>
        <li className=" flex gap-2 items-center">
          <span className="lg:text-[0.7vw] md:text-[1.2vw] sm:text-[1.8vw] text-[2.5vw]">
            <FaGreaterThan />
          </span>
          <a href="#" target="_blank">
            About Us
          </a>
        </li>
        <li className=" flex gap-2 items-center">
          <span className="lg:text-[0.7vw] md:text-[1.2vw] sm:text-[1.8vw] text-[2.5vw]">
            <FaGreaterThan />
          </span>
          <a href="#" target="_blank">
            Our Services
          </a>
        </li>
        <li className=" flex gap-2 items-center">
          <span className="lg:text-[0.7vw] md:text-[1.2vw] sm:text-[1.8vw] text-[2.5vw]">
            <FaGreaterThan />
          </span>
          <a href="#" target="_blank">
            Our Team
          </a>
        </li>
        <li className=" flex gap-2 items-center">
          <span className="lg:text-[0.7vw] md:text-[1.2vw] sm:text-[1.8vw] text-[2.5vw]">
            <FaGreaterThan />
          </span>
          <a href="#" target="_blank">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
