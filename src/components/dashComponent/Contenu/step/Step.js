import { useParams } from "react-router-dom";

import Step3 from "./Step3";
import Step4 from "./Step4";
import Step2 from "./Step2";
import LecteurAudio from "../cards/audio/LecteurAudio";
import GetForm from "../form/GetForm";
import ConfigPage from "../configPage/ConfigPage";

const Step = () => {
  const { stepNumber } = useParams();

  const renderStepComponent = () => {
    switch (stepNumber) {
      case "video":
        return <Step3 />;
      case "textuel":
        return <Step4 />;
      case "audio":
        return <Step2 />;
      case "audioplayer":
        return <LecteurAudio />;
      case "getform":
        return <GetForm />;
      case "configpage":
        return <ConfigPage />;

      default:
        return;
      //   <NotFound />;
    }
  };

  return <div>{renderStepComponent()}</div>;
};
export default Step;
