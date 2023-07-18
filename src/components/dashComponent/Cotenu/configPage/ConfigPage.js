import React, { useState } from "react";
import Horaire from "./card/Horaire";
import ContenuSelect from "./card/ContenuSelect";
import Partage from "./card/Partage";

export default function ConfigPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  console.log("formData: ", formData);

  const handleNext = (data) => {
    setStep((prev) => prev + 1);
    setFormData(data);
  };

  const handlePrevious = (data) => {
    setStep((prev) => prev - 1);
  };

  return (
    <div>
      {step === 1 && (
        <ContenuSelect
          onPrevious={handlePrevious}
          onNext={handleNext}
          //   onSubmit={handleSubmit}
        />
      )}
      {step === 2 && (
        <Partage
          onPrevious={handlePrevious}
          //   onSubmit={handleSubmit}
          formData={formData}
        />
      )}
    </div>
  );
}
