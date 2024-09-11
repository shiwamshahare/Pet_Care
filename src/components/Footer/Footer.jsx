import React from "react";
import GetInTouch from "./GetInTouch";
import Links from "./Links";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <div className="lg:p-16 md:p-10 sm:p-8 p-4 bg-black/80 text-white grid lg:grid-cols-5 md:grid-cols-2  sm:gap-10 gap-3">
      <div className="lg:col-span-2 ">
        <h5 className="lg:text-[3vw] md:text-[6] sm:text-[8vw] text-[12vw] font-extrabold">
          <span className="text-[#ff5000]">Pet</span>
          <span className="text-white">Lover</span>
        </h5>
        <p className="lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw]  font-light text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, dolor repudiandae facere magni deleniti neque
          distinctio nam veniam provident doloribus? Cupiditate quisquam hic
          facilis, voluptate magnam fugiat accusamus quod enim.
        </p>
      </div>
      <GetInTouch />
      <Links />
      <NewsletterForm />
    </div>
  );
};

export default Footer;
