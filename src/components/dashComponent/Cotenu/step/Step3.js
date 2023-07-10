import React, { useContext, useEffect, useState } from "react";
import TopHeader from "../../../dashComponent/header/TopHeader";
import BackNav from "../../header/BackNav";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import Footer from "../../footer/Footer";
import CardVideo from "../cards/vdeo/CardVideo";
import DataMeteoContext from "../../../../context/MeteoContext";

export default function Step3() {
  const [videos, setVideos] = useState([
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    // "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
  ]);
  console.log("videos: ", videos);
  const {
    dataMeteoContextValue: { contenu },
  } = useContext(DataMeteoContext);

  useEffect(() => {
    if (contenu && Array.isArray(contenu)) {
      const videoUrls = contenu?.map((video) =>
        URL.createObjectURL(video.file)
      );
      setVideos([...videos, videoUrls]);
    }
  }, []);

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
          <CardVideo videos={videos} />
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
