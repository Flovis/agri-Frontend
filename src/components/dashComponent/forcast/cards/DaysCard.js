import React from "react";
import { BiMeteor } from "react-icons/bi";
import getIcon from "../../../../conditions/GetIconWeather";

export default function DaysCard({ day, icon, minMaxTemperatures }) {
  const { min, max } = minMaxTemperatures;

  return (
    <div className="flex flex-col items-center bg-custom-white rounded-lg p-2 w-[170px]">
      <div className="text-md font-semibold mb-2">{day}</div>
      <div className="text-4xl text-primary mb-2">
        <BiMeteor />
        {icon}
      </div>
      <div className="text-md text-center w-20 ">
        {
          <>
            {min}-{max}°c
          </>
        }
      </div>
    </div>
  );
}
