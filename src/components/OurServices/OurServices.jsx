import React from "react";
import ServiceCards from "./ServiceCards";
import Title from "../TextCompo/Title";

const OurServices = () => {
  return (
    <div className="lg:p-28 p-10 text-center bg-slate-200/80 grid">
      <div className="">
        <Title title="Our Services" />
        <h1 className="lg:text-[4.5vw] md:text-[6vw] text-[10vw] font-black">
          <span className="text-[#ff5000]">Premium</span>{" "}
          <span>Pet Services</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 py-5">
        <ServiceCards icon="/Icons/home.svg" title="Boarding" />
        <ServiceCards icon="/Icons/fishfood.svg" title="Feeding" />
        <ServiceCards icon="/Icons/hair.svg" title="Grooming" />
        <ServiceCards icon="/Icons/cattrain.svg" title="Training" />
        <ServiceCards icon="/Icons/ecercise.svg" title="Exercise" />
        <ServiceCards icon="/Icons/injection.svg" title="Treatment" />
      </div>
    </div>
  );
};

export default OurServices;
