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

  const getIcon = (code) => {
    switch (code) {
      case "01d":
        return {
          message:
            "Le soleil brille aujourd'hui ! C'est le moment idéal pour travailler dans les champs et profiter du beau temps !",
          icon: <FiSun className="w-8 h-8 text-[#FFEB3B]" />,
        };
      case "02d":
      case "03d":
      case "04d":
        return {
          message:
            "Le ciel est partiellement nuageux aujourd'hui. Les conditions sont favorables pour les cultures en plein air. Bonne journée de travail !",
          icon: <FiCloud className="w-8 h-8 text-[#D3D3D3]" />,
        };
      case "09d":
      case "10d":
        return {
          message:
            "Il pleut aujourd'hui. C'est une bonne nouvelle pour vos cultures ! Assurez-vous de prévoir des mesures pour collecter l'eau de pluie.",
          icon: <FiCloudRain className="w-8 h-8 " />,
        };
      case "13d":
        return {
          message:
            "Les flocons de neige tombent doucement du ciel. Assurez-vous de protéger vos cultures sensibles au froid et profitez de cette pause hivernale !",
          icon: <FiCloudSnow className="w-8 h-8 " />,
        };
      default:
        return {
          message:
            "Les conditions météorologiques sont variables aujourd'hui. Restez vigilant et adaptez vos activités agricoles en conséquence.",
          icon: <FiWind className="w-8 h-8 text-[#2196F3]" />,
        };
    }
  };

  return (
    <div className="bg-gray-100 p-8">
      {/* <div></div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Prévision Météorologique</h2>
        <div className="flex flex-wrap gap-2">
          {forecast?.map((card, index) => {
            const date = new Date(card.dt * 1000);
            const options = { weekday: "long", timeZone: "UTC" };
            const jour = new Intl.DateTimeFormat("fr-FR", options).format(date);
            const heure = date.getHours();
            const temperature = Math.floor(card?.main?.temp - 273);
            const icon = card.weather[0].icon;
            const condition = card.weather[0].description;
            const meteoInfo = { jour, heure, temperature, condition };

            return (
              <div key={index}>
                <CardForecast
                  jour={jour}
                  heure={heure}
                  temperature={temperature}
                  icon={icon}
                  rain={condition}
                  getIcon={getIcon}
                />
              </div>
            );
          })}
        </div> */}
      {/* </div> */}
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
