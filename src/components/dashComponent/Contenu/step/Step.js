import { useParams } from "react-router-dom";

import Step3 from "./Step3";
import Step4 from "./Step4";
import Step2 from "./Step2";


const Step = () => {
    const { stepNumber } = useParams(); 
  
    
    const renderStepComponent = () => {
      switch (stepNumber) {
      
        case 'video':
          return<Step3/> ;
        case 'textuelles':
          return <Step4 />;
        case 'audio':
          return <Step2 />;
        default:
          return 
        //   <NotFound />;
      }
    };
  
    return (
      <div>
        {renderStepComponent()}
      </div>
    );
  };
  export default Step