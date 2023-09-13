import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";

const data = [
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
];

export default data;
