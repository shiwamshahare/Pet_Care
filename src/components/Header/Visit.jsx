import React from "react";

const Visit = (props) => {
  return (
    <div className="text-center sm:my-3 my-1 text-[1.2vw] sm:px-5 px-3 content-center flex justify-between flex-col">
      <h6 className="font-bold">{props.title}</h6>
      <p className="opacity-70">{props.subtitle}</p>
    </div>
  );
};

export default Visit;
