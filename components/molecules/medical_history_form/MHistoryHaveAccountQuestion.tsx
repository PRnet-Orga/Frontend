import React from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";

const MHistoryHaveAccountQuestion = () => {
  return (
    <div className="w-[51.25rem] h-40 rounded-[2.25rem] p-[3.125rem] bg-white flex flex-col justify-between mx-auto mt-[40px] Myshadow">
      <p className=" text-[16px] font-normal">
        Haben Sie bereits ein Konto?<span className="text-[#D7000D] font-bold">*</span>
      </p>
      <div className="flex">
        <Radiobtn name="acc" content="Ja" className=" w-[50%]"/>
        <RadiobtnChecked name="acc" className="" content="Nein" />
      </div>
    </div>
  );
};

export default MHistoryHaveAccountQuestion;
