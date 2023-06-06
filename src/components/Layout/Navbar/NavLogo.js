import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <div className="justify-self-start w-min ">
      <Link href="/">
        <div className="w-[60px] h-[18px] relative">
          <Image src="/images/logo.png" alt="institution logo" fill />
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
