import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuHide, setIsMenuHide] = useState(false);

  const handleToggle = () => {
    setIsMenuHide(!isMenuHide);
  };
  return (
    <>
      <nav
        className={`sm:relative absolute sm:top-0 top-10 w-full sm:flex justify-between bg-black text-white lg:px-20 sm:px-12 px-6 z-50 ${
          isMenuHide ? " block" : " hidden"
        }`}
      >
        <ul className="sm:flex grid sm:text-[1.2vw] text-[3vw] font-semibold">
          <li className="bg-[#FF5000] md:px-5 px-3 md:py-8 sm:py-4 p-2 text-black  max-w-max">
            <a href="#">Home</a>
          </li>
          <li className="md:px-5 px-3 md:py-8 sm:py-4 p-2">
            <a href="#">About</a>
          </li>
          <li className="md:px-5 px-3 md:py-8 sm:py-4 p-2">
            <a href="#">Service</a>
          </li>
          <li className="md:px-5 px-3 md:py-8 sm:py-4 p-2">
            <a href="#">Price</a>
          </li>
          <li className="md:px-5 px-3 md:py-8 sm:py-4 p-2">
            <a href="#">Booking</a>
          </li>
          <li className="md:px-5 px-3 md:py-8 sm:py-4 p-2">
            <select
              name="pages"
              id="pages"
              className="bg-transparent outline-none -mx-1"
            >
              <option value="volvo">Pages</option>
              <option value="saab">Saab</option>
            </select>
          </li>
          <li className="md:px-5 px-3 md:py-8 sm:py-4 p-2">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="sm:text-[1.2vw] text-[3vw] sm:rounded-md rounded-sm bg-[#FF5000] md:my-5 my-3 px-3 md:px-5 font-bold">
          Get Quote
        </button>
      </nav>
      <button onClick={handleToggle} className="sm:hidden block px-6">
        <FaBars />
      </button>
    </>
  );
};

export default Navbar;
