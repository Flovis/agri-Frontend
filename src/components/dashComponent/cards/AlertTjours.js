import React, { useState } from "react";
import {
  FiCloud,
  FiCloudRain,
  FiCloudSnow,
  FiSun,
  FiWind,
} from "react-icons/fi";

const Card = ({ temperature, jour, getIcon, icon }) => {
  return (
    <div className="bg-white w-20 border border-borde-gray text-md rounded-lg p-4 mx-2 mb-4">
      <div className="flex  flex-col items-center justify-between mb-4">
        <p className="text-sm font-semibold">{jour}</p>

        {getIcon(icon).icon}
        {/* className="w-8  h-8" */}
      </div>
      <p className="text-md text-center font-bold">{temperature}°C</p>
    </div>
  );
};

//compo3
const TT = ({ weather, forecast }) => {
  console.log("forecast: ", weather);
  console.log("weather: ", weather);
  const [information, setinformation] = useState({});
  console.log(weather?.main);

  const getIcon = (code) => {
    switch (code) {
      case "01d":
        return {
          message:
            "Le soleil brille aujourd'hui ! C'est le moment idéal pour travailler dans les champs et profiter du beau temps !",
          icon: <FiSun className="w-8 h-8" />,
        };
      case "02d":
      case "03d":
      case "04d":
        return {
          message:
            "Le ciel est partiellement nuageux aujourd'hui. Les conditions sont favorables pour les cultures en plein air. Bonne journée de travail !",
          icon: <FiCloud className="w-8 h-8" />,
        };
      case "09d":
      case "10d":
        return {
          message:
            "Il pleut aujourd'hui. C'est une bonne nouvelle pour vos cultures ! Assurez-vous de prévoir des mesures pour collecter l'eau de pluie.",
          icon: <FiCloudRain className="w-8 h-8" />,
        };
      case "13d":
        return {
          message:
            "Les flocons de neige tombent doucement du ciel. Assurez-vous de protéger vos cultures sensibles au froid et profitez de cette pause hivernale !",
          icon: <FiCloudSnow className="w-8 h-8" />,
        };
      default:
        return {
          message:
            "Les conditions météorologiques sont variables aujourd'hui. Restez vigilant et adaptez vos activités agricoles en conséquence.",
          icon: <FiWind className="w-8 h-8" />,
        };
    }
  };
  const infoCards = [
    { label: "Préssion", value: `${weather.main.sea_level}` },
    { label: " Status  vent", value: `${weather.wind.speed * 3.6} km/h` },
    { label: "Lever soleil", value: getIcon(weather.weather.icon) },
    { label: "Coucher soleil", value: "07:45 PM" },
    { label: "Humidité", value: `${weather?.main.humidity}` },
    { label: "Visibilité", value: `${weather.wind.speed * 3.6} km/h` },
    { label: "Qualité de l'air", value: "Good" },
  ];
  const weatherConditions = [
    {
      code: "01d",
      message:
        "Le soleil brille aujourd'hui ! C'est le moment idéal pour travailler dans les champs et profiter du beau temps !",
    },
    // {
    //   code: "02d",
    //   message:
    //     "Le ciel est partiellement nuageux aujourd'hui. Les conditions sont favorables pour les cultures en plein air. Bonne journée de travail !",
    // },
    // {
    //   code: "03d",
    //   message:
    //     "Le ciel est partiellement nuageux aujourd'hui. Les conditions sont favorables pour les cultures en plein air. Bonne journée de travail !",
    // },
    // {
    //   code: "04d",
    //   message:
    //     "Le ciel est partiellement nuageux aujourd'hui. Les conditions sont favorables pour les cultures en plein air. Bonne journée de travail !",
    // },
    // {
    //   code: "09d",
    //   message:
    //     "Il pleut aujourd'hui. C'est une bonne nouvelle pour vos cultures ! Assurez-vous de prévoir des mesures pour collecter l'eau de pluie.",
    // },
    // {
    //   code: "10d",
    //   message:
    //     "Il pleut aujourd'hui. C'est une bonne nouvelle pour vos cultures ! Assurez-vous de prévoir des mesures pour collecter l'eau de pluie.",
    // },
    // {
    //   code: "13d",
    //   message:
    //     "Les flocons de neige tombent doucement du ciel. Assurez-vous de protéger vos cultures sensibles au froid et profitez de cette pause hivernale !",
    // },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Information Météorologique</h2>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-borde-gray rounded-lg p-4"
            >
              <p className="text-lg font-semibold mb-2">{card.label}</p>
              <p>{card.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Prévision Météorologique</h2>
        <div className="flex flex-wrap">
          {forecast?.map((card, index) => {
            const date = new Date(card.dt * 1000);
            const options = { weekday: "long", timeZone: "UTC" };
            const jour = new Intl.DateTimeFormat("fr-FR", options).format(date);
            const temperature = Math.floor(card?.main?.temp - 273);
            const icon = card.weather[0].icon;

            return (
              <Card
                key={index}
                jour={jour}
                temperature={temperature}
                icon={icon}
                getIcon={getIcon}
              />
            );
          })}
        </div>
      </div>

      {weatherConditions.map((condition, index) => (
        <div
          key={index}
          className="flex bg-blue-100 border-t-4 border-deep-green rounded-b text-blue-900 px-4 py-3 shadow-md mt-4"
        >
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
        </div>
      ))}
    </div>
  );
};

export default TT;
