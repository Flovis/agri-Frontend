import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import Geoloc from "../../components/dashComponent/cards/Geoloc";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import SumilationCoords from "../../components/dashComponent/retouche/SumilationCoords";

export default function Localisation() {
  const [markers, setMarkers] = useState([]);
  const [polygon, setPolygon] = useState([]);

  const handleMapClick = (el) => {
    const { latitude, longitude } = el;
    const newMarker = { latitude, longitude };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const handlePolygonClick = () => {
    setPolygon(markers);
  };

  return (
    <div>
      <div className="h-18 bg-custom-white fixed w-full shadow-md">
        <Header />
      </div>
      <div className="pt-[120px]"></div>
      <div className="max-w-xl inset-x-auto border">
        <Geoloc />
        <SumilationCoords />
      </div>
      <div className="mb-20"></div>
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
