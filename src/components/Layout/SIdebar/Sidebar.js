import { Button } from "@mui/material";
import NavLogo from "../Navbar/NavLogo";
import { CgCloseR } from "react-icons/cg";
import Link from "next/link";
import DropdownLink from "./DropdownLink";
const Sidebar = ({ toggleDrawer }) => {
  return (
    <div className="">
      <div className="w-full p-2 flex justify-between items-center">
        <button onClick={toggleDrawer} className="text-red-primary w-fit p-2">
          <CgCloseR />
        </button>
        <NavLogo />
      </div>
      <div className="w-full p-5 flex flex-col items-start gap-4 justify-between  divide-gray-primary  text-black">
        <div className="w-full">
          <Link className="text-lg" href="/">
            Home
          </Link>
        </div>

        <DropdownLink
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
        <DropdownLink
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

        <div className="w-full">
          {" "}
          <Link className="text-lg" href="/pricing-plan">
            Price Plan
          </Link>
        </div>
        <div className="w-full">
          <Link className="text-lg" href="/about-us">
            About Us
          </Link>
        </div>

        <Link className="text-lg" href="/login">
          Login
        </Link>
        <div className="w-full flex justify-between mt-5">
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
    </div>
  );
};
export default Sidebar;
