import { WiDaySunny, WiCloud, WiCloudy, WiNightAltPartlyCloudy, WiCloudyGusts, WiCloudyWindy, WiRain, WiSnow } from "react-icons/wi";

const getIcon = (code) => {
  const weatherIcons = code === 'weather'
    ? [code?.weather[0]?.icon]
    : code?.weather?.map(weatherElement => weatherElement.icon);

  const getWeatherIcons = (weatherIcons) => {
    return weatherIcons.map((weatherIcon) => {
      let IconComponent;
      let color;

      switch (weatherIcon) {
        case "01d":
          IconComponent = WiDaySunny;
          color = "#FDB813"; // Jaune
          break;
        case "01n":
          IconComponent = WiNightAltPartlyCloudy;
          color = "#58617A"; // Gris foncé
          break;
        case "02d":
        case "02n":
          IconComponent = WiCloud;
          color = "#D3D3D3"; // Gris clair
          break;
        case "03d":
        case "03n":
          IconComponent = WiCloudy;
          color = "#B2B6BD"; // Gris moyen
          break;
        case "04d":
        case "04n":
          IconComponent = WiCloudyWindy;
          color = "#78849E"; // Gris bleuâtre
          break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          IconComponent = WiRain;
          color = "#007BFF"; // Bleu
          break;
        case "11d":
        case "11n":
          IconComponent = WiCloudyGusts;
          color = "#757D93"; // Gris-bleu
          break;
        case "13d":
        case "13n":
          IconComponent = WiSnow;
          color = "#C2DFFF"; // Bleu clair
          break;
        default:
          IconComponent = null;
          color = "#000000"; // Noir (par défaut)
          break;
      }

      return {
        icon: IconComponent && <IconComponent color={color} />,
        color: color,
      };
    });
  };

  const weatherIconList = getWeatherIcons(weatherIcons);

  return weatherIconList.map((weatherIcon, index) => (
    <div key={index}>
  
      <span className="text-4xl " style={{ color: weatherIcon.color }}> {weatherIcon.icon}</span>
    </div>
  ));
};

export default getIcon;
