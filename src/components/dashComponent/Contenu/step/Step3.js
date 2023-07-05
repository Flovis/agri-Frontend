import React, { useContext } from "react";
import TopHeader from "../../../dashComponent/header/TopHeader";
import BackNav from "../../header/BackNav";
import { FiSettings } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import Footer from "../../footer/Footer";
import CardVideo from "../cards/vdeo/CardVideo";
import Traitement from "../../algo/Traitement";
import { ContentForm } from "../../../../hooks/useDataForm";

export default function Step3() {
  const { contenu } = useContext(ContentForm);
  console.log("contenupage video: ", contenu);
  return (
    <div>
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNav linkTo="/contenu" type="video" title="Video" />
      </div>
      <div className="pt-28">
        <div
          className="flex h-36 w-full object-cover items-center text-deep-green justify-center font-bold"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/Z0rh7_Xumco/300x300")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-3xl text-custom-white font-bold mx-2">
            Categorie Video
          </h2>
        </div>
        <ul>
          ggggggggggggggg
          {Array.isArray(contenu) &&
            contenu?.map((video) => (
              <React.Fragment key={video.id}>
                <CardVideo />
                <p>{JSON.stringify(contenu)}</p>
              </React.Fragment>
            ))}
        </ul>
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
