import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeadQuestionWithAccount = () => {
  return (
    <div className="flex gap-[4.375rem] w-full justify-center items-center pt-[70px]">
      <FaArrowLeft size={35} color="#41057E" className="  cursor-pointer"/>
      <div className="flex">
        <div className="w-4 h-4 bg-[#41057E] rounded-full"></div>
        <div className="border-t-2 border-[#41057E12] border-dotted w-40 mt-2"></div>
        <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
        <div className="border-t-2 border-[#41057E12] border-dotted w-40 mt-2"></div>
        <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
        <div className="border-t-2 border-[#41057E12] border-dotted w-40 mt-2"></div>
        <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
        <div className="border-t-2 border-[#41057E12] border-dotted w-40 mt-2"></div>
        <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
      </div>
      <FaArrowRight size={35} color="#41057E12" className="cursor-pointer"/>
    </div>
    
  );
};

export default HeadQuestionWithAccount;
