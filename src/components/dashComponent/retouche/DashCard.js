import React, { useState } from "react";

export default function DashCard() {
  const [statistics, setStatistics] = useState({
    totalFarmers: 100,
    totalFarms: 50,
    totalCrops: 200,
    totalHarvests: 300,
  });

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
    <div className="p-2">
      {/* Section Aperçu */}
      <section className=" rounded-lg  mb-8">
        <h2 className="text-xl font-bold mb-4">Aperçu</h2>
        <div className="grid grid-cols-2 gap-4 text-custom-white">
          <div className="bg-deep-green text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Agriculteurs</h3>
            <p className="text-2xl">{250}</p>
          </div>
          <div className="bg-[#3B82F6] text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Champs</h3>
            <p className="text-2xl">{statistics.totalFarms}</p>
          </div>
          <div className="bg-[#FFD700] text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">cultures</h3>
            <p className="text-2xl">{statistics.totalCrops}</p>
          </div>
          <div className="bg-[#8B5CF6] text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">récoltes</h3>
            <p className="text-2xl">{statistics.totalHarvests}</p>
          </div>
        </div>
      </section>

      {/* Section Groupes d'agriculteurs */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Groupes d'agriculteurs Actif</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
}
