'use client'
import React, { useState } from "react";

interface MHistoryInputProps {
  content: string;
}

const MHistoryInput: React.FC<MHistoryInputProps> = ({ content }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true); // State to track validation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setValue(emailValue);
    validateEmail(emailValue); // Call email validation function
  };

  const validateEmail = (email: string) => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(email));
  };

  return (
    <div className="relative w-full mt-[12px]">
      <input
        className={`appearance-none block w-full bg-[#F5F5F5] text-gray-700 pl-4 border-none text-[14px] rounded-[3.75rem] py-[10px] px-[20px] h-[47px] focus:outline-none ${
          isValid ? "" : "border-red-500" // Conditional border color based on validation
        }`}
        id="grid-last-name"
        type="text"
        placeholder={content}
        value={value}
        onChange={handleChange}
      />
      {!isValid && (
        <p className="text-red-500 text-[12px] mt-[4px]">Please enter a valid email address.</p>
      )}
    </div>
  );
};

export default MHistoryInput;
