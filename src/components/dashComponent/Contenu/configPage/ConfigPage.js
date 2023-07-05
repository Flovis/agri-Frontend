import React, { useState } from "react";
import Horaire from "./card/Horaire";
import ContenuSelect from "./card/ContenuSelect";
import Partage from "./card/Partage";

export default function ConfigPage() {
  const [step, setStep] = useState(1);
  console.log("step: ", step);
  const [formData, setFormData] = useState({});
  console.log("formDatafinale: ", formData);

  const handleNext = (data) => {
    setStep((prev) => prev + 1);
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handlePrevious = (data) => {
    setStep((prev) => prev - 1);
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Send the formData to the server
  };

  return (
    <div>
      {step === 2 && (
        <Horaire onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {step === 1 && (
        <ContenuSelect
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      )}
      {step === 3 && (
        <Partage onPrevious={handlePrevious} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
