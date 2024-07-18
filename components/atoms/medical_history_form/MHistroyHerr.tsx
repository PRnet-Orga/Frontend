'use client'
// components/MHistroyHerr.tsx
import React, { useState } from "react";
import Image from "next/image";

interface IUserInfoOption {
  optionInfo: string
}

const MHistroyHerr: React.FC<IUserInfoOption> = ({ optionInfo }) => {

  return (
    <div className="relative inline-block text-left w-[9.375rem] mx-auto">
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn text-[#6D6D6D] text-[14px] font-normal bg-[#F5F5F5] rounded-[60px] h-[47px] w-[150px] px-[20px] py-[13.5px] flex justify-between items-center">
          <span>{optionInfo}</span>
          <Image src='/Icon/down.png' alt="" width={14} height={14}/>
          </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MHistroyHerr;
