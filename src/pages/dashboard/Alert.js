import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import TodayMeteo from "../../components/dashComponent/forcast/cards/TodayMeteo";

export default function Alert({ meteo, forecast }) {
  return (
    <div>
      <div className="h-18 top-0 bg-custom-white fixed w-full shadow-md ">
        <Header />
      </div>
      <div className=" pt-[120px]"></div>

      <TodayMeteo />
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
          // {
          //   to: "/parametre",
          //   icon: <FiSettings className="text-2xl" />,
          //   nom: "Parametre",
          // },
        ]}
      />
    </div>
  );
}
