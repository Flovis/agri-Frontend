import React, { useState } from "react";

export default function DashCard() {
  const [statistics, setStatistics] = useState({
    totalFarmers: 100,
    totalFarms: 50,
    totalCrops: 200,
    totalHarvests: 300,
  });

  return (
    <div className="p-2">
      {/* Section Aperçu */}
      <section className=" rounded-lg  mb-8">
        <h2 className="text-xl font-bold mb-4">Aperçu</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-custom-white">
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
    </div>
  );
}
