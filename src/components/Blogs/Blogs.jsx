import React from "react";
import Title from "../TextCompo/Title";
import BlogCards from "./BlogCards";

const Blogs = () => {
  return (
    <div className="xl:p-28 lg:p-20 p-6">
      <div className="text-center">
        <Title title="Pet Blog" />
        <h1 className="lg:text-[5vw] md:text-[6vw] text-[9vw] tracking-wide font-black leading-none">
          <span className="text-[#ff5000] ">Updates</span>{" "}
          <span>From Blog</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:px-0 px-3  py-12 lg:gap-10 gap-6 xl:gap-16">
        <BlogCards src="/Images/blog-1.jpg" />
        <BlogCards src="/Images/blog-2.jpg" />
        <BlogCards src="/Images/blog-3.jpg" />
      </div>
    </div>
  );
};

export default Blogs;
