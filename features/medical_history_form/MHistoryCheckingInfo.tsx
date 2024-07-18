import React from "react";
import MHistoryInput from "../../components/atoms/medical_history_form/MHistoryInput";
import MHistoryName from "../../components/atoms/medical_history_form/MHistoryName";
import MHistroyHerr from "../../components/atoms/medical_history_form/MHistroyHerr";
import MHistoryDate from "../../components/atoms/medical_history_form/MHistoryDate";

interface IMHistoryCheckingInfo {  
  disabled:boolean;
}

const MHistoryCheckingInfo:React.FC<IMHistoryCheckingInfo> = ({disabled}) => {
  return (
    <div className={`multi-select ${ disabled ? 
      "disable-attr bg-white h-auto w-full rounded-[2.25rem] p-[3.125rem] gap-[2.4rem] mt-[20px] Myshadow"
      : "bg-white h-auto rounded-[2.25rem] p-[3.125rem] gap-[2.4rem] mt-[20px] Myshadow"}`}>
      <h2 className=" font-extrabold text-[20px] mb-[24px]">Deine Kontaktdaten</h2>
      <div className="flex flex-col gap-4 w-full">
        <MHistoryInput content="E-mail" />
        <div className="flex flex-wrap items-start justify-start gap-4 w-full max-[650px]:flex-nowrap max-[650px]:flex-col">
          <MHistroyHerr optionInfo="Herr" option={["Herrin", "Frau", "Keine Angabe"]} />
          <MHistoryName name="Ihre Vorname" />
          <MHistoryName name="Ihre Nachname" />
          <MHistroyHerr optionInfo="Geschlecht" option={["Männlich", "Weiblich", "Bevorzusage, nicht zu sagen"]} />
          <MHistoryDate />
          <MHistoryName name="Telefonnummer" />
        </div>
      </div>
    </div>
  );
};

export default MHistoryCheckingInfo;
