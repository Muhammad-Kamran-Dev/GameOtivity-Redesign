import React from "react";
import FounderCard from "./FounderCard";

const Founder = () => {
  return (
    <section className="margin-bottom ">
      <div className="flex justify-center mb-10">
        <h2 className="mb-10 lg:mb-20 article-subtitle article-title lg:w-1/2 text-center">
          <span className="text-electric-blue-900">Solution</span> for Gamers
          from <span className="text-orange-reward">Gamers</span>
        </h2>
      </div>

      <div className="founder flex flex-col gap-20">
        <FounderCard
          name="Nabeel Khayal"
          imgUrl="/assets/svg/Founder/nabeel.png"
          designation="Founder & CEO"
        />
        <FounderCard
          name="Zohaib hisham khan"
          imgUrl="/assets/svg/Founder/zohaib.png"
          designation="Co-Founder & CTO"
          left
        />
      </div>
    </section>
  );
};

export default Founder;
