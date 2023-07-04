import { useParams } from "react-router-dom";

import Step3 from "./Step3";
import Step4 from "./Step4";
import Step2 from "./Step2";
import LecteurAudio from "../cards/audio/LecteurAudio";
import Level1 from "../form/Level1";
import Level2 from "../form/Level2";

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
      case "level1":
        return <Level1 />;
      case "level2":
        return <Level2 />;
      default:
        return;
      //   <NotFound />;
    }
  };

  return <div>{renderStepComponent()}</div>;
};
export default Step;
