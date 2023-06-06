import Image from "next/image";
import React from "react";

const RoundedImage = ({ extraClass, imgSrc }) => {
  return (
    <div
      className={`${extraClass} border border-transparent rounded-br-[70px] rounded-tl-[70px] overflow-hidden`}
    >
      <Image src={imgSrc} alt="" fill />
    </div>
  );
};

export default RoundedImage;
