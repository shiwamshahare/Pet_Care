import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="grid lg:text-[1.2vw] md:text-[1.8vw] text-[5vw] ">
      <p className="text-[#ff5000] font-bold">Get In Touch</p>
      <p className="flex items-center gap-2">
        <span>
          <FaLocationDot />
        </span>
        <span>123 Street, New York, USA</span>
      </p>
      <p className="flex items-center gap-2">
        <span>
          <IoCall />
        </span>
        <span>+012 345 67890</span>
      </p>
      <p className="flex items-center gap-2">
        <span>
          <IoMail />
        </span>
        <span>info@example.com</span>
      </p>
      <p className="flex items-center gap-2 lg:text-[0.7vw] md:text-[1.2vw] sm:text-[1.8vw] text-[2.5vw] py-2 ">
        <span className="rounded-full p-2 border-white border-2">
          <FaTwitter />
        </span>
        <span className="rounded-full p-2 border-white border-2">
          <FaFacebookF />
        </span>

        <span className="rounded-full p-2 border-white border-2">
          <FaLinkedinIn />
        </span>
        <span className="rounded-full p-2 border-white border-2">
          <FaInstagram />
        </span>
      </p>
    </div>
  );
};

export default GetInTouch;
