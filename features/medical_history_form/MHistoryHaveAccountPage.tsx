'use client'

import React, { useEffect, useState } from "react";
import ComMedicalHistoryForm from "../../components/molecules/medical_history_form/ComMedicalHistoryForm";
import HeadQuestionWithAccount from "../../components/atoms/header/HeadQuestionWithAccount";
import MHistoryCheckingInfo from "./MHistoryCheckingInfo";
import MHistoryMultiSelect from "../../components/molecules/medical_history_form/MHistoryMultiSelect";
import MHistoryHaveAccountQuestion from "../../components/molecules/medical_history_form/MHistoryHaveAccountQuestion";
import MHistoryMultiOptionForm from "../../components/molecules/medical_history_form/MHistoryMultiOptionForm";
import Button from "../../components/atoms/Button";

const MHistoryHaveAccountPage = () => {
  const [isOne, setIsOne] = useState(false);
  
  useEffect(() => {
    
    console.log(isOne, "why are you");
    if(isOne == true) {

    }
  }, [isOne])
  return (
    <div className="w-full bg-[rgba(243,243,243)] flex flex-col justify-center items-center">
      {/* <HeadQuestionWithAccount /> */}
      <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px]">
        <h2 className="text-[36px] text-[#161616] font-extrabold leading-[3.2rem]">
          Anamnesebogen
        </h2>

        <ComMedicalHistoryForm />
        <MHistoryHaveAccountQuestion setIsOne={setIsOne} isOne = {isOne}/>
        <MHistoryCheckingInfo disabled={isOne}/>
        <MHistoryMultiSelect disabled={isOne}/>
        <MHistoryMultiOptionForm disabled={isOne}/>
        <Button content="weiter" className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-[20px] mb-[150px]"/>
      </div>
    </div>
  );
};

export default MHistoryHaveAccountPage;
