import React from "react";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { PulseLoader } from "react-spinners";
import "./cardMeteo.css";
import UseTimer from "../../../hooks/useTime";

export default function CardMeteo() {
  const {
    hours,
    minutes,
    weatherIcon,
    temperature,
    humidity,
    windSpeed,
    localisation,
  } = UseTimer();

  return (
    <div className="weather-info">
      <div className="weather-info__left">
        <div className="weather-icon ">{weatherIcon}</div>
        <div className="weather-info__content">
          <p className="weather-info__title">Aujourd'hui</p>
          <p className="weather-info__temperature">
            {temperature ? temperature : <PulseLoader color="#36d7b7" />}
          </p>
        </div>
      </div>
      <div className="weather-info__right">
        <div className="weather-info__time">
          <p className="weather-info__time-hours">
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
          <p className="weather-info__time-range"> </p>
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
