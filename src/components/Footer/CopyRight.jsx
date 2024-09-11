import React from "react";

const CopyRight = () => {
  return (
    <div className="w-full bg-black text-white lg:px-16 md:px-12 sm:px-8 px-6 py-8 flex justify-between lg:text-[1.5vw] md:text-[2.2vw] text-[3.5vw]">
      <div className="lg:flex grid gap-1">
        <span className="font-bold">
          <span>&copy;</span>Your Site Name.
        </span>
        <span>All Rights Reserved.</span>
        <span>
          Designed by <span className="font-bold">HTML Codex</span>
        </span>
      </div>
      <div className="lg:flex lg:gap-10 md:gap-8 sm:gap-5 gap-2 text-center grid sm:grid-cols-2">
        <span>Privacy</span>
        <span>Terms</span>
        <span>FAQs</span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default CopyRight;
