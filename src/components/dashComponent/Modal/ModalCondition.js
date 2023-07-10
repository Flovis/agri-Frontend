import React, { useState } from "react";
import DynamicButton from "../PublicComponent/DynamicButton ";
import { Notyf } from "notyf";
import DynamicCheckbox from "../PublicComponent/DynamicCheckbox";

export default function ModalCondition({ isOpen, setIsOpen, setData }) {
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData.entries());
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleClose = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="z-50 fixed inset-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-60">
        <form
          className="p-4 border border-gray-300 bg-custom-white rounded-lg w-[90%] z-50 relative"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Gestion des Conditions
            </h3>
            <hr />
            <button onClick={handleClose}>X</button>
          </div>
          <div className="flex justify-between">
            <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
              <DynamicCheckbox
                label="Précipitations"
                type="radio"
                value="precipitation"
                name="condition"
              />
              <DynamicCheckbox
                label="VentsForts"
                type="radio"
                value="ventFort"
                name="condition"
              />
              <DynamicCheckbox
                label="Ensoleillé"
                type="radio"
                value="ensoleille"
                name="condition"
              />
              <DynamicCheckbox
                label="Nuageux"
                type="radio"
                value="nuageux"
                name="condition"
              />
              <DynamicCheckbox
                label="Pluvieux"
                type="radio"
                value="pluvieux"
                name="condition"
              />
            </div>
            <div>
              <input
                type="date"
                name="date"
                id="date"
                className="border mt-4 w-36 border-gray-300 text-gray text-md appearance-none rounded-lg focus:outline-none focus:ring-gray focus:border-gray block w-full p-3.5"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DynamicButton label="Valider" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
