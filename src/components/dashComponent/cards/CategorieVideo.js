import React, { useContext } from "react";
import { BiCaretRight } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import DataMeteoContext from "../../../context/MeteoContext";
import BackNav from "../../../pages/famer/BackNav";
import UnSelectRecherche from "../UnSelectRecherche";
import Footer from "../footer/Footer";
import TopHeader from "../header/TopHeader";
import CardVideo from "./CardVideo";

export default function CategorieVideo() {
  const { formData } = useContext(DataMeteoContext);
  const isVideoPresent =
    formData.filter((el) => el.hasOwnProperty("video")) || [];
  console.log("isVideoPresent: ", isVideoPresent);

  return (
    <div>
      <div className="h-18 fixed top-0 bg-custom-white fixed w-full shadow-md ">
        <TopHeader />
        <BackNav linkTo="/contenu" title="Contenu Type video" />
      </div>
      {
        <div className="pt-28">
          <div
            className="flex h-36  w-full object-cover items-center text-deep-green  justify-center font-bold"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/niUkImZcSP8/300x300")',
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h2 className="text-3xl text-custom-white font-bold mx-2">
              Categorie Video
            </h2>
          </div>
          <div className="max-w-lg mx-auto p-4 pt-2 ">
            <div>
              <UnSelectRecherche recqui="none" />
            </div>
            <div className="flex items-center font-bold my-4">
              Tag: Fruit <BiCaretRight className="text-xl" /> Banane
            </div>

            <div className="grid grid-cols-2 gap-4 mb-20 ">
              {isVideoPresent.length > 0 ? (
                isVideoPresent?.map((item, index) => (
                  <React.Fragment key={index}>
                    <CardVideo
                      titre={item?.titre}
                      description={item?.descr}
                      videoFile={item?.video[0]}
                    />
                  </React.Fragment>
                ))
              ) : (
                <p>Aucun fichier video disponible.</p>
              )}
            </div>
          </div>
        </div>
      }

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
