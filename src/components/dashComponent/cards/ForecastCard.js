import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ForcastModal from "../Modal/ForcastModal";

export default function ForecastCard() {
  const [isopen, setIsOpen] = useState(false);

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  function handlePopup() {
    setIsOpen(true);
  }

  return (
    <div className="mt-32 mx-4">
      <div className="flex flex-col gap-4">
        <h1 className="mb-2 text-lg font-bold text-green-900 dark:text-white flex justify-between">
          <span>Prévisions météorologiques</span>
          <span className="text-deep-green" onClick={handlePopup}>
            Voir Plus >
          </span>
        </h1>

        <div className="grid h-full max-w-lg grid-cols-2 gap-6 font-medium">
          <div className="p-4 bg-custom-white rounded-md bg-white flex flex-col justify-center gap-1">
            <p className="mb-2 flex justify-between">
              <span className="text-gray-700 font-semibold text-lg truncate">
                2023-06-10
              </span>
              <span className="text-deep-green font-bold truncate">Lundi</span>
            </p>
            <p className="text-gray-600 truncate">Température : 25°C</p>
            <p className="text-gray-600 truncate">Humidité : 70%</p>
            <p className="text-gray-600 truncate">Vitesse du vent : 10 km/h</p>
            <p className="text-gray-600 truncate">Conditions : Ensoleillé</p>
          </div>

          <div className="p-4 bg-custom-white rounded-md bg-white flex items-center justify-center flex-col gap-2">
            <div
              className="rounded-full bg-[#488575] text-custom-white h-16 w-16 flex items-center justify-center text-white text-2xl"
              onClick={handlePopup}
            >
              <BsThreeDots />
            </div>
            {isopen && <ForcastModal onClose={handleClosePopup} />}
            <h1 className="text-lg font-bold">VOIR PLUS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
