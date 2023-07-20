import React, { createContext, useState } from "react";
import DynamicTitle from "../../PublicComponent/DynamicTitle";
import UseTimer from "../../../../hooks/useTime";
import DaysCard from "./DaysCard";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import { useNavigate } from "react-router-dom";
import AjoutCat from "../../Modal/AjoutLangue";
import { BiPlusMedical } from "react-icons/bi";

export default function TodayMeteo() {
  const {
    hours,
    minutes,
    weatherIcon,
    temperature,
    humidity,
    windSpeed,
    pressurePercentage,
    minMaxTemperatures,
  } = UseTimer();

  const jours = Object.keys(minMaxTemperatures);
  const navigate = new useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-screen  mt-32 md:mt-36  md:max-w-screen-xl mx-auto  ">
        <div>
          <div className="mt-2 md:mt-6">
            <div className=" font-bold  mx-6 flex justify-between items-center ">
              <DynamicTitle text="Prévision Méteologique" size="sm" md="md" />

              <DynamicButton
                label={
                  <p className="flex font-extrabold items-center gap-2">
                    {<BiPlusMedical />}
                    <p>Configuration</p>
                  </p>
                }
                onClick={handleOpen}
              />
            </div>
            <div className="mt-4 md:mt-10">
              <div className="w-full mb-5">
                <div className="flex items-center justify-center mx-20">
                  <div className="mr-8">
                    <p className="text-6xl">{weatherIcon}</p>
                  </div>
                  <div>
                    <p className="text-5xl font-extrabold text-deep-green">
                      {temperature}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isOpen && <AjoutCat isOpen={isOpen} setIsOpen={setIsOpen} />}

            <div className="flex items-center justify-center w-full ">
              <div className="bg-custom-white w-[90%] md:w-[70%] shadow-lg md: rounded-lg p-6 h-[max-content]">
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">{temperature}</p>
                    <p className="text-sm text-text-gray">Témperature</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">{windSpeed}</p>
                    <p className="text-sm text-text-gray">Vent</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">
                      {hours}:{minutes}
                    </p>
                    <p className="text-sm text-text-gray">Lever</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-4">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">{pressurePercentage} % </p>
                    <p className="text-sm text-text-gray">Préssion</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">{humidity}</p>
                    <p className="text-sm text-text-gray">Humidité</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-bold">
                      {hours}:{minutes}
                    </p>
                    <p className="text-sm text-gray-500">Coucher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6 text-md font-bold my-6 text-text-gray">
            Prévision de 7 jours
          </div>
          <div className=" flex items-center md:h-60   justify-center px-2 md:mt-10  h-36">
            <div className="overflow-x-auto flex md:flex-none md:grid md:grid-cols-4 gap-6">
              {jours?.map((day) => (
                <DaysCard
                  day={day}
                  minMaxTemperatures={minMaxTemperatures[day]}
                  key={day}
                  // Ajoutez toutes les autres propriétés supplémentaires dont vous avez besoin pour le composant DaysCard
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
