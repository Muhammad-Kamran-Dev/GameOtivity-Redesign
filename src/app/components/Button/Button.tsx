import Link from "next/link";
import React from "react";

type Props = {
  btnText: string;
  link?: string;
  style?: {
    fill?: string;
    hover?: string;
  };
};

const Button = ({ btnText, link = "/", style }: Props) => {
  return (
    <div className="flex items-center justify-center max-w-52 group hover:cursor-pointer self-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={` group-hover:stroke-none ${
          style?.fill ? style.fill : "fill-electric-blue-900"
        }
        ${
          style?.hover ? style.hover : "group-hover:fill-orange-reward"
        } transition-fill duration-300 ease-in-out`}
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
        className="absolute font-bold text-dark-purple  group-hover:text-electric-blue-900  transition-colors duration-300 ease-in-out "
      >
        {btnText}
      </Link>
    </div>
  );
};

export default Button;
