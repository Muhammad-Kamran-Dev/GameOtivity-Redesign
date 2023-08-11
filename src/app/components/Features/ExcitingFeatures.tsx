import FeatureCard, { FeatureCardType } from "./FeatureCard";
const ExcitingFeatures = () => {
  const featureData: FeatureCardType[] = [
    {
      title: "Decentralized platform",
      img: "/assets/svg/ExcitingFeatures/decentralized.svg",
      text: "Offers a world-first decentralized game store for mobile devices, featuring a wide range of games created by independent game makers, developers, and NFT artists.",
    },
    {
      title: "Community building",
      img: "/assets/svg/ExcitingFeatures/community.svg",
      text: "Offers a world-first decentralized game store for mobile devices, featuring a wide range of games created by independent game makers, developers, and NFT artists.",
    },
    {
      title: "Fast network protocol",
      img: "/assets/svg/ExcitingFeatures/network.svg",
      text: "Offers a world-first decentralized game store for mobile devices, featuring a wide range of games created by independent game makers, developers, and NFT artists.",
    },
    {
      title: "NFT verification system",
      img: "/assets/svg/ExcitingFeatures/nft-verification.svg",
      text: "Offers a world-first decentralized game store for mobile devices, featuring a wide range of games created by independent game makers, developers, and NFT artists.",
    },
    {
      title: "Cross-platform compatibility",
      img: "/assets/svg/ExcitingFeatures/cross-platform.svg",
      text: "Offers a world-first decentralized game store for mobile devices, featuring a wide range of games created by independent game makers, developers, and NFT artists.",
    },
    {
      title: "Secure wallet",
      img: "/assets/svg/ExcitingFeatures/secure-wallet.svg",
      text: "Offers a world-first decentralized game store for mobile devices, featuring a wide range of games created by independent game makers, developers, and NFT artists.",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <h2 className="mb-10 lg:mb-20 article-subtitle article-title lg:w-1/2 text-center">
          Meet exciting features of Our app
        </h2>
      </div>
      <section className="grid items-center justify-center grid-cols-1 mb-32 justify-items-center md:grid-cols-2 lg:grid-cols-3 margin-bottom gap-y-32 ">
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.title}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </>
  );
};

export default ExcitingFeatures;
