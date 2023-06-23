import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ProductionCycleChart() {
  // Données des cycles de production
  const cycleData = [
    { name: "Semence", pourcentage: 100 },
    { name: "Croissance", pourcentage: 70 },
    { name: "Récolte", pourcentage: 65 },
    { name: "Conditionnement", pourcentage: 50 },
  ];

  return (
    <div>
      <h2>Plan de production - Cycles</h2>
      <p>
        Ce graphique représente les pourcentages d'accomplissement des
        différents cycles de production.
      </p>
      <BarChart
        width={400}
        height={300}
        data={cycleData}
        className="-mx-6 mt-3"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pourcentage" fill="#488575" />
      </BarChart>
    </div>
  );
}
