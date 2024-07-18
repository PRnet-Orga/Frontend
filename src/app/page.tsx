import Image from "next/image";
import Head_Question_With_Account from "../../components/atoms/header/HeadQuestionWithAccount";
import MHistoryHaveAccountPage from "../../features/medical_history_form/MHistoryHaveAccountPage";

export default function Home() {
  return (
    <main className="flex  flex-col pt-20">
      <MHistoryHaveAccountPage />
    </main>
  );
}
