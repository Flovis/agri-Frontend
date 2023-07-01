import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { PulseLoader } from "react-spinners";
import DataMeteoContext from "../../../context/MeteoContext";
import './cardMeteo.css'
import getIcon from "../../../conditions/GetIconWeather";

export default function CardMeteo() {
  const [hours, setHours] = useState(() => new Date().getHours());
  const [minutes, setMinutes] = useState(() => new Date().getMinutes());
  const {dataMeteoContextValue:{weather,forecast}} = useContext(DataMeteoContext)
  const weatherIcon = getIcon(weather)
 
  console.log('weatherIcon: ', weatherIcon);
  

  const updateTime = useCallback(() => {
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
  }, []);
  
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  const temperature = weather ? `${Math.floor(weather.main.temp - 273)}°C` : null;
  const humidity = weather ? `${Math.floor(weather.main.humidity)}%` : null;
  const windSpeed = weather ? `${Math.floor(weather.wind.speed * 3.6)}Km/h` : null;

  return (
    <div className="weather-info">
    <div className="weather-info__left">
      <div className="weather-icon ">
        {weatherIcon}
  
      </div>
      <div className="weather-info__content">
        <p className="weather-info__title">Aujourd'hui</p>
        <p className="weather-info__temperature">
          {temperature ? temperature : <PulseLoader color="#36d7b7" />}
        </p>
      </div>
    </div>
    <div className="weather-info__right">
      <div className="weather-info__time">
        <p className="weather-info__time-hours">{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}</p>
        <p className="weather-info__time-range">(7:19 / 18:30)</p>
      </div>
      <div className="weather-info__details">
        <p className="weather-info__detail">
          <WiHumidity className="weather-icon" />
          {humidity ? humidity : <PulseLoader color="#36d7b7" />}
        </p>
        <p className="weather-info__detail">
          <WiWindy className="weather-icon" />
          {windSpeed ? windSpeed : <PulseLoader color="#36d7b7" />}
        </p>
      </div>
    </div>
  </div>
  );
}
