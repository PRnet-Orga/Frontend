import React from "react";
import MHistoryInput from "../../components/atoms/medical_history_form/MHistoryInput";
import MHistoryName from "../../components/atoms/medical_history_form/MHistoryName";
import MHistroyHerr from "../../components/atoms/medical_history_form/MHistroyHerr";
import MHistoryDate from "../../components/atoms/medical_history_form/MHistoryDate";

interface OptionProps {
  option: Array<string>;
  optionInfo: string;
}

const MHistoryCheckingInfo: React.FC = () => {
  return (
    <div className="bg-white h-[20rem] rounded-[2.25rem] p-[3.125rem] gap-[2.4rem] mt-[20px] Myshadow">
      <h2 className=" font-extrabold text-[20px]">Deine Kontaktdaten</h2>
      <div className="flex flex-col gap-4">
        <MHistoryInput content="E-mail" />
        <div className="flex flex-wrap gap-4">
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
