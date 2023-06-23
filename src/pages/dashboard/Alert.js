import React from "react";
import { FiSettings } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import AlertConfiguration from "../../components/dashComponent/cards/AlertConfiguration";
import TT from "../../components/dashComponent/cards/AlertTjours";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";

export default function Alert({ meteo, forecast }) {
  console.log("forecast: ", forecast.weather);
  console.log("weather: ", meteo);
  return (
    <div>
      <div className="h-18 top-0 bg-custom-white fixed w-full shadow-md ">
        <Header />
      </div>
      <div className=" pt-[120px]"></div>

      <TT weather={meteo} forecast={forecast} />
      <div className="mb-20">
        <AlertConfiguration />
      </div>

      <Footer
        data={[
          {
            to: "/dashboard",
            icon: <MdDashboard className="text-2xl" />,
            nom: "Accueil",
          },
          {
            to: "/contenu",
            icon: <LuLibrary className="text-2xl" />,
            nom: "Contenu",
          },
          {
            to: "/localisation",
            icon: <GrMapLocation className="text-2xl" />,
            nom: "Map",
          },
          {
            to: "/alert",
            icon: <TbSpeakerphone className="text-2xl" />,
            nom: "Alert",
          },
          {
            to: "/parametre",
            icon: <FiSettings className="text-2xl" />,
            nom: "Parametre",
          },
        ]}
      />
    </div>
  );
}
