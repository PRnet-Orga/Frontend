'use client'
import React, { useState } from "react";

interface IUserName {
    name:string
}

const MHistoryName: React.FC<IUserName> = ({name}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative w-[16.8rem]">
      <input
        className="appearance-none w-full bg-[#F5F5F5] text-gray-700 border-none text-[14px] h-[47px] rounded-[3.75rem] py-[10px] px-[20px] pl-4 focus:outline-none flex justify-center items-center"
        id="grid-last-name"
        type="text"
        placeholder={value}
        value={value}
        onChange={handleChange}
      />
      {!value && (
        <span className="absolute top-[13px] left-4 text-gray-400 pointer-events-none text-[14px]">
          {name}<span className="text-red-500">*</span>
        </span>
      )}
    </div>
  );
};

export default MHistoryName;
