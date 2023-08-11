import React from "react";
import Image from "next/image";

type FeatureCardType = {
  img: string;
  title: string;
  text: string;
};
const FeatureCard: React.FC<FeatureCardType> = ({ img, title, text }) => {
  return (
    <article className="flex flex-col gap-5 max-w-[400px] justify-center items-center ">
      <Image className="w-72" src={img} width={10} height={10} alt={title} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="w-9/12 text-center">{text}</p>
    </article>
  );
};

export default FeatureCard;
