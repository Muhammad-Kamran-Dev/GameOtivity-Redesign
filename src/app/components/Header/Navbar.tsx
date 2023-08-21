"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="shadow-2xl margin-bottom gradient-dark">
      <div className="flex items-center justify-between w-11/12 py-6 mx-auto ">
        <div className="logo">
          <Image
            className="h-10 cursor-pointer"
            src="/assets/svg/logo.svg"
            width={10}
            height={10}
            alt="Gameotivity Logo"
          />
        </div>

        {/* For Mobile Navigation */}
        <div
          className="md:hidden"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <svg
            className="h-6 cursor-pointer"
            viewBox="0 0 351 228"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M232 21L330 21"
              stroke="white"
              strokeWidth="30"
              strokeLinecap="round"
            />
            <path
              d="M135 115L330 114"
              stroke="white"
              strokeWidth="30"
              strokeLinecap="round"
            />
            <path
              d="M21 207H322"
              stroke="white"
              strokeWidth="30"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <nav
          className={`md:hidden z-10 fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center gap-20 justify-center transform 
        ${
          toggle ? "transform translate-x-0" : "translate-x-full"
        } bg-black nav transition-transform duration-300 ease-in-out  `}
        >
          <ul className="flex flex-col items-center justify-center gap-10 text-4xl font-bold ">
            <li
              className="absolute w-10 right-10 top-10 close-btn hover:cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            >
              <svg
                /* prettier-ignore */
                className="h-6 transition-transform duration-300 ease-in group hover:scale-150"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
              >
                <path
                  className="group-hover:fill-[#DD26FF] transition-fill duration-300 ease-in "
                  fill="#fff"
                  d="M328.4 256L497 87.4c9.667-9.667 15-22.533 15-36.2s-5.333-26.533-15-36.2-22.533-15-36.2-15-26.533 5.333-36.2 15L256 183.6 87.4 15C77.733 5.333 64.867 0 51.2 0S24.667 5.333 15 15 0 37.533 0 51.2s5.333 26.533 15 36.2L183.6 256 15 424.6c-9.667 9.666-15 22.533-15 36.2s5.333 26.533 15 36.2c9.683 9.667 22.533 15 36.2 15s26.517-5.333 36.2-15L256 328.4 424.6 497c9.683 9.667 22.533 15 36.2 15s26.517-5.333 36.2-15c9.667-9.666 15-22.533 15-36.2s-5.333-26.533-15-36.2z"
                  data-original="#000000"
                ></path>
              </svg>
            </li>
            <li className="relative">
              <Link
                href="/"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                href="#feature"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Features
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Testimonial
              </Link>
            </li>
            <li className="relative">
              <Link
                href="#footer"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Team
              </Link>
            </li>
          </ul>
          <div className="relative flex items-center justify-center h-16 whitepaper">
            <Image
              src="/assets/svg/whitepaper.svg"
              className="h-full "
              height={10}
              width={10}
              alt="Svg Shape for img"
            />
            <p className="absolute text-4xl text-center after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in">
              <Link href="/">WhitePaper</Link>
            </p>
          </div>
        </nav>

        {/* For Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">
          <ul className="flex items-center justify-center gap-4 font-bold text-1xl ">
            <li className="relative">
              <Link
                href="/"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                href="#feature"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Features
              </Link>
            </li>
            <li className="relative">
              <Link
                href="#footer"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Testimonial
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/"
                className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:gradient-b-border after:w-0 after:h-[3px] after:rounded-full after:transform after:-translate-x-1/2 hover:after:w-full after:transition-width duration-300 ease-in"
              >
                Team
              </Link>
            </li>
          </ul>
          <div className="relative flex items-center justify-center h-10 whitepaper">
            <Image
              src="/assets/svg/whitepaper.svg"
              className="h-full "
              height={10}
              width={10}
              alt="Svg Shape for img"
            />
            <p className="absolute text-2xl text-center hover:text-[#DD26FF] hover:cursor-pointer transition-colors duration-300 ease-in">
              <Link href="/">WhitePaper</Link>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
