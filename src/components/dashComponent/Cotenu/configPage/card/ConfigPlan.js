import React, { useRef, useState } from "react";
import Fichier from "../../Fichier";
import ContenuSelect from "./ContenuSelect";
import Partage from "./Partage";

export default function ConfigPlan() {
  const [step, setstep] = useState(1);
  const [currentValue, setCurrentValue] = useState("");
  const [data, setdata] = useState("");
  console.log("data: ", data);
  const SelectRef = useRef("");
  const handleSelectChange = (e) => {
    setCurrentValue(e.target.value);
  };
  //   const { }

  const handleContenu = (data) => {
    setdata((prevFormObject) => ({
      ...prevFormObject,
      ...data,
    }));
    setstep((prev) => prev + 1);
  };

  const handleSubmit = async (data) => {
    const updatedFormObject = { ...data, ...data };
    setdata(updatedFormObject);
    const formData = new FormData();
    for (const key in updatedFormObject) {
      formData.append(key, updatedFormObject[key]);
    }
    console.log("formData: ", formData);
    setstep((prev) => prev + 1);
  };
  return (
    <div>
      {step === 1 && (
        <ContenuSelect
          onNext={handleContenu}
          //   onPrevious={handlePrevious}
          SelectRef={SelectRef}
          handleSelectChange={handleSelectChange}
        />
      )}
      {step === 2 && (
        <Fichier onPrevious={handleContenu} open={step} Type={currentValue} />
      )}
      {step === 3 && <Partage />}
    </div>
  );
}
