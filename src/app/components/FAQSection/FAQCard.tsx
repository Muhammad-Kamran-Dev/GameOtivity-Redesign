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
      className={`border-t-[2px] rounded-sm border-[#FF7736] flex justify-between gap-7 lg:gap-20 h-fit mb-10 px-2`}
    >
      <h2 className=" text-xl lg:text-2xl self-start mt-5">{count}</h2>
      <div className="content space-y-5 mt-5  ">
        <h3 className=" text-base lg:text-xl ">{question}</h3>
        <p
          className={`lg:w-11/12 transition-all duration-300 ease-in-out text-sm lg:text-base ${
            toggle
              ? "opacity-100 h-24 lg:h-16 transform translate-y-0  "
              : "h-0 opacity-0 transform translate-y-10"
          }   overflow-hidden`}
        >
          {desc}
        </p>
      </div>
      <div className="toggle-question mt-5 min-w-fit">
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 66"
            fill="none"
            className="w-10 lg:w-16"
            onClick={() => setToggle((prv) => !prv)}
          >
            <circle
              cx="33"
              cy="33"
              r="31.5"
              stroke="#CD624B"
              stroke-width="3"
            />
            <path
              d="M13.517 42.3769L30.8015 21.3522C31.5151 20.3894 32.8066 20.495 33.864 20.5115C34.2042 20.5125 34.5399 20.5883 34.8472 20.7337C35.1544 20.879 35.4254 21.0903 35.6408 21.3522L52.9289 42.3769C53.1976 42.7133 53.3661 43.1179 53.4153 43.5447C53.4646 43.9715 53.3927 44.4035 53.2077 44.7918C53.0227 45.18 52.7321 45.5089 52.3687 45.7412C52.0054 45.9734 51.5839 46.0998 51.1521 46.106L15.2938 46.106C14.8596 46.1054 14.4344 45.9824 14.0676 45.7512C13.7007 45.52 13.4073 45.1901 13.2213 44.7997C13.0353 44.4094 12.9644 43.9746 13.0167 43.5458C13.069 43.117 13.2425 42.7117 13.517 42.3769Z"
              fill="url(#paint0_linear_17_29300)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_17_29300"
                x1="53.4454"
                y1="33.3037"
                x2="12.9969"
                y2="33.3037"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFDE00" />
                <stop offset="1" stop-color="#FD5900" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 lg:w-16"
            viewBox="0 0 66 66"
            fill="none"
            onClick={() => setToggle((prv) => !prv)}
          >
            <circle
              cx="33"
              cy="33"
              r="31.5"
              stroke="#CD624B"
              stroke-width="3"
            />
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
                <stop stop-color="#FFDE00" />
                <stop offset="1" stop-color="#FD5900" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </article>
  );
};

export default FaqCard;