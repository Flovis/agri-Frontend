import { useCallback, useContext, useEffect, useState } from "react";
import DataMeteoContext from "../context/MeteoContext";
import getIcon from "../conditions/GetIconWeather";

const UseTimer = () => {
  const {
    dataMeteoContextValue: { weather, forecast, localisation },
  } = useContext(DataMeteoContext);

  const pressure = 1017; //  hPa
  const minPressure = 900;
  const maxPressure = 1100;
  const pressurePercentage =
    ((pressure - minPressure) / (maxPressure - minPressure)) * 100;

  const [hours, setHours] = useState(() => new Date().getHours());
  const [minutes, setMinutes] = useState(() => new Date().getMinutes());

  const weatherIcon = getIcon(weather);

  const updateTime = useCallback(() => {
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  const temperature = weather
    ? `${Math.floor(weather.main.temp - 273)}°C`
    : null;
  const humidity = weather ? `${Math.floor(weather.main.humidity)}%` : null;
  const windSpeed = weather
    ? `${Math.floor(weather.wind.speed * 3.6)}Km/h`
    : null;

  // forecast

  const groupedData = forecast?.reduce((acc, item) => {
    const { day, ...rest } = item;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(rest);
    return acc;
  }, {});

  const getMinMaxTemperatures = (groupedData) => {
    return Object.entries(groupedData)?.reduce(
      (result, [day, temperatures]) => {
        const minMax = temperatures.reduce(
          (minMax, { temperature }) => {
            const parsedTemperature = parseInt(temperature, 10);
            minMax.min = Math.min(minMax.min, parsedTemperature);
            minMax.max = Math.max(minMax.max, parsedTemperature);
            return minMax;
          },
          { min: Infinity, max: -Infinity }
        );

        result[day] = minMax;
        return result;
      },
      {}
    );
  };

  const minMaxTemperatures = getMinMaxTemperatures(groupedData);
  //   const ico = getIcon(forecast);
  //   console.log("ico: ", ico);
  const jours = Object.keys(minMaxTemperatures);

  return {
    hours,
    minutes,
    weatherIcon,
    temperature,
    humidity,
    windSpeed,
    localisation,
    pressurePercentage,
    minMaxTemperatures,
    jours,
  };
};

export default UseTimer;
