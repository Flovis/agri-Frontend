import React, { useContext } from "react";
import DataMeteoContext from "../../../context/MeteoContext";

const CardForecast = () => {
  const { forecast, setConditionAlert } = useContext(DataMeteoContext);
  const resultat = {};

  for (let i = 0; i < forecast?.length; i++) {
    const jour = forecast[i].jour;
    const heure = forecast[i].heure;
    const temperature = forecast[i].temperature;
    const condition = forecast[i].condition;

    if (!resultat[jour]) {
      resultat[jour] = [];
    }

    resultat[jour].push({ heure, temperature, condition });
  }

  return (
    <>
      <div className="flex justify-between mx-4 my-2 items-center ">
        <div className="font-extrabold text-lg">Prévision méteologique</div>
        <button className="bg-deep-green p-2 rounded-md text-custom-white">
          configuration
        </button>
      </div>
      <div className="min-h-screen mb-28  flex flex-col items-center  justify-center gap-3  bg-gray-100">
        {Object.keys(resultat)?.map((jour) => (
          <div
            className="bg-custom-white rounded-lg  w-full md:w-96 p-6"
            key={jour}
          >
            <div className="mb-4">
              <div className="text-xl font-semibold mb-2">{jour}</div>
              {resultat[jour].map((forecast, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2 border border-borde-gray p-2 rounded"
                >
                  <div className="text-sm">{forecast.heure}</div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-deep-green text-custom-white rounded-full mr-2"></div>
                    <div className="text-lg font-medium">
                      {forecast.temperature}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardForecast;
