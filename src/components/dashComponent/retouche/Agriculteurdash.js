import React, { useState } from "react";

export default function Agriculteurdash() {
  const [farmerGroups, setFarmerGroups] = useState([
    {
      id: 1,
      name: "Kassapa #1",
      location: "Localisation 1",
      agricultureType: "Type de culture 1",
    },
    {
      id: 2,
      name: "kamalondo #2",
      location: "Localisation 2",
      agricultureType: "Type de culture 2",
    },
    {
      id: 3,
      name: "sakania #3",
      location: "Localisation 3",
      agricultureType: "Type de culture 3",
    },
  ]);
  return (
    <section className="bg-white shadow-md rounded-lg p-6 ">
      <h2 className="text-xl font-bold mb-4">Groupes d'agriculteurs Actif</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {farmerGroups.map((group) => (
          <div
            key={group.id}
            className="bg-meduim-green p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{group.name}</h3>
              <p className="text-sm mb-1">Localisation : {group.location}</p>
              <p className="text-sm">
                Type de culture : {group.agricultureType}
              </p>
            </div>
            <button className="bg-deep-green text-custom-white px-4 py-2 rounded-lg">
              Voir les détails
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
