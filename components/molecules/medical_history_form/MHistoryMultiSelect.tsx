import React from "react";
import MHistoryMultiSelectionBtn from "../../atoms/medical_history_form/MHistoryMultiSelectionBtn";
import { MHistoryMultiData } from "../../../data";
import MHistoryInputLong from "../../atoms/medical_history_form/MHistoryInputLong";

const MHistoryMultiSelect = () => {
  return (
    <div className=" w-full flex flex-col justify-start items-start mt-[20px] bg-white p-[50px] rounded-[36px] Myshadow">
      <h3 className=" font-extrabold text-[20px]">
        Welche Symptome haben Sie?<span className=" text-[#D7000D]">*</span>
      </h3>
      <div className=" w-auto flex flex-wrap gap-[16px] mt-[24px]">
        {MHistoryMultiData.map((symp, index) => (
          <MHistoryMultiSelectionBtn key={index} title={symp.title} />
        ))}
      </div>
      <span className=" mt-[28px] text-[16px] font-normal">
        Beschreiben Sie Ihre Symptome ausführlich:
        <span className=" text-[#D7000D] font-bold">
          *
        </span>
      </span>
      <MHistoryInputLong />
    </div>
  );
};

export default MHistoryMultiSelect;
