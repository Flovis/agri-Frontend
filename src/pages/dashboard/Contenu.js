import React, { useRef, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import UnSelect from "../../components/dashComponent/UnSelect";
import UnSelectBtn from "../../components/dashComponent/UnSelectBtn";
import UnSelectRecherche from "../../components/dashComponent/UnSelectRecherche";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
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
          {step === 1 && (
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
                  className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                  onClick={handleNextStep}
                >
                  Suivant
                </button>
              </div>

              <div className="h-3"></div>
            </div>
          )}
          {step === 2 && (
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
                <label
                  htmlFor="categories"
                  className="text-text-gray block mb-2"
                >
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
                  className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                  onClick={handleNextStep}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-mb font-bold mb-4">
                Étape 3: Téléversement des fichiers{" "}
              </h2>
              <div className="mb-4">
                <label htmlFor="files" className="text-text-gray block mb-2">
                  Téléverser des fichiers
                </label>
                <input
                  type="file"
                  id="files"
                  multiple
                  className="mb-2"
                  onChange={handleAddFile}
                />
              </div>

              <div className="w-full mt-3 md:mb-5">
                <button
                  className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                  onClick={handleNextStep}
                >
                  Enregistrer
                </button>
              </div>
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
