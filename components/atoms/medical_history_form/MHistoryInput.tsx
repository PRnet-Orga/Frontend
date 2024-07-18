'use client'
import React, { useState } from "react";

interface MHistoryInputProps {
  content: string
}

const MHistoryInput: React.FC<MHistoryInputProps> = ({ content }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative w-full mt-[24px]">
      <input
        className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 pl-4 border-none text-[14px] rounded-[3.75rem] py-[10px] px-[20px] h-[47px] focus:outline-none"
        id="grid-last-name"
        type="text"
        placeholder={content}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MHistoryInput;
