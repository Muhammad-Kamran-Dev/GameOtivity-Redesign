import Image from "next/image";
import Link from "next/link";
import VideoIcon from "@/../public/assets/svg/icons-components/VideoIcon";
const Hero = () => {
  return (
    <section className="grid items-center grid-cols-1 gap-10 mb-32 lg:items-start md:grid-cols-2 margin-bottom">
      <div className="flex flex-col gap-7 hero-text ">
        <div className="relative flex items-center justify-center hero-title">
          <Image
            src="/assets/svg/hero.svg"
            height={10}
            width={10}
            alt="Hero title inside Blocky shape "
          />
          <h1 className="absolute text-4xl font-bold leading-10 text-center md:text-3xl xl:text-6xl xl:leading-snug text-electric-blue-900">
            Gaming More. <span className="text-[#EEA00C]">Earn Limitless.</span>
          </h1>
        </div>
        <p className="self-center w-11/12 text-center lg:self-start text-1xl lg:text-left">
          Play your favorite game and be the part of the ultimate experience
          with world fastest Network protocol.
        </p>
        <div className="flex items-center justify-center gap-5 lg:justify-start">
          {/* #TODO : Transition not working */}
          <div className="flex items-center justify-center w-52 group hover:cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-electric-blue-900 group-hover:fill-orange-500  transition-all .3s ease-in-out"
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
              href="/ "
              className="absolute font-bold text-[#20157D] group-hover:font-bold "
            >
              Access Beta
            </Link>
          </div>
          <div className="flex items-center justify-center w-52 btn group hover:cursor-pointer">
            <Image
              src={"/assets/svg/whitepaper.svg"}
              width={10}
              height={10}
              className="w-full"
              alt="blocky shape for btn background"
            />
            <Link
              href="/ "
              className="absolute flex gap-2 whitespace-nowrap group-hover:text-orange-500"
            >
              <VideoIcon width={24} height={24} />
              Watch Video
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:transform lg:translate-x-12 md:block">
        <Image
          src="/assets/svg/hero-img.svg"
          height={100}
          width={100}
          alt="Laptop and Electronic Gadgets"
        />
      </div>
    </section>
  );
};

export default Hero;
