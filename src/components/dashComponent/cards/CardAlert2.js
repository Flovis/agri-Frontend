import { useState } from "react";

const CartePrevision = ({ meteo, data }) => {
  const [estEtendu, setEstEtendu] = useState(false);

  const basculerEtendu = () => {
    setEstEtendu(!estEtendu);
  };

  return (
    <div className="w-64 bg-gray-100 rounded-lg shadow-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{meteo.date}</h2>
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={basculerEtendu}
        >
          {estEtendu ? "-" : "+"}
        </button>
      </div>
      {estEtendu && (
        <div>
          <p className="mb-2">Température : {meteo.temperature}°C</p>
          <p className="mb-2">Humidité : {meteo.humidite}%</p>
          <p className="mb-2">Vitesse du vent : {meteo.vitesseVent} km/h</p>
        </div>
      )}
    </div>
  );
};

const CardAlert2 = ({ data }) => {
  const previsionMeteo = [
    {
      date: "Lundi",
      temperature: 23,
      humidite: 60,
      vitesseVent: 10,
    },
    {
      date: "Mardi",
      temperature: 25,
      humidite: 55,
      vitesseVent: 12,
    },
    {
      date: "Mercredi",
      temperature: 20,
      humidite: 70,
      vitesseVent: 8,
    },
    {
      date: "Jeudi",
      temperature: 23,
      humidite: 60,
      vitesseVent: 10,
    },
    {
      date: "Vendredi",
      temperature: 25,
      humidite: 55,
      vitesseVent: 12,
    },
    {
      date: "Samedi",
      temperature: 20,
      humidite: 70,
      vitesseVent: 8,
    },
    {
      date: "Dimache",
      temperature: 20,
      humidite: 70,
      vitesseVent: 8,
    },
  ];

  return (
    <div className="flex flex-col items-end h-screen">
      {previsionMeteo.map((meteo, index) => (
        <CartePrevision key={index} meteo={meteo} />
      ))}
    </div>
  );
};

export default CardAlert2;
