import React from "react";

const NewsletterForm = () => {
  return (
    <div className="grid lg:text-[1.2vw] md:text-[2.2vw] text-[5vw]  gap-5">
      <p className="text-[#ff5000] font-bold">Newletter</p>
      <form className="grid gap-3 md:px-0 px-10 lg:text-[1.2vw] md:text-[2.2vw] text-[4vw]">
        <input
          type="text"
          name="name"
          id="name"
          className="p-2 rounded-md"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="p-2 rounded-md"
        />
        <button type="submit" className=" bg-[#ff5000] p-2 rounded-md">
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
