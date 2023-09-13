import React, { useState } from "react";
import DynamicButton from "../PublicComponent/DynamicButton ";
import { Notyf } from "notyf";

import Liste from "../Cotenu/configPage/card/ConditionShow";

export default function ModalCondition({ condition, setIsOpen, setData }) {
  const [selectedData, setSelectedData] = useState({
    selectedDay: "",
    selectedCondition: "",
    selectedHeure: "",
  });

  const isFormValid = () => {
    return (
      selectedData.selectedDay !== "" &&
      selectedData.selectedCondition !== "" &&
      selectedData.selectedHeure !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const notyf = new Notyf();
    if (isFormValid()) {
      setData(selectedData);
      handleClose();
      notyf.success("condition selectionnée  avec succès !");
    } else {
      notyf.error("Veuillez remplir tous les champs !");
    }
  };

  const handleClose = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="z-50 fixed inset-0 w-full  h-full flex items-center justify-center bg-[#000] bg-opacity-60">
        <form
          className="p-4 border border-gray-300 bg-custom-white rounded-lg w-[90%] md:w-[50%] md:h-[80%] z-50 relative"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Gestion des Conditions
            </h3>
            <hr />
            <button onClick={handleClose}>X</button>
          </div>
          <div className="flex items-center justify-center ">
            <div className="overflow-y-auto h-96  ">
              <Liste
                condition={condition}
                setSelectedData={setSelectedData}
                selectedData={selectedData}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DynamicButton
              label="Valider"
              type="submit"
              disabled={!isFormValid()}
            />
          </div>
        </form>
      </div>
    </>
  );
}
