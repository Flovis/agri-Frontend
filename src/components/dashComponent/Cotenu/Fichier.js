import { useCallback, useContext, useEffect, useState } from "react";
import { Notyf } from "notyf";
import { useLocation } from "react-router-dom";
import TopHeader from "../header/TopHeader";
import BackNavStep from "../header/BackNav";
import { backendAxios } from "../../../api/axios";
import Text from "./cards/text/Text";
import CardMusic from "./cards/audio/CardMusic";
import InputSearch from "../PublicComponent/InputSearch";
import DynamicSelect from "../PublicComponent/DynamicSelect ";
import CardVideo from "./cards/vdeo/CardVideo";
import { OurContext } from "../../../context/SelectContext";
// import { useCart } from "react-use-cart";
// import DynamicDataSet from "../PublicComponent/DynamicDataSet";

const Fichier = ({ open, Type, onPrevious }) => {
  const location = useLocation();

  let type = ""; // Donnez une valeur par défaut à "type"

  if (open !== 2) {
    type = new URLSearchParams(location.search).get("type");
  } else if (open === 2) {
    type = Type;
  }

  const URL = `/getContents/${type}`;
  const [search, setSearch] = useState([]);
  const [selectedCycle, setSelectedCycle] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { datas, setDatas } = useContext(OurContext);
  const [isSelectionMode, setIsSelectionMode] = useState(true);

  // console.log("addItem: ", addItem);

  // const toggleSelectionMode = () => {
  //   setIsSelectionMode((prevIsSelectionMode) => !prevIsSelectionMode);
  // };

  const filterData = useCallback(() => {
    let filteredData = datas;

    if (selectedCycle !== "Tout les cycles" && selectedCycle !== "") {
      filteredData = filteredData.filter(
        (item) => item.Cycle.name === selectedCycle
      );
    }

    if (selectedLanguage !== "Toutes les langues" && selectedLanguage !== "") {
      filteredData = filteredData.filter(
        (item) => item.Language.name === selectedLanguage
      );
    }

    setSearch(filteredData);
  }, [selectedCycle, selectedLanguage, datas]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendAxios.get(URL, {
          headers: { "Content-Type": "application/json" },
        });
        setDatas(response.data.allContent);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <>
      <div className="fixed w-screen z-50 ">
        <TopHeader />
        <BackNavStep classes="hidden" linkTo="/contenu" title={type} />
      </div>
      <div className="py-2 pt-32">
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 md:mt-14 md:px-8 lg:flex-nowrap">
          <div className="flex-none mt-6 lg:mt-0">
            <InputSearch placeholder="recherche par titre..." />
            <form className="flex -mb-8 flex-col items-center justify-center md:flex-row md:gap-2 w-full ">
              <div className=" flex w-full md:gap-2  ">
                <DynamicSelect
                  options={[
                    "Tout les cycles",
                    "semence",
                    "croissance",
                    "recolte",
                    "conditionnement",
                  ]}
                  name="cycle"
                  onChange={(value) => setSelectedCycle(value.target.value)}
                />
                <DynamicSelect
                  options={[
                    "Toutes les langues",
                    "Français",
                    "Anglais",
                    "Lingala",
                    "Swahhili",
                  ]}
                  name="langue"
                  onChange={(value) => setSelectedLanguage(value.target.value)}
                />
              </div>
            </form>
            <ul
              className={`grid ${
                type === "audio"
                  ? "grid-cols-1 md:grid-cols-3 mt-16"
                  : type === "video"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20"
                  : "grid-cols-3 mt-20"
              } gap-3`}
            >
              {search?.map((item, index) =>
                type === "audio" ? (
                  <CardMusic key={index} file={item} />
                ) : type === "video" ? (
                  <CardVideo
                    key={index}
                    onPrevious={onPrevious}
                    file={item}
                    isSelectionMode={isSelectionMode}
                    // toggleSelectionMode={toggleSelectionMode} // Passer la fonction ici

                    open={open}
                  />
                ) : (
                  <Text key={index} file={item} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fichier;
