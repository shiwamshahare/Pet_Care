import React from "react";
import Speciality from "./Speciality";
import Title from "../TextCompo/Title";

const Features = () => {
  return (
    <div className="xl:px-28 lg:px-20 grid grid-cols-5">
      <img
        src="/Images/feature.jpg"
        alt="why us"
        className="col-span-2 h-full"
      />

      <div className="col-span-3 lg:p-12 p-5 pb-1 h-full grid">
        <Title title="Why Choose Us?" />

        <h1 className="text-[5vw] tracking-wide font-black leading-none">
          <span className="text-[#ff5000] ">Special Care</span>{" "}
          <span>On Pets</span>
        </h1>
        <p className="lg:pt-8 pt-3 font-light lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] ">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          aspernatur blanditiis iure quia excepturi quasi tenetur veritatis,
          quisquam repellendus dolorem.
        </p>

        <div className="grid grid-cols-2 lg:py-5 py-2 lg:gap-8 gap-1 sm:gap-4">
          <Speciality icon="/Icons/cattrain.svg" title="Best In Industry" />
          <Speciality icon="/Icons/doctor.svg" title="Emergency Services" />
          <Speciality icon="/Icons/heart.svg" title="Special Care" />
          <Speciality icon="/Icons/ecercise.svg" title="Customer Care" />
        </div>
      </div>
    </div>
  );
};

export default Features;
