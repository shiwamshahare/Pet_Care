import React from "react";
import PricingCards from "./PricingCards";
import Title from "../TextCompo/Title";

const Pricing = () => {
  return (
    <div className="xl:p-28 lg:px-20 text-center bg-slate-200/80 grid">
      <div className="md:p-12 p-6 h-full grid">
        <Title title="Pricing Plan" />
        <h1 className="lg:text-[4.5vw] md:text-[6vw] text-[9vw] tracking-wide font-black leading-none">
          <span>Choose the</span>{" "}
          <span className="text-[#ff5000] ">Best Price</span>
        </h1>
      </div>
      <div className="grid lg:gap-10 gap-5 p-10 lg:p-0 sm:px-12 md:grid-cols-3 grid-cols-1">
        <PricingCards src="Images/price-1.jpg" plan="Basic" price={49} />
        <PricingCards
          src="Images/price-2.jpg"
          plan="Standard"
          price={99}
          spa={true}
        />
        <PricingCards
          src="Images/price-3.jpg"
          plan="Premium"
          price={149}
          spa={true}
          medi={true}
        />
      </div>
    </div>
  );
};

export default Pricing;
