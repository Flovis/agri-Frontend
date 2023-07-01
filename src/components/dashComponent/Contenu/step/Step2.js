import React, { useRef, useState } from "react";
import TopHeader from "../../header/TopHeader";
import BackNav from "../../../../pages/famer/BackNav";
import { FiSettings, FiVolume2 } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbPdf, TbSpeakerphone } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import Footer from "../../footer/Footer";
import { ImMusic } from "react-icons/im";
import SongCard from "../cards/SongCard";
import LecteurAudio from "../cards/LecteurAudio";

export default function Step2() {
  const songs = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      <div>
        <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
          <TopHeader />
          <BackNav linkTo="/contenu" title=" Audio " />
        </div>
        <div className="pt-28">
          <div
            className="flex h-40 w-full object-cover items-center text-deep-green justify-center font-bold"
            style={{
              backgroundImage: 'url("https://source.unsplash.com/BN6iQEVN0ZQ")',
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h2 className="text-3xl text-custom-white font-bold mx-2">
              Categorie PDF
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 my-4   mx-4">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      <LecteurAudio />

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
    </>
  );
}

{
  /* <button className="bg-deep-green duration-200 p-2 rounded-md flex items-center text-md text-custom-white">
       <BiPlusMedical className="text-xl" />
       Ajouter
     </button> */
}
