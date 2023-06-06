import { Button } from "@mui/material";
import Sidebar from "../SIdebar/Sidebar";
import Links from "./Links";
import NavLogo from "./NavLogo";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Router } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  Router.events.on("routeChangeComplete", () => {
    setOpen(false);
  });
  const toggleDrawer = (event) => {
    setOpen((state) => !state);
  };

  return (
    <div className="container mx-auto flex justify-between items-center relative  py-2 md:py-0">
      <NavLogo />
      <Links />
      <Button
        className="w-max block lg:hidden justify-self-end ml-auto"
        onClick={toggleDrawer}
      >
        <IoMenuSharp className="w-5 h-5" />
      </Button>
      <div className="block lg:hidden">
        <Drawer open={open} onClose={toggleDrawer} direction="right">
          <div>
            <Sidebar toggleDrawer={toggleDrawer} />
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
