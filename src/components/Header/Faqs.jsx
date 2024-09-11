import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Faqs = () => {
  return (
    <div className="w-full hidden sm:flex justify-between items-center py-2 bg-green-400 bg-green lg:px-20 md:px-12">
      <div className="flex justify-between text-[1.2vw] text-white cursor-pointer">
        <span className="lg:gap-5 md:gap-3 flex">
          <span>FAQs</span> | <span>Help</span> | <span>Support</span>
        </span>
      </div>
      <div className="flex lg:gap-10 md:gap-6 text-white cursor-pointer">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Faqs;
