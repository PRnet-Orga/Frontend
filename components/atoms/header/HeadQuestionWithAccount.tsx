import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeadQuestionWithAccount = () => {
  return (
    <div className=" bg-[rgba(243,243,243)]">
      <div className="flex md:gap-[4.375rem] gap-[40px] w-full justify-center items-center pt-[70px] m-auto xl:max-w-screen-xl lg:max-w-screen-lg lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm px-[16px]">
        <FaArrowLeft
          color="#41057E"
          className="cursor-pointer md:text-[35px] sm:text-[30px] text-[16px]"
        />
        <div className="flex">
          <div className="w-4 h-4 bg-[#41057E] rounded-full"></div>
          <div className="border-t-2 border-[#41057E12] border-dotted w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2"></div>
          <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
          <div className="border-t-2 border-[#41057E12] border-dotted w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2"></div>
          <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
          <div className="border-t-2 border-[#41057E12] border-dotted w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2"></div>
          <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
          <div className="border-t-2 border-[#41057E12] border-dotted w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2"></div>
          <div className="w-4 h-4 bg-[#41057E12] rounded-full"></div>
        </div>
        <FaArrowRight
          color="#41057E12"
          className="cursor-pointer md:text-[35px] sm:text-[30px] text-[16px]"
        />
      </div>
    </div>
  );
};

export default HeadQuestionWithAccount;
