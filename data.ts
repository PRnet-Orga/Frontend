import { HiDocumentText } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { TbClockHour11Filled } from "react-icons/tb";

const MedicalHistoryFormData = [
    {
        Icon: HiDocumentText,
        medical_content:"Wir bieten Ihnen hiermit die Möglichkeit Cannabis auf Rezept zu erhalten."
    },
    {
        Icon: FaUserDoctor,
        medical_content:"Unsere Ärzte warten auf Ihre Anmeldung um mit der Online-Behandlung zu beginnen."
    },
    {
        Icon: TbClockHour11Filled,
        medical_content:"Das Rezept wird binnen 12-24h ausgestellt, insofern nach strenger Einzelfallprüfung ein persönlicher Arzt-Kontakt nicht notwendig ist."
    },
]

const MHistoryMultiData = [
    {
        title:"ADHS/Aufmerksamkeitsprobleme"
    },
    {
        title:"Antriebslosigkeit"
    },
    {
        title:"Appepitlosigkeit"
    },
    {
        title:"Belastendes Lebensereignis"
    },
    {
        title:"Tremor"
    },
    {
        title:"Unwohlsein"
    },
    {
        title:"Durchfall"
    },
    {
        title:"Epilepsie"
    },
    {
        title:"Fieber"
    },
    {
        title:"Ermündung"
    },
    {
        title:"Übelkeit"
    },
    {
        title:"Schlafstörung"
    },
    {
        title:"Sonstiges"
    },
]

export {
    MedicalHistoryFormData,
    MHistoryMultiData
}