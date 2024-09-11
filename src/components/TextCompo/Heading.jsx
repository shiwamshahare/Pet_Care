import React from "react";

const Heading = (props) => {
  return (
    <h1 className="text-[5vw] tracking-wide font-black leading-none">
      <span>Choose the</span>{" "}
      <span className="text-[#ff5000] ">{props.heading}</span>
    </h1>
  );
};
export default Heading;
