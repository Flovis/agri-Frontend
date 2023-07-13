import React, { useContext, useState } from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import DataMeteoContext from "../../../../context/MeteoContext";

export default function GetForm() {
  const [step, setStep] = useState(1);
  const [formObject, setFormObject] = useState({});
  // console.log("formObject: ", formObject);
  const {
    dataMeteoContextValue: { setContenu, contenu },
  } = useContext(DataMeteoContext);

  // console.log("contenuherve", contenu);
  const handleNext = (data) => {
    setStep((prev) => prev + 1);
    setFormObject((prevFormObject) => ({
      ...prevFormObject,
      ...data,
    }));
  };

  const handlePrevious = (data) => {
    setStep((prev) => prev - 1);
    setFormObject((prevFormObject) => ({
      ...prevFormObject,
      ...data,
    }));
    setContenu([]);
  };

  const handleSubmit = (data) => {
    const updatedFormObject = { ...formObject, ...data };
    setFormObject(updatedFormObject);
    setContenu((prevRecordings) => [...prevRecordings, updatedFormObject]);

    const formData = new FormData();
    for (const key in updatedFormObject) {
      formData.append(key, updatedFormObject[key]);
    }
    console.log("formData", formData.get("file"));
  };

  return (
    <div>
      {step === 1 && <Level1 onNext={handleNext} onPrevious={handlePrevious} />}
      {step === 2 && (
        <Level2
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          formObject={formObject}
        />
      )}
    </div>
  );
}
