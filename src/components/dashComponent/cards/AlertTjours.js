import React from "react";

const Card = ({ temperature, jour, icon }) => {
  return (
    <div className="bg-white border border-borde-gray text-md rounded-lg p-4 mx-2 mb-4">
      <div className="flex  flex-col items-center justify-between mb-4">
        <p className="text-sm font-semibold">{jour}</p>
        <img
          src=""
          // src={require(`${icon}.png`).default}
          alt="Weather Icon"
          className="w-8 h-8"
        />
      </div>
      <p className="text-md text-center font-bold">{temperature}°C</p>
    </div>
  );
};

const TT = ({ forecast }) => {
  const infoCards = [
    { label: "UV", value: 8 },
    { label: " Status  vent", value: "15 km/h" },
    { label: "Lever soleil", value: "06:30 AM" },
    { label: "Coucher soleil", value: "07:45 PM" },
    { label: "Humidité", value: "60%" },
    { label: "Visibilité", value: "10 km" },
    { label: "Qualité de l'air", value: "Good" },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Prévision Météorologique</h2>
        <div className="flex flex-wrap">
          {forecast?.map((card, index) => {
            const date = new Date(card.dt * 1000);
            const options = { weekday: "long", timeZone: "UTC" };
            const jour = new Intl.DateTimeFormat("fr-FR", options).format(date);
            const temperature = Math.floor(card.main.temp - 273);
            const icon = card.weather[0].icon;

            return (
              <Card
                key={index}
                jour={jour}
                temperature={temperature}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
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
    </div>
  );
};

export default TT;
