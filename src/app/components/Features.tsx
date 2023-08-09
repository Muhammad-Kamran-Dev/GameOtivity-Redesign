import React from "react";
import FeatureCard from "./FeatureCard";

type FeatureCard = {
  img: string;
  title: string;
  text: string;
};
const Features = () => {
  const featureData: FeatureCard[] = [
    {
      title: "Community builder",
      img: "/assets/svg/Features/Community.svg",
      text: "Rise. Play. Earn. Triumph. Conquer. Level up. Power on. Game. Achieve greatness.NFTs with others."
    },
    {
      title: "NFT Marketplace",
      img: "/assets/svg/Features/Nft.svg",
      text: "Play. Earn. Triumph. Conquer. Level up. Power on. Game. Achieve greatness.NFTs with others."
    },
    {
      title: "Dynamic rewards",
      img: "/assets/svg/Features/Dynamic-reward.svg",
      text: "Rise. Play. Earn. Triumph. Conquer. Level up. Power on. Game. Achieve greatness.NFTs with others."
    }
  ];
  return (
    <section className="grid items-center justify-center grid-cols-1 mb-32 justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:mb-52 gap-y-32 ">
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
