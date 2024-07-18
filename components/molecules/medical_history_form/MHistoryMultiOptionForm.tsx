"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryInputThin from "../../atoms/medical_history_form/MHistoryInputThin";

interface IMHistoryMultiOptionForm {
  disabled: boolean;
}

const MHistoryMultiOptionForm: React.FC<IMHistoryMultiOptionForm> = ({
  disabled,
}) => {
  const [isDisplay, setIsDisplay] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [isAllergy, setIsAllergy] = useState(0);
  const [isillnesses, setIsillnesses ] = useState(0);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isAllergyDisabled, setIsAllergyDisabled] = useState(true);
  const [isillnessesDisabled, setIsillnessesDisabled] = useState(true);
  useEffect(() => {
    if(currentDisplay == 1) {
        setIsInputDisabled(false);
    } else {
        setIsInputDisabled(true);
    }

  }, [currentDisplay])

  useEffect(() => {
    if(isAllergy == 1) {
        setIsAllergyDisabled(false);
    } else {
        setIsAllergyDisabled(true);
    }

  }, [isAllergy])

  useEffect(() => {
    if(isillnesses == 1) {
        setIsillnessesDisabled(false);
    } else {
        setIsillnessesDisabled(true);
    }

  }, [isillnesses])
  return (
    <div
      className={`multi-select ${
        disabled
          ? "disable-attr w-full flex flex-col justify-start items-start mt-[20px] bg-white p-[50px] rounded-[36px] Myshadow"
          : "w-full flex flex-col justify-start items-start mt-[20px] bg-white p-[50px] rounded-[36px] Myshadow"
      }`}
    >
      <span className="text-[16px] font-normal w-full">
        Nehmen Sie regelmäßig Medikamente ein?
        <span className=" text-[#D7000D] font-bold">*</span>
      </span>
      <div className=" mt-[16px] flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col">
        <RadiobtnChecked
          name="medication"
          className=" w-[100%]"
          content="Nein"
          onChange={() => setCurrentDisplay(0)}
        />
        <div className=" flex gap-[32px] items-center justify-start w-full">
          <Radiobtn
            name="medication"
            className=""
            content="Ja"
            onChange={() => setCurrentDisplay(1)}
          />
          <MHistoryInputThin
          content="Derzeitige Medikamente"
          disabled={isInputDisabled} // Pass disabled prop
        />
        </div>
      </div>
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Sind bei Ihnen Allergien bekannt? Falls ja, bitte detalierte Angaben
        machen
        <span className=" text-[#D7000D] font-bold">*</span>
      </span>
      <div className=" mt-[16px] flex w-full items-center justify-between max-[650px]:flex-col">
        <RadiobtnChecked
          name="allergies"
          className=" w-[100%]"
          content="Nein"
          onChange={() => setIsAllergy(0)}
        />
        <div className=" flex gap-[32px] items-center justify-start w-full">
          <Radiobtn
            name="allergies"
            className=""
            content="Ja"
            onChange={() => setIsAllergy(1)}
          />
          <MHistoryInputThin content="Papaja" 
          disabled={isAllergyDisabled}
          />
        </div>

      </div>
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Sind Ihre Allergologen darüber informiert, dass Sie eine Therapie mit
        medizinischem Cannabis beginnen möchten, und sehen Ihre Ärzte keine
        Kontraindikationen?
      </span>
      <div className=" mt-[16px] flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-3">
        <RadiobtnChecked
          name="allergists"
          className=""
          content="Nein"
          onChange={() => setIsDisplay(0)}
        />
        <Radiobtn
          name="allergists"
          className=""
          content="Ja"
          onChange={() => setIsDisplay(0)}
        />
        <Radiobtn
          name="allergists"
          onChange={() => setIsDisplay(0)}
          className="w-[40%] max-[650px]:w-full max-[650px]:items-start"
          content="Ich habe noch nicht mit meinen Ärzten darüber gesprochen."
        />
      </div>
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Leiden Sie an chronischen Krankheiten, einschließlich psychischer
        Erkrankungen?
        <span className=" text-[#D7000D] font-bold">*</span>
      </span>
      <div className=" mt-[16px] flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col">
        <RadiobtnChecked
          name="chronic "
          className=" w-[100%]"
          content="Nein"
          onChange={() => setIsillnesses(0)}
        />
        <div className=" flex gap-[32px] items-center justify-start w-full">
          <Radiobtn
            name="chronic "
            className=""
            content="Ja"
            onChange={() => setIsillnesses(1)}
          />
          <MHistoryInputThin content="Chronische Krankheiten" 
          disabled={isillnessesDisabled}
          />
        </div>
      </div>
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Zahlen Sie selbst oder sind Sie privat versichert?
      </span>
      <div className=" mt-[16px] flex w-full items-center justify-start max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-3 ">
        <RadiobtnChecked
          name="pay "
          className=" w-[50%]"
          content="Ich bin Selbstzahler"
          onChange={() => setIsDisplay(0)}
        />
        <Radiobtn
          name="pay "
          className=""
          content="Ich bin privat versichert"
          onChange={() => setIsDisplay(0)}
        />
      </div>
    </div>
  );
};

export default MHistoryMultiOptionForm;
