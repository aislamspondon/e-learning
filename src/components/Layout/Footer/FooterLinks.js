import Link from "next/link";
import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

const FooterLinks = () => {
  return (
    <div className="lg:w-7/12 grid grid-cols-2 lg:grid-cols-3 place-content-between">
      <div className="flex flex-col items-start overflow-hidden">
        <h3 className="text-base font-medium leading-7 tracking-wider mb-4">
          Services
        </h3>

        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out transform-gpu">
              <IoIosArrowRoundForward className="text-base" />
              Mobile Apps
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Web Apps
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Custom Software
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              UI/UX Design
            </span>
          </Link>
        </li>
      </div>
      <div className="flex flex-col items-start overflow-hidden">
        <h3 className="text-base font-medium leading-7 tracking-wider mb-4">
          Company
        </h3>

        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out transform-gpu">
              <IoIosArrowRoundForward className="text-base" />
              About Company
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Support
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Privacy Policy
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Product Sourcing
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Terms and Conditions
            </span>
          </Link>
        </li>
      </div>
      <div className="flex flex-col items-start overflow-hidden">
        <h3 className="text-base font-medium leading-7 tracking-wider mb-4">
          Quick Links
        </h3>

        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out transform-gpu">
              <IoIosArrowRoundForward className="text-base" />
              Home
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              About us
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Services
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Portfolio
            </span>
          </Link>
        </li>
        <li className="flex justify-center md:justify-start text-xs tracking-wider leading-7 group font-lighter transition-gpu">
          <Link href={"#"} className="w-max cursor-pointer ">
            <span className="-translate-x-[19px] group-hover:translate-x-0 flex items-center gap-x-1 duration-700 transition-hover ease-out">
              <IoIosArrowRoundForward className="text-base" />
              Contact
            </span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default FooterLinks;
