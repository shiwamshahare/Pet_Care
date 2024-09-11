import React from "react";

const TestiCards = (props) => {
  return (
    <>
      {props.imges.map((item, idx) => (
        <div className="bg-white w-full h-full flex-shrink-0 " key={idx}>
          <span className="flex ">
            <img src={item} alt={idx} className="w-auto" />
            <p className="grid lg:text-[1.2vw] md:text-[1.8vw] text-[2.6vw]  p-5">
              <span className="font-bold lg:text-[1.5vw] md:text-[3vw] text-[4vw] ">
                Client Name
              </span>
              <span className="font-light italic">Profession</span>
            </p>
          </span>
          <p className="p-5 text-justify">
            Voluptates provident id obcaecati, ad repudiandae adipisci placeat
            suscipit labore minima accusantium .
          </p>
        </div>
      ))}
    </>
  );
};

export default TestiCards;
