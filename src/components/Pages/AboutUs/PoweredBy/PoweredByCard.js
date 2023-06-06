import React from "react";

const PoweredByCard = ({ item }) => {
  return (
    <div className="w-[315px] h-[417px] p-5 shadow-lg border rounded box-border">
      <h3 className="text-blue-primary font-semibold">{item.title}</h3>
      <p className="text-[#5C5C5C] mt-9 text-[17px]">{item.para}</p>
    </div>
  );
};

export default PoweredByCard;
