import React from "react";

export default function CardDay(tableau) {
  console.log("tableau: ", tableau);
  const jour = Object.keys(tableau);
  console.log("jour: ", jour);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* {tableau?.map((day, index) => (
          <div key={index} className="mb-4">
            <div className="text-lg font-medium mb-2">{Object.keys(day)}</div>
            {day.forecast.map((forecast, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <div className="text-sm">{forecast.time}</div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-2">
                    <i className={`wi wi-${forecast.icon}`} />
                  </div>
                  <div className="text-base font-medium">
                    {forecast.temperature}°C
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))} */}
      </div>
    </div>
  );
}
