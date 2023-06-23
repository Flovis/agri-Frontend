import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import communesHautKatanga from "../../../data/Coordonnees";

const SumilationCoords = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const groupedCommunes = groupCommunes(communesHautKatanga);

    const labels = Object.keys(groupedCommunes);
    const data = Object.values(groupedCommunes).map((group) => group.length);

    const chartConfig = {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            label: "Nombre de communes",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy(); // Détruire le graphique précédent s'il existe
    }

    chartRef.current = new Chart(ctx, chartConfig);
  }, []);

  const groupCommunes = (communes) => {
    const groupedCommunes = {};

    for (const commune of communes) {
      const groupe = `Groupe ${Math.ceil(commune.latitude)}`;

      if (groupedCommunes[groupe]) {
        groupedCommunes[groupe].push(commune);
      } else {
        groupedCommunes[groupe] = [commune];
      }
    }

    return groupedCommunes;
  };

  return <canvas ref={canvasRef}></canvas>;
};

export default SumilationCoords;
