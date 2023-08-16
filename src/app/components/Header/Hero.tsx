import Image from "next/image";
import Link from "next/link";
import VideoIcon from "@/../public/assets/svg/icons-components/VideoIcon";
import Button from "../Button/Button";
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
            Gaming More.
            <span className="text-orange-reward">Earn Limitless.</span>
          </h1>
        </div>
        <p className="self-center w-11/12 text-center lg:self-start text-1xl lg:text-left">
          Play your favorite game and be the part of the ultimate experience
          with world fastest Network protocol.
        </p>
        <div className="flex items-center justify-center gap-5 lg:justify-start">
          <div className="flex items-center justify-center w-52 group hover:cursor-pointer ">
            <Button btnText="Access Beta" />
          </div>
          <div className="btn-whitepaper flex items-center justify-center w-52 btn group hover:cursor-pointer">
            <svg
              className="w-full"
              viewBox="0 0 149 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Vector">
                <mask id="path-1-inside-1_101_120" fill="white">
                  <path d="M138.88 34.1247L148.124 24.9143V10.0854L138.88 0.875003H10.1195L0.87647 10.0854V24.9143L10.1203 34.1247H138.88ZM139.242 35L9.75774 34.9998L0 25.2773V9.7225L9.75694 0H139.242L149 9.7225V25.2773L139.242 35Z" />
                </mask>
                <path
                  d="M138.88 34.1247V35.1247H139.293L139.586 34.8331L138.88 34.1247ZM148.124 24.9143L148.829 25.6227L149.124 25.3296V24.9143H148.124ZM148.124 10.0854H149.124V9.67015L148.829 9.37704L148.124 10.0854ZM138.88 0.875003L139.586 0.166618L139.293 -0.124997H138.88V0.875003ZM10.1195 0.875003V-0.124997H9.70633L9.41366 0.166647L10.1195 0.875003ZM0.87647 10.0854L0.170615 9.37706L-0.12353 9.67017V10.0854H0.87647ZM0.87647 24.9143H-0.12353V25.3296L0.170644 25.6227L0.87647 24.9143ZM10.1203 34.1247L9.41445 34.8331L9.70712 35.1247H10.1203V34.1247ZM139.242 35V36H139.655L139.948 35.7084L139.242 35ZM9.75774 34.9998L9.05192 35.7081L9.34459 35.9998H9.75774L9.75774 34.9998ZM0 25.2773H-1V25.6925L-0.705826 25.9856L0 25.2773ZM0 9.7225L-0.705855 9.01414L-1 9.30725V9.7225H0ZM9.75694 0V-1H9.34376L9.05109 -0.708356L9.75694 0ZM139.242 0L139.948 -0.708385L139.655 -1H139.242V0ZM149 9.7225H150V9.30723L149.706 9.01412L149 9.7225ZM149 25.2773L149.706 25.9856L150 25.6925V25.2773H149ZM139.586 34.8331L148.829 25.6227L147.418 24.2059L138.174 33.4164L139.586 34.8331ZM149.124 24.9143V10.0854H147.124V24.9143H149.124ZM148.829 9.37704L139.586 0.166618L138.174 1.58339L147.418 10.7938L148.829 9.37704ZM138.88 -0.124997H10.1195V1.875H138.88V-0.124997ZM9.41366 0.166647L0.170615 9.37706L1.58233 10.7938L10.8254 1.58336L9.41366 0.166647ZM-0.12353 10.0854V24.9143H1.87647V10.0854H-0.12353ZM0.170644 25.6227L9.41445 34.8331L10.8261 33.4164L1.5823 24.2059L0.170644 25.6227ZM10.1203 35.1247H138.88V33.1247H10.1203V35.1247ZM139.242 34L9.75774 33.9998L9.75774 35.9998L139.242 36V34ZM10.4636 34.2914L0.705826 24.5689L-0.705826 25.9856L9.05192 35.7081L10.4636 34.2914ZM1 25.2773V9.7225H-1V25.2773H1ZM0.705855 10.4309L10.4628 0.708356L9.05109 -0.708356L-0.705855 9.01414L0.705855 10.4309ZM9.75694 1H139.242V-1H9.75694V1ZM138.536 0.708385L148.294 10.4309L149.706 9.01412L139.948 -0.708385L138.536 0.708385ZM148 9.7225V25.2773H150V9.7225H148ZM148.294 24.5689L138.536 34.2916L139.948 35.7084L149.706 25.9856L148.294 24.5689Z"
                  fill="url(#paint0_linear_101_120)"
                  mask="url(#path-1-inside-1_101_120)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_101_120"
                  x1="0"
                  y1="17.5"
                  x2="149"
                  y2="17.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7F00FF" />
                  <stop offset="1" stop-color="#E100FF" />
                </linearGradient>
              </defs>
            </svg>

            <Link
              href="/ "
              className="absolute flex gap-2 whitespace-nowrap group-hover:text-electric-blue-900"
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
