import React, { useState } from "react";

export default function Liste({ condition, setSelectedData, selectedData }) {
  const handleDayChange = (jour) => {
    setSelectedData({
      ...selectedData,
      selectedDay: jour,
      selectedCondition: "",
      selectedHeure: "",
    });
  };

  const handleConditionChange = (event) => {
    const selectedConditionValue = event.target.value;
    setSelectedData({
      ...selectedData,
      selectedCondition: selectedConditionValue,
      selectedHeure:
        condition[selectedData.selectedDay]?.find(
          (item) => item.condition === selectedConditionValue
        )?.heure || "",
    });
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <ul className="mt-6 space-y-3">
        {Object.keys(condition)?.map((jour, idx) => (
          <li key={idx}>
            <label htmlFor={jour.name} className="block relative">
              <input
                id={jour}
                type="radio"
                checked={selectedData.selectedDay === jour}
                onChange={() => handleDayChange(jour)}
                name="jourSelectionne"
                className="sr-only peer"
              />
              <div className="w-full  p-5 cursor-pointer rounded-lg border bg-custom-white shadow-sm ring-borde-gray peer-checked:ring-1 duration-200">
                <div className="pl-7 w-screen">
                  <h3 className="leading-none text-text-gray font-medium ">
                    {jour}
                  </h3>
                  {selectedData.selectedDay === jour && (
                    <div className="mt-1">
                      {/* Liste déroulante pour les conditions */}
                      <select
                        value={selectedData.selectedCondition}
                        onChange={handleConditionChange}
                        // className="border"
                      >
                        <option value="">Sélectionner une condition</option>
                        {condition[jour].map((item, index) => (
                          <option key={index} value={item.condition}>
                            {item.condition}
                          </option>
                        ))}
                      </select>

                      {/* Afficher l'heure sélectionnée */}
                      {selectedData.selectedCondition && (
                        <p>Heure sélectionnée: {selectedData.selectedHeure}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
