import React from "react";
import { BsCheckAll } from "react-icons/bs";
import Title from "../TextCompo/Title";

const About = () => {
  return (
    <div className="lg:grid lg:p-28 p-10 grid-cols-5">
      <div className="col-span-3  lg:px-8 md:px-6 ">
        <Title title="About Us" />

        <h2 className="lg:text-[4.5vw] md:text-[6vw] text-[9vw] lg:tracking-wide font-black leading-none">
          <span className="text-[#ff5000]">Boarding</span> &{" "}
          <span className="text-green-500">Daycare</span>
        </h2>
        <p className="pt-8 font-bold lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] opacity-60">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          aspernatur blanditiis iure quia excepturi quasi tenetur veritatis,
          quisquam repellendus dolorem.
        </p>
        <p className="pt-5 font-light lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw]">
          Similique, delectus placeat! Hic deleniti, maxime aperiam aut eligendi
          nulla, asperiores id obcaecati vel doloribus unde dolorem nesciunt
          recusandae. Sit, impedit nulla! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <div className="py-5">
          <p className="flex items-center gap-4 lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] font-semibold">
            <span className="font-extrabold text-green-500 lg:text-[2vw] md:text-[3.8vw] text-[4.6vw]">
              <BsCheckAll />
            </span>
            <span>Best In Industry</span>
          </p>{" "}
          <p className="flex items-center gap-4 lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] font-semibold">
            <span className="font-extrabold text-green-500 lg:text-[2vw] md:text-[3.8vw] text-[4.6vw]">
              <BsCheckAll />
            </span>
            <span>Emergency Services</span>
          </p>
          <p className="flex items-center gap-4 lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw]  font-semibold">
            <span className="font-extrabold text-green-500 lg:text-[2vw] md:text-[3.8vw] text-[4.6vw]">
              <BsCheckAll />
            </span>
            <span>24/7 Customer Support</span>
          </p>
        </div>
        <button className="bg-[#ff5000] px-5 py-2 text-white rounded-md lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw] ">
          Learn More
        </button>
      </div>
      <div className="col-span-2 mt-10 lg:mt-0">
        <div className="flex flex-wrap ">
          <img src="/Images/about-1.jpg" alt="1" className="w-full" />
          <img src="/Images/about-2.jpg" alt="" className="w-1/2" />
          <img src="/Images/about-3.jpg" alt="" className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default About;
