import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiNightAltPartlyCloudy,
  WiCloudyGusts,
  WiCloudyWindy,
  WiRain,
  WiSnow,
} from "react-icons/wi";

const weatherColors = {
  sunny: "#FDB813", // Jaune
  partlyCloudyNight: "#58617A", // Gris foncé
  cloudy: "#D3D3D3", // Gris clair
  mediumCloudy: "#B2B6BD", // Gris moyen
  blueishCloudy: "#78849E", // Gris bleuâtre
  rain: "#007BFF", // Bleu
  gusts: "#757D93", // Gris-bleu
  snow: "#C2DFFF", // Bleu clair
  default: "#000000", // Noir (par défaut)
};

const getIcon = (code) => {
  const weatherIcons =
    code === "weather"
      ? [code?.weather[0]?.icon]
      : code && code.weather
      ? code?.weather?.map((weatherElement) => weatherElement.icon)
      : "";

  const getWeatherIcons = (weatherIcons) => {
    return weatherIcons
      ? weatherIcons?.map((weatherIcon) => {
          let IconComponent;
          let color;

          switch (weatherIcon) {
            case "01d":
              IconComponent = WiDaySunny;
              color = weatherColors.sunny;
              break;
            case "01n":
              IconComponent = WiNightAltPartlyCloudy;
              color = weatherColors.partlyCloudyNight;
              break;
            case "02d":
            case "02n":
              IconComponent = WiCloud;
              color = weatherColors.cloudy;
              break;
            case "03d":
            case "03n":
              IconComponent = WiCloudy;
              color = weatherColors.mediumCloudy;
              break;
            case "04d":
            case "04n":
              IconComponent = WiCloudyWindy;
              color = weatherColors.blueishCloudy;
              break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
              IconComponent = WiRain;
              color = weatherColors.rain;
              break;
            case "11d":
            case "11n":
              IconComponent = WiCloudyGusts;
              color = weatherColors.gusts;
              break;
            case "13d":
            case "13n":
              IconComponent = WiSnow;
              color = weatherColors.snow;
              break;
            default:
              IconComponent = null;
              color = weatherColors.default;
              break;
          }

          return {
            icon: IconComponent && <IconComponent color={color} />,
            color: color,
          };
        })
      : "";
  };

  const weatherIconList = getWeatherIcons(weatherIcons);

  return weatherIconList.map((weatherIcon, index) => (
    <React.Fragment key={index}>
      <span className="text-4xl" style={{ color: weatherIcon.color }}>
        {weatherIcon.icon}
      </span>
    </React.Fragment>
  ));
};

export default getIcon;
