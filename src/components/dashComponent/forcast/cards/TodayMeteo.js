import React, { createContext, useState } from "react";
import DynamicTitle from "../../PublicComponent/DynamicTitle";
import UseTimer from "../../../../hooks/useTime";
import DaysCard from "./DaysCard";
import getIcon from "../../../../conditions/GetIconWeather";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import { useNavigate } from "react-router-dom";
import AjoutCat from "../../Modal/AjoutLangue";

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
  // const handleclick = () => {
  //   navigate("/contenu/configpage");
  // };
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-[95%]">
        <div className="mt-2">
          <div className="text-xl font-bold  mx-6 flex justify-between items-center">
            <DynamicTitle text="Prévision Méteologique" />
            <DynamicButton
              label="Configuration"
              onClick={handleOpen}
              getsizeClasses="text-[12px] w-24 -mr-6 -py-2 flex justify-center"
            />
          </div>
          <div className="mt-4">
            <div className="w-screen mb-5">
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
          <div className="flex items-center justify-center w-screen">
            <div className="bg-custom-white w-[90%] shadow-lg rounded-lg p-6 h-[max-content]">
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
        <div
          className="overflow-x-auto flex gap-4 mx-6 mr-4"
          style={{ width: "100%" }}
        >
          {jours?.map((day) => (
            <DaysCard
              day={day}
              minMaxTemperatures={minMaxTemperatures[day]}
              key={day}
            />
          ))}
        </div>
      </div>
    </>
  );
}
