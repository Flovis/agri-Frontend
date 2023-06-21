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

export const communesHautKatanga = [
  { commune: "Lubumbashi", latitude: -11.6609, longitude: 27.4794 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Tanganyika", latitude: -8.7495, longitude: 28.6091 },
  { commune: "Kamina", latitude: -8.7389, longitude: 25.0033 },
  { commune: "Mokambo", latitude: -10.9587, longitude: 28.7369 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Pweto", latitude: -8.4554, longitude: 28.8995 },
  { commune: "Sakania", latitude: -11.8882, longitude: 27.6474 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Sandoa", latitude: -10.3016, longitude: 23.2274 },
  { commune: "Kalubwe", latitude: -11.3441, longitude: 27.8921 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Dikulushi", latitude: -10.7485, longitude: 27.7262 },
  { commune: "Lualaba", latitude: -7.9161, longitude: 25.8005 },
  { commune: "Mwadingusha", latitude: -11.7602, longitude: 27.3799 },
  { commune: "Kakanda", latitude: -11.2614, longitude: 27.1744 },
  { commune: "Lupoto", latitude: -10.4606, longitude: 27.5348 },
  { commune: "Kalima", latitude: -8.8134, longitude: 29.6946 },
  { commune: "Kakontwe", latitude: -8.4962, longitude: 29.2191 },
  { commune: "Mushonoi", latitude: -10.6585, longitude: 27.4918 },
  { commune: "Kyubo", latitude: -9.2745, longitude: 25.8152 },
  { commune: "Nyemba", latitude: -10.0736, longitude: 27.7323 },
  { commune: "Kalumba", latitude: -9.9257, longitude: 25.8555 },
  { commune: "Kisenda", latitude: -9.9639, longitude: 25.9931 },
  { commune: "Kalebuka", latitude: -11.7836, longitude: 27.2576 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Musumba", latitude: -9.2459, longitude: 25.6848 },
  { commune: "Kapemba", latitude: -8.5257, longitude: 27.4003 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kafubu", latitude: -11.6266, longitude: 27.3005 },
  { commune: "Mumbunda", latitude: -10.4379, longitude: 27.6079 },
  { commune: "Mutanda", latitude: -10.6964, longitude: 26.4838 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Kyekese", latitude: -10.2502, longitude: 27.4754 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Kama", latitude: -10.5276, longitude: 27.5693 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Samba", latitude: -7.045, longitude: 29.7865 },
  { commune: "Kapolowe", latitude: -9.2445, longitude: 25.7803 },
  { commune: "Lusinga", latitude: -8.3019, longitude: 25.9561 },
  { commune: "Kasenga", latitude: -10.1709, longitude: 28.738 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Manika", latitude: -10.73, longitude: 26.6172 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Mumbeji", latitude: -9.4452, longitude: 26.3965 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Kalunga", latitude: -9.2039, longitude: 25.6264 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Kabalo", latitude: -6.05, longitude: 26.9167 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Lubumbashi", latitude: -11.6609, longitude: 27.4794 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Tanganyika", latitude: -8.7495, longitude: 28.6091 },
  { commune: "Kamina", latitude: -8.7389, longitude: 25.0033 },
  { commune: "Mokambo", latitude: -10.9587, longitude: 28.7369 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Pweto", latitude: -8.4554, longitude: 28.8995 },
  { commune: "Sakania", latitude: -11.8882, longitude: 27.6474 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Sandoa", latitude: -10.3016, longitude: 23.2274 },
  { commune: "Kalubwe", latitude: -11.3441, longitude: 27.8921 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Dikulushi", latitude: -10.7485, longitude: 27.7262 },
  { commune: "Lualaba", latitude: -7.9161, longitude: 25.8005 },
  { commune: "Mwadingusha", latitude: -11.7602, longitude: 27.3799 },
  { commune: "Kakanda", latitude: -11.2614, longitude: 27.1744 },
  { commune: "Lupoto", latitude: -10.4606, longitude: 27.5348 },
  { commune: "Kalima", latitude: -8.8134, longitude: 29.6946 },
  { commune: "Kakontwe", latitude: -8.4962, longitude: 29.2191 },
  { commune: "Mushonoi", latitude: -10.6585, longitude: 27.4918 },
  { commune: "Kyubo", latitude: -9.2745, longitude: 25.8152 },
  { commune: "Nyemba", latitude: -10.0736, longitude: 27.7323 },
  { commune: "Kalumba", latitude: -9.9257, longitude: 25.8555 },
  { commune: "Kisenda", latitude: -9.9639, longitude: 25.9931 },
  { commune: "Kalebuka", latitude: -11.7836, longitude: 27.2576 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Musumba", latitude: -9.2459, longitude: 25.6848 },
  { commune: "Kapemba", latitude: -8.5257, longitude: 27.4003 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kafubu", latitude: -11.6266, longitude: 27.3005 },
  { commune: "Mumbunda", latitude: -10.4379, longitude: 27.6079 },
  { commune: "Mutanda", latitude: -10.6964, longitude: 26.4838 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Kyekese", latitude: -10.2502, longitude: 27.4754 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Kama", latitude: -10.5276, longitude: 27.5693 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Samba", latitude: -7.045, longitude: 29.7865 },
  { commune: "Kapolowe", latitude: -9.2445, longitude: 25.7803 },
  { commune: "Lusinga", latitude: -8.3019, longitude: 25.9561 },
  { commune: "Kasenga", latitude: -10.1709, longitude: 28.738 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Manika", latitude: -10.73, longitude: 26.6172 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Mumbeji", latitude: -9.4452, longitude: 26.3965 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Kalunga", latitude: -9.2039, longitude: 25.6264 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Kabalo", latitude: -6.05, longitude: 26.9167 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Lubumbashi", latitude: -11.6609, longitude: 27.4794 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Tanganyika", latitude: -8.7495, longitude: 28.6091 },
  { commune: "Kamina", latitude: -8.7389, longitude: 25.0033 },
  { commune: "Mokambo", latitude: -10.9587, longitude: 28.7369 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Pweto", latitude: -8.4554, longitude: 28.8995 },
  { commune: "Sakania", latitude: -11.8882, longitude: 27.6474 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Sandoa", latitude: -10.3016, longitude: 23.2274 },
  { commune: "Kalubwe", latitude: -11.3441, longitude: 27.8921 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Dikulushi", latitude: -10.7485, longitude: 27.7262 },
  { commune: "Lualaba", latitude: -7.9161, longitude: 25.8005 },
  { commune: "Mwadingusha", latitude: -11.7602, longitude: 27.3799 },
  { commune: "Kakanda", latitude: -11.2614, longitude: 27.1744 },
  { commune: "Lupoto", latitude: -10.4606, longitude: 27.5348 },
  { commune: "Kalima", latitude: -8.8134, longitude: 29.6946 },
  { commune: "Kakontwe", latitude: -8.4962, longitude: 29.2191 },
  { commune: "Mushonoi", latitude: -10.6585, longitude: 27.4918 },
  { commune: "Kyubo", latitude: -9.2745, longitude: 25.8152 },
  { commune: "Nyemba", latitude: -10.0736, longitude: 27.7323 },
  { commune: "Kalumba", latitude: -9.9257, longitude: 25.8555 },
  { commune: "Kisenda", latitude: -9.9639, longitude: 25.9931 },
  { commune: "Kalebuka", latitude: -11.7836, longitude: 27.2576 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Musumba", latitude: -9.2459, longitude: 25.6848 },
  { commune: "Kapemba", latitude: -8.5257, longitude: 27.4003 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kafubu", latitude: -11.6266, longitude: 27.3005 },
  { commune: "Mumbunda", latitude: -10.4379, longitude: 27.6079 },
  { commune: "Mutanda", latitude: -10.6964, longitude: 26.4838 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Kyekese", latitude: -10.2502, longitude: 27.4754 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Kama", latitude: -10.5276, longitude: 27.5693 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Samba", latitude: -7.045, longitude: 29.7865 },
  { commune: "Kapolowe", latitude: -9.2445, longitude: 25.7803 },
  { commune: "Lusinga", latitude: -8.3019, longitude: 25.9561 },
  { commune: "Kasenga", latitude: -10.1709, longitude: 28.738 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Manika", latitude: -10.73, longitude: 26.6172 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Mumbeji", latitude: -9.4452, longitude: 26.3965 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Kalunga", latitude: -9.2039, longitude: 25.6264 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Kabalo", latitude: -6.05, longitude: 26.9167 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
];

export default function Localisation({ communesHautKatanga }) {
  const [markers, setMarkers] = useState([]);
  const [polygon, setPolygon] = useState([]);

  const handleMapClick = (el) => {
    const { latitude, longitude } = el;
    const newMarker = { latitude, longitude };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  if (communesHautKatanga) {
    communesHautKatanga.forEach((el) => {
      handleMapClick(el);
    });
  }

  const handlePolygonClick = () => {
    setPolygon(markers);
  };

  return (
    <div>
      <div className="h-18 bg-custom-white fixed w-full shadow-md">
        <Header />
      </div>
      <div className="pt-[120px]"></div>

      <Geoloc />
      <Footer
        data={[
          {
            to: "/dashboard",
            icon: <MdDashboard className="text-2xl" />,
            nom: "Accueil",
          },
          {
            to: "/dashboard/contenu",
            icon: <LuLibrary className="text-2xl" />,
            nom: "Contenu",
          },
          {
            to: "/dashboard/localisation",
            icon: <GrMapLocation className="text-2xl" />,
            nom: "Map",
          },
          {
            to: "/dashboard/alert",
            icon: <TbSpeakerphone className="text-2xl" />,
            nom: "Alert",
          },
          {
            to: "/dashboard/parametre",
            icon: <FiSettings className="text-2xl" />,
            nom: "Parametre",
          },
        ]}
      />
    </div>
  );
}
