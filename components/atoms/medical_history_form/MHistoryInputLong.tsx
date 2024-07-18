'use client'
import React, { useState } from "react";

const MHistoryInputLong: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full mt-[24px]">
      <input
        className="appearance-none !flex !justify-start !items-center w-full bg-[#F5F5F5] text-gray-700 pl-4 border-none text-[14px] rounded-[16px] py-[10px] px-[20px] pb-[100px] focus:outline-none"
        type="text"
        placeholder="Ihre Nachricht"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MHistoryInputLong;
