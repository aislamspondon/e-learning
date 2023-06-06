import Link from "next/link";
import React from "react";
import DropdownLinks from "./DropdownLinks";

const Links = () => {
  return (
    <div className="w-max py-1 lg:flex items-center justify-between gap-x-4 hidden text-center text-black">
      <div className="w-max -mt-[2.5px]">
        {" "}
        <Link className="" href="/">
          Home
        </Link>
      </div>
      <DropdownLinks
        title={"Online Courses"}
        route={"/online-course"}
        subs={[
          { name: "Live online classes", route: "#live-online-classes" },
          {
            name: "Self-study online",
            route: "#self-study",
          },
          {
            name: "Personal online tutoring",
            route: "#personal-tutoring",
          },
        ]}
      />
      <DropdownLinks
        title={"Our Lessons"}
        route={"/skills"}
        subs={[
          { name: "Listening", route: "/listening" },
          {
            name: "Reading",
            route: "/reading",
          },
          {
            name: "Writing",
            route: "/writing",
          },
          {
            name: "Speaking",
            route: "/speaking",
          },
        ]}
      />

      <div className="w-max">
        {" "}
        <Link className="" href="/pricing-plan">
          Price Plan
        </Link>
      </div>
      <div className="w-max">
        <Link className="" href="/about-us">
          About Us
        </Link>
      </div>
      {/* <div className="w-max">
        <Link className="" href="/task">
          Task
        </Link>
      </div> */}
      <div className="w-max ml-6 flex items-center justify-center gap-x-3">
        <div className="w-20">
          <Link
            className="text-blue-primary text-sm font-bold leading-5"
            href="/login"
          >
            Login
          </Link>
        </div>
        <Link
          href="/register"
          className="border border-black rounded-[6px] py-1.5 px-4"
        >
          Register
        </Link>
        <Link
          href=""
          className="border border-red-primary text-red-primary rounded-[6px] py-1.5 px-4"
        >
          Admin Log
        </Link>
      </div>
    </div>
  );
};

export default Links;
