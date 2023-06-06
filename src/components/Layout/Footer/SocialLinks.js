import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center text-center gap-y-4">
      <h3 className="uppercase basis-full text-sm tracking-[0.01em]">
        Social links
      </h3>
      <div className="w-full basis-full flex justify-center items-center gap-x-3">
        <AiFillInstagram className="text-lg" />
        <BsFacebook className="text-sm" />
        <FaTiktok className="text-sm" />
        <BsYoutube className="text-lg" />
        <AiOutlineTwitter className="text-lg" />
      </div>
    </div>
  );
};

export default SocialLinks;
