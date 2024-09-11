import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaFolder, FaComments } from "react-icons/fa";

const BlogCards = (props) => {
  return (
    <div className="grid bg-slate-200/80 rounded-md ">
      <img src={props.src} alt={props.title} className="rounded-t-md" />
      <div className="p-5 lg:text-[1.2vw] md:text-[1.5vw] text-[2.6vw] ">
        <p className=" font-semibold pb-2 lg:text-[1.8vw] md:text-[2.5vw] text-[5vw]">
          Diam amet at no eos
        </p>
        <span className="flex items-center lg:gap-4 gap-2 font-light">
          <span className="flex items-center gap-1">
            <IoMdPerson />
            <span>Admin</span>{" "}
          </span>
          <span className="flex items-center gap-2">
            <FaFolder />
            <span>Web Design</span>{" "}
          </span>
          <span className="flex items-center gap-2">
            <FaComments />
            <span>15</span>{" "}
          </span>
        </span>
        <p className="font-light py-5 lg:text-[1.2vw] md:text-[1.8vw] text-[3.5vw] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi libero
          velit, deleniti cumque vitae .
        </p>
        <p className="text-[#ff5000] lg:text-[1.2vw] md:text-[1.8vw] text-[3.5vw] ">
          Read More
        </p>
      </div>
    </div>
  );
};

export default BlogCards;
