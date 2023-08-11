import Image from "next/image";
import Link from "next/link";

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
      className={`card-bg-gradient flex  justify-between items-center flex-col-reverse gap-10  px-10  lg:flex-row  ${
        left && "lg:flex-row-reverse "
      } py-10 lg:py-0`}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className=" text-4xl font-bold  md:text-5xl lg:text-6xl">{name}</h2>
        <h3 className="text-xl font-bold text-gray-400 my-5 md:text-2xl lg:text-3xl">
          {designation}
        </h3>
        <div className="flex items-center justify-center w-52 group hover:cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-electric-blue-900 group-hover:stroke-none group-hover:fill-orange-reward  transition-all .3s ease-in-out"
            viewBox="0 0 98 23"
          >
            <path d="M1 15.648l.078-8.749L6.984 1h83.575l6.03 6.029v9.047l-5.79 5.789H7.224L1 15.648l.078-8.749z"></path>
            <path
              stroke="url(#paint0_linear_133_26)"
              strokeMiterlimit="10"
              d="M1 15.648l.078-8.749L6.984 1h83.575l6.03 6.029v9.047l-5.79 5.789H7.224L1 15.648zm0 0l.078-8.749"
            ></path>
          </svg>
          <Link
            href={link}
            className="absolute font-bold text-dark-purple  group-hover:text-electric-blue-900   "
          >
            LinkedIn
          </Link>
        </div>
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
