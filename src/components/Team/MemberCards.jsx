import React from "react";

const MemberCards = (props) => {
  return (
    <div className="grid w-full bg-slate-200/80 rounded-md">
      <img src={props.src} alt={props.name} className="w-full rounded-t-md" />
      <p className="grid lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw]  p-5">
        <span className="font-bold lg:text-[2vw] md:text-[2.5vw] text-[4vw] ">
          {props.name}
        </span>
        <span className="font-light italic">{props.position}</span>
      </p>
    </div>
  );
};

export default MemberCards;
