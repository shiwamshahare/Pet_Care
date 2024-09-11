import React from "react";

const Title = (props) => {
  return (
    <h5 className="lg:text-[1.5vw] md:text-[2.6vw]  text-[4vw] text-green-500 font-semibold">
      {props.title}
    </h5>
  );
};

export default Title;
