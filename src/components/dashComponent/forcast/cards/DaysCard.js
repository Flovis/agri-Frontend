import React from "react";
// import "./today.css";

export default function DaysCard({ day, icon, minMaxTemperatures, animation }) {
  const { min, max } = minMaxTemperatures;

  return (
    <div
      className={` flex flex-col hover:bg-meduim-green hover:scale-100 hover: cursor-pointer items-center bg-custom-white rounded-lg p-2 w-[170px]`}
    >
      <div className="text-md font-semibold mb-2">{day}</div>
      <div
        className={`text-4xl text-primary mb-2 animate-spin  ${animation}  hover:animate-spin `}
      >
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
