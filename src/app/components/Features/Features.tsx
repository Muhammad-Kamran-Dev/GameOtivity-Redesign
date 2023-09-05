import React from "react";
import FeatureCard from "./FeatureCard";
import { featureData } from "@/../constants";

const Features = () => {
  return (
    <section className="feature grid items-center justify-center grid-cols-1 mb-32 justify-items-center md:grid-cols-2 lg:grid-cols-3 margin-bottom gap-y-32 ">
      {featureData.map((feature) => (
        <FeatureCard
          key={feature.title}
          img={feature.img}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </section>
  );
};

export default Features;
