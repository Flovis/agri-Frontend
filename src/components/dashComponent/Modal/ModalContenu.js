import React, { useState } from "react";
import DynamicSelect from "../PublicComponent/DynamicSelect ";
import DynamicButton from "../PublicComponent/DynamicButton ";
import { Notyf } from "notyf";
import { useNavigate } from "react-router-dom";

export default function ModalContenu({ isOpen, setIsOpen }) {
  const navigate = new useNavigate();
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });
  // codition pour declancher

  //   const handleOpen = () => {
  //     setIsOpen(!isOpen);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-60 ">
        <form
          className=" p-4 border border-borde-gray bg-custom-white rounded-lg w-[90%] z-50 relative"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              choix du contenu
            </h3>
            <hr />
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300"></div>
          <div className="flex justify-end">
            <DynamicButton label="Valider" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
