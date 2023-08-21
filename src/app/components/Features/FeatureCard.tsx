import React from "react";
import Image from "next/image";

export type FeatureCardType = {
  img: string;
  title: string;
  text: string;
};
const FeatureCard: React.FC<FeatureCardType> = ({ img, title, text }) => {
  return (
    <article className="flex flex-col gap-5 max-w-[400px] justify-center items-center ">
      <div className="w-72 h-72  relative">
        <Image src={img} priority fill className="object-contain" alt={title} />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-center">{text}</p>
    </article>
  );
};
export default FeatureCard;
