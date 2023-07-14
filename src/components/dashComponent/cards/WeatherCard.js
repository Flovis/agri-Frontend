import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import DashReview from "../retouche/DashReview";

export default function WeatherCard() {
  return (
    <div className="">
      <div className="h-18 bg-custom-white fixed w-full shadow-md">
        <Header />
      </div>

      <div className="overflow-y-scroll h-[calc(100vh-72px)] pt-8 max-w-screen-xl mx-auto">
        <div className="h-48 pt-24 px-4">
          <h1 className="mb-4 text-xl font-bold text-[#043d1d] dark:text-white"></h1>

          <DashReview />
          <h1 className="mb-4 text-xl font-bold text-[#043d1d] dark:text-white"></h1>
        </div>
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
          // {
          //   to: "/parametre",
          //   icon: <FiSettings className="text-2xl" />,
          //   nom: "Paramètre",
          // },
        ]}
      />
    </div>
  );
}
