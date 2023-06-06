import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const TaskCard = () => {
  return (
    <div className="w-full md:w-10/12 flex justify-start items-start gap-4">
      <CgProfile className="hidden md:block w-11 h-11 text-blue-primary mt-2" />
      <div className="bg-[#F6F6F6] shadow-lg box-border w-full p-5">
        <div className="w-full flex justify-between items-center">
          <CgProfile className="md:hidden block w-6 h-6 text-blue-primary justify-self-start" />
          <h3>Arlene McCoy</h3>
          <Link href="#" className="text-blue-primary text-sm">
            Prelink
          </Link>
        </div>
        <p className="w-full md:w-11/12 mt-6 text-[15px] md:text-[17px] font-medium text-black">
          Lorem ipsum dolor sit amet consectetur. Ultricies massa eu velit
          consequat. Eget praesent orci neque massa duis fermentum faucibus
          diam. Id lectus nunc nibh vitae egestas. Dignissim nisi tellus in
          augue ac{" "}
        </p>
        <p className="relative md:top-14 text-sm mt-4 md:mt-0">
          Submitted on:- 20 march 2023
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
