import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="" id="footer">
      <div className="footer-navigation main-grid mb-16">
        <div className=" flex flex-col gap-10 min-w-[200px]">
          <h3 className="text-2xl text-center lg:text-left ">About Us </h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/">Support Center</Link>
              </li>
              <li>
                <Link href="/">Customer Support</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Copyright</Link>
              </li>
              <li>
                <Link href="/">Popular Campaign</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" flex flex-col gap-10 min-w-[200px]  min-w-[100px] min-w-fit">
          <h3 className="text-2xl text-center lg:text-left ">
            Our Information Us{" "}
          </h3>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/">Support Center</Link>
              </li>
              <li>
                <Link href="/">Customer Support</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Copyright</Link>
              </li>
              <li>
                <Link href="/">Popular Campaign</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" flex flex-col gap-10 min-w-[200px]  min-w-[100px] min-w-fit">
          <h3 className="text-2xl text-center lg:text-left ">My Account </h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/">Support Center</Link>
              </li>
              <li>
                <Link href="/">Customer Support</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Copyright</Link>
              </li>
              <li>
                <Link href="/">Popular Campaign</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" flex flex-col gap-10 min-w-[200px]  min-w-[100px] min-w-fit">
          <h3 className="text-2xl text-center lg:text-left ">Our Policies </h3>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/">Support Center</Link>
              </li>
              <li>
                <Link href="/">Customer Support</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Copyright</Link>
              </li>
              <li>
                <Link href="/">Popular Campaign</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-tag p-4 gradient-dark flex justify-center items-center ">
        <h3 className="lg:text-2xl text-center">
          All right reserved - Design & Developed by Gameotivity Web team
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
