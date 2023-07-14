import { useCallback, useEffect, useRef, useState } from "react";
import AddCatModal from "./modal/AddCatModal";
import { Notyf } from "notyf";
import { useLocation } from "react-router-dom";
import TopHeader from "../header/TopHeader";
import BackNavStep from "../header/BackNav";
import { backendAxios } from "../../../api/axios";
import SongCard from "./cards/audio/SongCard";
import CardVideo from "./cards/vdeo/CardVideo";
import Text from "./cards/text/Text";
import CardMusic from "./cards/audio/CardMusic";
import InputSearch from "../PublicComponent/InputSearch";

const Fichier = () => {
  const [listItems, setListItems] = useState([1, 2, 3]);
  const location = new useLocation();
  const type = new URLSearchParams(location.search).get("type");

  const URL = `/getContents/${type}`;
  const [datas, setDatas] = useState([]);

  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const toggle = useCallback((show, setshow) => {
    setshow(!show);
  }, []);

  useEffect(() => {
    const fectData = async () => {
      try {
        const response = await backendAxios.get(URL, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.data);
        setDatas(response.data.allContent);
      } catch (error) {
        console.log(error);
      }
    };
    fectData();
  }, []);

  console.log("Datas", datas);

  return (
    <>
      <div>
        <TopHeader />
        <BackNavStep classes="hidden" linkTo="/contenu" title={type} />
      </div>
      <div className="py-2">
        <div className="max-w-screen-xl    mx-auto px-4 flex-wrap gap-x-12 md:mt-14 md:px-8 lg:flex-nowrap">
          <div className="flex-none mt-6   lg:mt-0">
            <InputSearch />
            <ul
              className={`grid ${
                type === "audio"
                  ? "grid-cols-1 md:grid-cols-3 mt-16"
                  : type === "video"
                  ? "grid-cols-2  md:grid-cols-3 mt-20"
                  : "grid-cols-3 mt-20"
              } gap-3`}
            >
              {listItems.map((item, index) =>
                type === "audio" ? (
                  // <SongCard index={index} />
                  <CardMusic key={index} />
                ) : type === "video" ? (
                  <CardVideo key={index} />
                ) : (
                  <Text key={index} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Fichier;
