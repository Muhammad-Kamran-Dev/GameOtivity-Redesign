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
    <>
      <section className="lg:p-10 xl:p-16 lg:core-feature-bg mb-16">
        <h2 className="mb-10 text-center lg:mb-20 article-title ">
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

      <section className="flex flex-col-reverse lg:flex-row p-5 margin-bottom items-center gap-10 card-bg-gradient lg:p-20">
        <div className="text-center lg:text-left flex-1">
          <h2 className="mb-10 lg:mb-20 article-title lg:w-fit">
            CORE FEATURES
          </h2>
          <div className="text ">
            <h2 className="text-2xl font-bold mb-3 ">
              Experience the future of gaming
            </h2>

            <p className="w-11/12  leading-7">
              Gameotivity is changing the way we play games. This innovative
              platform combines the excitement of gaming with the potential for
              real rewards, including unique NFTs. With Gameotivity, you can
              earn rewards just by playing the games you love, making it a
              must-try for any gamer or NFT enthusiast
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/img/company-logos.png"
            alt="Different Logos of Companies"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </>
  );
};

export default CoreFeature;
