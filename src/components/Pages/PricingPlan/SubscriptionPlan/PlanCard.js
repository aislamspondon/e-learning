import React from "react";
import { Button } from "@mui/material";
const PlanCard = ({ item }) => {
  return (
    <div className="w-[295px] h-[435px] rounded-lg overflow-hidden shadow-md shadow-gray-300 flex flex-col items-center gap-5 relative box-border ">
      <div className="w-full h-[90px]  eclipse  bg-blue-primary ">
        <h3 className="text-white font-medium tracking-wide text-[28px] mt-2 pt-2">
          {item?.title}
        </h3>
      </div>
      <p className="font-bold text-xl ">{item?.type}</p>
      <p className="text-gray-650 px-12 text-lg mt-4">{item?.description}</p>
      <Button
        variant="contained"
        className="bg-red-primary hover:bg-red-primary/90 font-poppins capitalize px-2.5 w-max absolute bottom-8 rounded-full"
      >
        Get Now!!
      </Button>
    </div>
  );
};

export default PlanCard;
