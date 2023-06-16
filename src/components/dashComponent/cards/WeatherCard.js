import React, { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import DataMeteoContext from "../../../context/Contex";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ForecastCard from "./ForecastCard";

export default function WeatherCard() {
  const { meteo } = useContext(DataMeteoContext);

  return (
    <div className="">
      <div className="h-18 bg-custom-white fixed w-full shadow-md">
        <Header />
      </div>
      <div className="overflow-y-scroll h-[calc(100vh-72px)] pt-8">
        <div className="h-48 pt-24 px-4">
          <h1 className="mb-4 text-xl font-bold text-[#043d1d] dark:text-white">
            Données météorologiques actuelles
          </h1>
          <div className="flex justify-between text-custom-white items-center bg-[#488575] rounded-md h-40 p-4">
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Lubumbashi
                </h2>
                <div className="flex items-center">
                  {/* Replace the commented code with appropriate weather icon */}
                  {/* {meteo.weather?.map((el) => {
                const weatherIconClass = `wi wi-owm-${el.icon}`;
                <i className={weatherIconClass} />;
              })} */}
                  <h1 className="text-5xl">27°C</h1>
                </div>
                <h1>23% humidité</h1>
              </div>
            </div>
            {/* //part 2 */}
            <div className="flex gap-6">
              <div>
                <h2>Lubumbashi</h2>
                <h1 className="flex items-center gap-3">
                  <TiWeatherPartlySunny className="text-4xl" /> 27°C
                </h1>
                <h1>23% humidité</h1>
              </div>
              <div>
                <h2>Lubumbashi</h2>
                <h1 className="flex items-center gap-3">
                  <TiWeatherPartlySunny className="text-4xl" /> 27°C
                </h1>
                <h1>23% humidité</h1>
              </div>
            </div>
          </div>
        </div>
        <ForecastCard />
      </div>

      <Footer
        data={[
          {
            to: "/dashboard",
            icon: <MdDashboard className="text-2xl" />,
            nom: "Accueil",
          },
          {
            to: "/dashboard/contenu",
            icon: <LuLibrary className="text-2xl" />,
            nom: "Contenu",
          },
          {
            to: "/dashboard/localisation",
            icon: <GrMapLocation className="text-2xl" />,
            nom: "Map",
          },
          {
            to: "/dashboard/alert",
            icon: <TbSpeakerphone className="text-2xl" />,
            nom: "Alert",
          },
          {
            to: "/dashboard/parametre",
            icon: <FiSettings className="text-2xl" />,
            nom: "Parametre",
          },
        ]}
      />
    </div>
  );
}