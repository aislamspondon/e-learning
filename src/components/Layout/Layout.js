import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="fixed w-full z-[9999] bg-white top-0">
        <Navbar />
      </nav>
      <main className=" container mt-12 ">{children}</main>
      <footer className="w-full ">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
