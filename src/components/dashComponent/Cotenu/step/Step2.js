import React from "react";
import TopHeader from "../../header/TopHeader";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import Footer from "../../footer/Footer";
import BackNavStep from "../../header/BackNav";

export default function Step2() {
  return (
    <>
      {/* <div>
        <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
          <TopHeader />
          <BackNavStep linkTo="/contenu" title=" Audio " type="audio" />
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
              Categorie Audio
            </h2>
          </div>
        </div>
      </div> */}

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
        ]}
      />
    </>
  );
}
