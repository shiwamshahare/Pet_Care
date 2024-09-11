import React from "react";
import Title from "../TextCompo/Title";
import MemberCards from "./MemberCards";

const Team = () => {
  return (
    <div className="xl:p-28 sm:p-20 p-6 grid text-center">
      <div>
        <Title title="Team Member" />
        <h1 className="lg:text-[5vw] md:text-[6.5vw] text-[9.5vw] tracking-wide font-black leading-none">
          <span>Meet Our</span>{" "}
          <span className="text-[#ff5000] ">Team Member</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10  gap-5 sm:py-10 py-6 px-12 sm:px-0">
        <MemberCards
          src="/Images/team-1.jpg"
          name="Mollie Ross"
          position="Founder & CEO"
        />
        <MemberCards
          src="/Images/team-2.jpg"
          name="Jennifer Page"
          position="Chief Executive"
        />
        <MemberCards
          src="/Images/team-3.jpg"
          name="Kate Glover"
          position="Doctor"
        />
        <MemberCards
          src="/Images/team-4.jpg"
          name="Lilly Fry"
          position="Trainer"
        />
      </div>
    </div>
  );
};

export default Team;
