import React from "react";

const Speciality = (props) => {
  return (
    <>
      <p className="flex items-center lg:gap-5 gap-2">
        <img src={props.icon} className="lg:w-[2.5vw] md:w-[3.5vw] w-[6vw]" />
        <span className="lg:text-[1.2vw] md:text-[1.8vw] text-[2.2vw] font-bold">
          {" "}
          {props.title}
        </span>
      </p>
    </>
  );
};

export default Speciality;
