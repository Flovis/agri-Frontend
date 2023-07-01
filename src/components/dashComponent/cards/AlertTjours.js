import React, { useState } from "react";
import {
  FiCloud,
  FiCloudRain,
  FiCloudSnow,
  FiSun,
  FiWind,
} from "react-icons/fi";

const TT = ({ weather, forecast }) => {
  const [meteo, setMeteo] = useState([]);

  const joure = [];

  function regrouperDoublons(tableau) {
    const regroupement = {};

    tableau.forEach(function (element, index) {
      if (regroupement[element]) {
        regroupement[element].push(index);
      } else {
        regroupement[element] = [index];
      }
    });
    return regroupement;
  }



  return (
    <div className="bg-gray-100 p-8">
      {/* 
      <div className="flex bg-blue-100 border-t-4 border-deep-green rounded-b text-blue-900 px-4 py-3 shadow-md mt-4">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-deep-green"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M6 9l6-6 6 6"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{condition.message}</p>
        </div>
      </div> */}
    </div>
  );
};

export default TT;
