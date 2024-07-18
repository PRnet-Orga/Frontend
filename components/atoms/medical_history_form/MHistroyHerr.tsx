'use client'

import React, { useState } from "react";
import Image from "next/image";

interface IUserInfoOption {
  optionInfo: string,
  option: Array<string>
}

const MHistroyHerr: React.FC<IUserInfoOption> = ({ optionInfo, option }) => {

  const [clicked, setClicked] = useState('');

  const handleClick = (o: string) => {
    setClicked(o);
  }
  return (
    <div className="relative inline-block text-left max-md:w-full">
      <div className="dropdown w-full">
        <div tabIndex={0} role="button" className="btn text-[#6D6D6D] text-[14px] font-normal
         bg-[#F5F5F5] border-none rounded-[60px] h-[47px] w-full sm:w-[150px] px-[20px] py-[13.5px] inline-flex justify-between items-center hover:bg-white">
          <span className="text-left">{clicked ? clicked : optionInfo}</span>
          <Image src='/Icon/down.png' alt="" width={14} height={14} />
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow ">
          {option.map((o: string, index: number) =>
            <li className=" text-[#161616]" key={index} onClick={() => handleClick(o)} ><a>{o}</a></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MHistroyHerr;
