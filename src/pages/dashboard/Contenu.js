import React, { useRef, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuLibrary } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import langage from "../../data/Langage";
import planProduction from "../../data/PlanProduction";

export default function Contenu() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProductionPlan, setSelectedProductionPlan] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const formRef = useRef();

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleAddFile = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleSave = () => {};
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
      <div className="max-w-lg mx-auto p-4 pt-32">
        <form ref={formRef} onSubmit={() => submit} action="">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Étape 1: Titre et Description
              </h2>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2">
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full border border-borde-gray rounded p-2"
                  value={title}
                  // onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full border border-borde-gray rounded p-2"
                  value={description}
                  // onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="productionPlan" className="block mb-2">
                  Sélectionnez le plan de production
                </label>
                <CreatableSelect
                  isClearable
                  options={planProduction}
                  value={selectedProductionPlan}
                  onChange={(event) =>
                    setSelectedProductionPlan(event.target.value)
                  }
                  // className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="frequency" className="block mb-2">
                  Sélectionnez la fréquence
                </label>
                <CreatableSelect
                  isClearable
                  options
                  value={selectedProductionPlan}
                  onChange={(event) =>
                    setSelectedProductionPlan(event.target.value)
                  }
                  // className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <button
                className="bg-deep-green text-custom-white px-4 py-2 rounded"
                onClick={handleNextStep}
              >
                Suivant
              </button>
              <div className="h-3"></div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Étape 2: Tags, Catégories et Langue
              </h2>
              <div className="mb-4">
                <label htmlFor="tags" className="block mb-2">
                  Sélectionnez les tags
                </label>
                <div className="flex items-center justify-center">
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="language"
                    options
                    className="basic-multi-select flex-1"
                    classNamePrefix="select"
                    placeholder="Rechercher..."
                  />
                  <button
                    className="bg-deep-green text-custom-white px-4 py-2 mt-2 rounded"
                    onClick
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="categories" className="block mb-2">
                  Sélectionnez les catégories
                </label>
                <div className="flex items-center justify-center">
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="language"
                    options={langage}
                    className="basic-multi-select flex-1"
                    classNamePrefix="select"
                    placeholder="Rechercher..."
                  />
                  <button
                    className="bg-deep-green text-custom-white px-4 py-2 mt-2 rounded"
                    onClick
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="language" className="block mb-2">
                  Sélectionnez la langue
                </label>
                <div className="flex items-center justify-center">
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="language"
                    options
                    className="basic-multi-select flex-1"
                    classNamePrefix="select"
                    placeholder="Rechercher..."
                  />
                  {/* <div className="flex justify-between mb-4"> */}
                  <button
                    className="bg-deep-green text-custom-white px-4 py-2 mt-2 rounded"
                    onClick
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-deep-green mt-2 text-custom-white px-4 py-2 rounded"
                  onClick={handleNextStep}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Étape 3: Téléversement des fichiers
              </h2>
              <div className="mb-4">
                <label htmlFor="files" className="block mb-2">
                  Téléverser des fichiers
                </label>
                <input
                  type="file"
                  id="files"
                  multiple
                  className="mb-2"
                  onChange
                />
              </div>
              <button
                type="submit"
                className="bg-deep-green mt-2 text-custom-white px-4 py-2 rounded"
              >
                Enregistrer
              </button>
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
