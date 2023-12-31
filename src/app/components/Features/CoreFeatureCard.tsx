import Image from "next/image";
import { CardDataProps } from "../../../../types";

const CoreFeatureCard = ({ imgUrl, title, description }: CardDataProps) => {
  return (
    <article
      className={`flex flex-col gap-5 p-10 my-10 md:p-14 xl:p-16 card-bg-gradient `}
    >
      <Image
        src={imgUrl}
        width={50}
        height={50}
        className="self-start w-16"
        alt={title}
      />
      <div className="flex flex-col gap-3 ">
        <h2 className="text-lg font-bold lg:text-2xl ">{title}</h2>
        <p className="text-xs leading-5 lg:text-sm">{description}</p>
      </div>
    </article>
  );
};

export default CoreFeatureCard;
