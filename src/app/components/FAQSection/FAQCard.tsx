"use client";

import { useState } from "react";

type Prop = {
  count: string;
  question: string;
  desc: string;
};
const FaqCard = ({ count, question, desc }: Prop) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article
      className={`border-t-[2px] rounded-sm border-[#FF7736] flex justify-between gap-7 lg:gap-20 h-fit mb-10 lg:mb-7 px-2`}
    >
      <h2 className="self-start mt-5 text-xl lg:text-2xl">{count}</h2>
      <div className="mt-5 space-y-5 content ">
        <h3 className="text-base lg:text-xl">{question}</h3>
        <p
          className={`lg:w-11/12 transition-all duration-100 linear text-sm lg:text-base ${
            toggle
              ? "opacity-100 h-24 lg:h-14 transform translate-y-0  "
              : "h-0 opacity-0 transform translate-y-10"
          }   overflow-hidden`}
        >
          {desc}
        </p>
      </div>
      <div className="mt-5 cursor-pointer toggle-question min-w-fit">
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-10 cursor-pointer lg:w-16 transition-transform duration-100 linear transform ${
              toggle ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 66 66"
            fill="none"
            onClick={() => setToggle((prv) => !prv)}
          >
            <circle cx="33" cy="33" r="31.5" stroke="#CD624B" strokeWidth="3" />
            <path
              d="M52.9134 24.229L35.629 45.2538C34.9153 46.2166 33.6239 46.111 32.5664 46.0944C32.2262 46.0935 31.8905 46.0176 31.5833 45.8723C31.276 45.7269 31.005 45.5157 30.7896 45.2538L13.5015 24.229C13.2329 23.8926 13.0644 23.4881 13.0151 23.0612C12.9658 22.6344 13.0378 22.2024 13.2227 21.8142C13.4077 21.426 13.6984 21.0971 14.0617 20.8648C14.425 20.6325 14.8465 20.5061 15.2783 20.5H51.1366C51.5709 20.5006 51.996 20.6236 52.3629 20.8548C52.7297 21.086 53.0231 21.4159 53.2091 21.8062C53.3951 22.1966 53.466 22.6314 53.4137 23.0602C53.3614 23.489 53.1879 23.8943 52.9134 24.229Z"
              fill="url(#paint0_linear_17_29311)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_17_29311"
                x1="12.985"
                y1="33.3022"
                x2="53.4335"
                y2="33.3022"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFDE00" />
                <stop offset="1" stopColor="#FD5900" />
              </linearGradient>
            </defs>
          </svg>
        }
      </div>
    </article>
  );
};

export default FaqCard;
