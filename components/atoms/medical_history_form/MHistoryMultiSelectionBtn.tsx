"use client";
import React, { useState } from "react";

interface MultiSelectTitle {
  title: string
}
const MHistoryMultiSelectionBtn: React.FC<MultiSelectTitle> = ({ title }) => {
  const [isScaled, setIsScaled] = useState(false);

  const handleClick = () => {
    setIsScaled(!isScaled);
  };

  return (
    <div onClick={handleClick} className={` text-[14px] font-normal  w-auto px-[16px] py-[4px] cursor-pointer flex justify-center itmes-center hover:bg-[#41057E] rounded-[3.75rem] hover:text-white items-center transition-all duration-300 ease-in-out ${isScaled ? "bg-[#41057E] text-white" : 'bg-[rgba(65,5,126,0.07)] text-[rgba(54,54,54,1)]'}`}>
      {title}
    </div>
  );
};

export default MHistoryMultiSelectionBtn;
