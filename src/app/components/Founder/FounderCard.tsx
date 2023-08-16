import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

type Founder = {
  name: string;
  imgUrl: string;
  designation: string;
  link?: string;
  left?: boolean;
};
const FounderCard = ({
  imgUrl,
  name,
  designation,
  left,
  link = "/",
}: Founder) => {
  return (
    <article
      className={`card-bg-gradient ${
        left && "bg-gradient-left"
      } flex  justify-between items-center flex-col-reverse gap-10  px-10  lg:flex-row  ${
        left && "lg:flex-row-reverse "
      } py-10 lg:py-0`}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className=" text-4xl font-bold  md:text-5xl lg:text-6xl">{name}</h2>
        <h3 className="text-xl font-bold text-gray-400 my-5 md:text-2xl lg:text-3xl">
          {designation}
        </h3>
        <Button btnText="LinkedIn" key={name} />
      </div>
      <div className=" flex-1 ">
        {/* #TODO: image is not what i want  */}
        <Image
          src={imgUrl}
          width={1000}
          height={1000}
          className="lg:h-[400px] object-contain  "
          alt={name}
        />
      </div>
    </article>
  );
};

export default FounderCard;
