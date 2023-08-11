import React from "react";
import Image from "next/image";
import CoreFeatureCard from "./CoreFeatureCard";
import { coreFeatureCard } from "./CoreFeatureCard";
const CoreFeature = () => {
  const cardData: coreFeatureCard[] = [
    {
      imgUrl: "/assets/img/time-based-reward.svg",
      title: "Time-based reward system",
      description:
        "Offers a diverse range of NFT rewards, including game-specific NFTs, platform-wide NFTs , and NFTs from third-party sources.",
    },
    {
      imgUrl: "/assets/img/nft.svg",
      title: "NFT reward diversity",
      description:
        "Offers a diverse range of NFT rewards, including game-specific NFTs, platform-wide NFTs , and NFTs from third-party sources.",
    },
  ];
  return (
    <section className="lg:p-10 xl:p-16 lg:core-feature-bg">
      <h2 className="mb-10 text-center lg:mb-20 article-title">
        Games Consume time, energy.
      </h2>
      <article className="flex flex-col justify-center gap-10 lg:gap-20 lg:flex-row lg:justify-between lg:items-center ">
        <div className="flex-1 object-cover ">
          {/* TODO: The image is not that responsive  */}
          <Image
            className=""
            src="/assets/img/reward.png"
            width={99999}
            height={99999}
            quality={100}
            alt="In Game Rewards"
          />
        </div>
        <div className="flex-1 lg:flex-none lg:basis-5/12 justify-self-start">
          <h3 className="article-subtitle">Core Features </h3>

          {/* Cards  */}
          {cardData.map((card) => {
            return (
              <CoreFeatureCard
                key={card.title}
                imgUrl={card.imgUrl}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default CoreFeature;
