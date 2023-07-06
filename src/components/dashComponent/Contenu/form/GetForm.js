import React, { useState } from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";

export default function GetForm() {
  const [step, setStep] = useState(1);
  const [formObject, setFormObject] = useState({});
  const [recordings, setRecordings] = useState([]);
  console.log("recordings: ", recordings);

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
    setRecordings([]);
  };

  const handleSubmit = (data) => {
    const updatedFormObject = { ...formObject, ...data };
    setFormObject(updatedFormObject);
    setRecordings((prevRecordings) => [...prevRecordings, updatedFormObject]); // Ajouter le nouvel enregistrement au tableau des enregistrements
  };

  return (
    <div>
      {step === 1 && <Level1 onNext={handleNext} onPrevious={handlePrevious} />}
      {step === 2 && (
        <Level2 onPrevious={handlePrevious} onSubmit={handleSubmit} />
      )}
      {/* {recordings.length > 0 && (
        <div>
          <h2>Enregistrements :</h2>
          <ul>
            {recordings.map((recording, index) => (
              <li key={index}>
                Enregistrement {index + 1}:
                <ul>
                  {Object.entries(recording).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}: </strong>
                      {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}
