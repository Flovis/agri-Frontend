import React, { useState } from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";

export default function GetForm() {
  const [step, setStep] = useState(1);
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
    setStep(1);
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
      {step === 1 && <Level1 onNext={handleNext} onPrevious={handlePrevious} />}
      {step === 2 && (
        <Level2 onPrevious={handlePrevious} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
