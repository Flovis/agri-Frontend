import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const WeatheForecastChart = ({}) => {
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];
  const weatherData = [
    {
      id: 1,
      date: "2023-06-10",
      temperature: 25,
      humidity: 70,
      windSpeed: 10,
      conditions: "Ensoleillé",
    },
    {
      id: 2,
      date: "2023-06-11",
      temperature: 28,
      humidity: 65,
      windSpeed: 12,
      conditions: "Partiellement nuageux",
    },
  ];
  const data = [
    { name: "Temperature", value: weatherData[0].temperature },
    { name: "Humidité", value: weatherData[0].humidity },
    { name: "Vitesse", value: weatherData[0].windSpeed },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
    </PieChart>
  );
};

export default WeatheForecastChart;
