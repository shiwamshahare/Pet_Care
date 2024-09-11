import React from "react";

const ServiceCards = (props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white lg:p-8 md:p-4 p-2">
      <img
        src={props.icon}
        alt={props.title}
        className="lg:w-[2.5vw] md:w-[3.5vw] w-[6vw]"
      />
      <h6 className="lg:text-[1.5vw] md:text-[2.5vw] text-[4vw] font-bold py-2">{`Pet ${props.title}`}</h6>
      <p className="text-justify lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quasi
        dolorum quia hic unde, odit incidunt, libero id consequatur at explicabo
        sed rerum optio.
      </p>
      <span className="uppercase text-[#ff5000] font-semibold lg:py-5 py-2 lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] ">
        Read More
      </span>
    </div>
  );
};

export default ServiceCards;
