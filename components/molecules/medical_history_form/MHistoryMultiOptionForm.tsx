import React from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryInputThin from "../../atoms/medical_history_form/MHistoryInputThin";

const MHistoryMultiOptionForm = () => {
    return (
        <div className=" w-full flex flex-col justify-start items-start mt-[20px] bg-white p-[50px] rounded-[36px] Myshadow" >
            <span className="text-[16px] font-normal w-full">
                Nehmen Sie regelmäßig Medikamente ein?
                <span className=" text-[#D7000D] font-bold">
                    *
                </span>
            </span>
            <div className=" mt-[16px] flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px]">
                <RadiobtnChecked name="medication" className=" w-[100%]" content="Nein" />
                <div className=" flex gap-[32px] items-center justify-start w-full">
                    <Radiobtn name="medication" className="" content="Ja" />
                    <MHistoryInputThin content="Derzeitige Medikamente" />
                </div>
            </div>
            <span className="text-[16px] font-normal w-full mt-[36px]">
                Sind bei Ihnen Allergien bekannt? Falls ja, bitte detalierte Angaben machen
                <span className=" text-[#D7000D] font-bold">
                    *
                </span>
            </span>
            <div className=" mt-[16px] flex w-full items-center justify-between">
                <RadiobtnChecked name="allergies" className=" w-[100%]" content="Nein" />
                <div className=" flex gap-[32px] items-center justify-start w-full">
                    <Radiobtn name="allergies" className="" content="Ja" />
                    <MHistoryInputThin content="Papaja" />
                </div>
            </div>
            <span className="text-[16px] font-normal w-full mt-[36px]">
                Sind Ihre Allergologen darüber informiert, dass Sie eine Therapie mit medizinischem Cannabis beginnen möchten, und sehen Ihre Ärzte keine Kontraindikationen?
            </span>
            <div className=" mt-[16px] flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px]">

                <RadiobtnChecked name="allergists" className="" content="Nein" />
                <Radiobtn name="allergists" className="" content="Ja" />
                <Radiobtn name="allergists" className="w-[40%]" content="Ich habe noch nicht mit meinen Ärzten darüber gesprochen." />
            </div>
            <span className="text-[16px] font-normal w-full mt-[36px]">
                Leiden Sie an chronischen Krankheiten, einschließlich psychischer Erkrankungen?
                <span className=" text-[#D7000D] font-bold">
                    *
                </span>
            </span>
            <div className=" mt-[16px] flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px]">
                <RadiobtnChecked name="chronic " className=" w-[100%]" content="Nein" />
                <div className=" flex gap-[32px] items-center justify-start w-full">
                    <Radiobtn name="chronic " className="" content="Ja" />
                    <MHistoryInputThin content="Chronische Krankheiten" />
                </div>
            </div>
            <span className="text-[16px] font-normal w-full mt-[36px]">
                Zahlen Sie selbst oder sind Sie privat versichert?
            </span>
            <div className=" mt-[16px] flex w-full items-center justify-start ">
                <RadiobtnChecked name="pay " className=" w-[50%]" content="Ich bin Selbstzahler" />
                <Radiobtn name="pay " className="" content="Ich bin privat versichert" />
            </div>
        </div>
    );
};

export default MHistoryMultiOptionForm;
