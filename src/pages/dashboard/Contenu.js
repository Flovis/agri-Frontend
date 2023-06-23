import React, { useContext, useRef, useState } from "react";
import { BiPlusMedical, BiVideo } from "react-icons/bi";
import { FiSettings, FiVolume2 } from "react-icons/fi";
import { GrArticle, GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbPdf, TbSpeakerphone } from "react-icons/tb";
import { Link } from "react-router-dom";
import InputFile from "../../components/dashComponent/InputFile";
import UnSelect from "../../components/dashComponent/UnSelect";
import UnSelectBtn from "../../components/dashComponent/UnSelectBtn";
import UnSelectRecherche from "../../components/dashComponent/UnSelectRecherche";
import CardCategorie from "../../components/dashComponent/cards/CardCategorie";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import DataMeteoContext from "../../context/MeteoContext";
import cat from "../../data/Categorie";
import langage from "../../data/Langage";
import planProduction from "../../data/PlanProduction";
import frequence from "../../data/frequence";

export default function Contenu() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProductionPlan, setSelectedProductionPlan] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const formRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const { file } = useContext(DataMeteoContext);
  const [isopen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isopen);
  };

  const handleOneStep = () => {
    setStep(2);
  };
  const hadleGoHome = () => {
    setStep(1);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleAddTag = () => {
    // Implement the logic to add a tag to the tags state
  };

  const handleAddCategory = () => {
    // Implement the logic to add a category to the categories state
  };

  const handleAddFile = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleSave = () => {
    // Implement the logic to save the form data
  };
  const handleSelectProductionPlan = (e) => {
    setSelectedProductionPlan(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    console.log("formData: ", formData);
  };

  return (
    <div>
      <div className="h-18 fixed top-0 bg-custom-white fixed w-full shadow-md ">
        <Header />
      </div>

      <div className=" max-w-lg mx-auto p-4 pt-32">
        <form ref={formRef} onSubmit={submit}>
          {step === 2 && (
            <div className=" m-auto mb-14">
              <h2 className="text-mb font-bold mb-4">
                Étape 1: Titre et Description{" "}
              </h2>

              <div className="">
                <label
                  htmlFor="titre"
                  className="text-text-gray text-md mb-[150px]"
                >
                  titre du contenu
                </label>{" "}
                <span className="text-custom-red"> *</span>
                <input
                  type="text"
                  name="titre"
                  id="titre"
                  placeholder=" ajoute titre du contenu"
                  required
                  className={`border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="description"
                  className="block mb-2 mt-2 text-text-gray"
                >
                  Description du contenu
                  <span className="text-custom-red"> *</span>
                </label>

                <textarea
                  className="w-full p-2 border border-borde-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-borde-gray"
                  rows={3}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productionPlan"
                  className="block mb-2 text-text-gray"
                >
                  Sélectionnez le plan de production
                </label>

                <UnSelect option={planProduction} />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="frequency"
                  className="block mb-2 text-text-gray"
                >
                  Sélectionnez la fréquence
                </label>
                <UnSelect option={frequence} />
              </div>
              <div className="w-full mt-3 md:mb-5">
                <button
                  className="block mx-auto duration-200 shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                  onClick={handleNextStep}
                >
                  Suivant
                </button>
              </div>

              <div className="h-3"></div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-mb font-bold mb-4">
                {" "}
                Étape 2: Tags, Catégories et Langue{" "}
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="categories"
                  className="text-text-gray block mb-2"
                >
                  Sélectionnez les tags
                  <span className="text-custom-red"> *</span>
                </label>
                <UnSelectRecherche options={langage} />
              </div>
              <div className="mb-4">
                <label htmlFor="langues" className="text-text-gray block mb-2">
                  Sélectionnez les langues
                  <span className="text-custom-red"> *</span>
                </label>
                <UnSelectRecherche options={langage} />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="categories"
                  className="text-text-gray block mb-2"
                >
                  Sélectionnez les catégories
                  <span className="text-custom-red"> *</span>
                </label>
                <UnSelectBtn option={cat} />
              </div>

              <div className="w-full mt-3 md:mb-5">
                <button
                  className="block mx-auto duration-200 shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                  onClick={handleNextStep}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col">
              <h2 className="text-mb font-bold mb-4">
                Étape 3: Téléversement des fichiers{" "}
              </h2>
              <div className="mb-4">
                <label htmlFor="files" className="text-text-gray block mb-2">
                  Téléverser des fichiers
                </label>
                <InputFile />

                <div className="flex items-center gap-2 grid grid-cols-4 w-full h-32 bg-borde-gray cursor-pointer rounded-md mt-4">
                  {Array.isArray(file) &&
                    file.map((fileItem, index) => (
                      <React.Fragment key={index}>
                        {fileItem.type.includes("image") && (
                          <img
                            src={URL.createObjectURL(fileItem)}
                            alt="Selected File"
                            className="w-32 h-32 object-cover rounded-md"
                          />
                        )}
                        {fileItem.type.includes("pdf") && (
                          <embed
                            src={URL.createObjectURL(fileItem)}
                            type="application/pdf"
                            className="w-32 h-32 object-cover rounded-md overflow-hidden"
                          />
                        )}
                        {fileItem.type.includes("video") && (
                          <video
                            src={URL.createObjectURL(fileItem)}
                            controls
                            className="w-32 h-32 object-cover rounded-md"
                          />
                        )}
                      </React.Fragment>
                    ))}
                </div>
              </div>

              <div className="w-full mt-3 md:mb-5">
                <button
                  className="mx-auto duration-200 shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                  onClick={hadleGoHome}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex">
                  <div className="w-2 h-6 bg-deep-green "></div>
                  <h2 className="text-xl font-bold mx-2 ">
                    Base de connaissance{" "}
                  </h2>
                </div>
                <button
                  className="bg-deep-green duration-200 p-2 rounded-md flex items-center text-md text-custom-white"
                  onClick={handleOneStep}
                >
                  <BiPlusMedical className="text-xl " />
                  Ajouter
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-20">
                <Link to="/contenu/categorieaudio" className="duration-200">
                  <CardCategorie
                    image="https://source.unsplash.com/4fegNAjoAl4/300x300"
                    type={<FiVolume2 className="text-deep-green mr-2" />}
                    titre="Categorie Audio"
                    description="Découvrez des podcasts, des interviews et des reportages audio mettant en lumière les défis, les innovations et les réussites de l'agriculture."
                    onClick={handleIsOpen}
                  />
                </Link>
                <CardCategorie
                  image="https://source.unsplash.com/niUkImZcSP8/300x300"
                  type={<BiVideo className="text-deep-green mr-2" />}
                  titre="Categorie Video"
                  description="
                  Des vidéos inspirantes mettant en lumière le travail acharné des agriculteurs pour cultiver et récolter une variété de cultures. 
                  "
                />

                <CardCategorie
                  image="https://source.unsplash.com/pakTZIspHO0/300x300"
                  type={<TbPdf className="text-deep-green mr-2" />}
                  titre="Categorie pdf"
                  description="
                  Plongez dans le fascinant monde des agriculteurs à travers des contenus PDF . 
                  "
                />
                <CardCategorie
                  image="https://source.unsplash.com/HNL240HrK_M/300x300"
                  type={<GrArticle className="text-deep-green mr-2" />}
                  titre="Categorie Article"
                  description="Des systèmes alimentaires sains, durables et inclusifs sont essentiels à la réalisation des objectifs mondiaux de développement. Le développement de l’agriculture est l’un des leviers les plus puissants sur lequel agir pour mettre fin à l’extrême pauvreté, renforcer le partage de la prospérité et nourrir les 9,7 milliards … "
                />
              </div>
              {/* <div className="text-mb font-bold mb-4 flex justify-between items-center">
                <h2 className="">Contenu type audio</h2>
              </div> */}
            </div>
          )}
        </form>
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
