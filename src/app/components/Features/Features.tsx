import React from "react";
import FeatureCard from "./FeatureCard";
import { FeatureCardType } from "./FeatureCard";

const Features = () => {
  const featureData: FeatureCardType[] = [
    {
      title: "Community builder",
      img: "/assets/svg/features/Community.svg",
      text: "Rise. Play. Earn. Triumph. Conquer. Level up. Power on. Game. Achieve greatness.NFTs with others.",
    },
    {
      title: "NFT Marketplace",
      img: "/assets/svg/features/Nft.svg",
      text: "Play. Earn. Triumph. Conquer. Level up. Power on. Game. Achieve greatness.NFTs with others.",
    },
    {
      title: "Dynamic rewards",
      img: "/assets/svg/features/Dynamic-reward.svg",
      text: "Rise. Play. Earn. Triumph. Conquer. Level up. Power on. Game. Achieve greatness.NFTs with others.",
    },
  ];
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
