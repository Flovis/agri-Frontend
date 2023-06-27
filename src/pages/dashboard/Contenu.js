import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import React, { useContext, useState } from "react";
import { BiPlusMedical, BiVideo } from "react-icons/bi";
import { BsImages, BsTextLeft } from "react-icons/bs";
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
import UnSelectRecherchecopy from "../../components/dashComponent/UnSelectRecherchecopy";
import UnSelectcopy from "../../components/dashComponent/UnSelectcopy";
import CardCategorie from "../../components/dashComponent/cards/CardCategorie";
import Footer from "../../components/dashComponent/footer/Footer";
import BackNavStep from "../../components/dashComponent/header/BackNav";
import Header from "../../components/dashComponent/header/Header";
import TopHeader from "../../components/dashComponent/header/TopHeader";
import DataMeteoContext from "../../context/MeteoContext";
import { SelectContext, selectContext } from "../../context/SelectContext";
import cat from "../../data/Categorie";
import langage from "../../data/Langage";
import planProduction from "../../data/PlanProduction";
import Tags from "../../data/Tag";
import frequence from "../../data/frequence";

export default function Contenu() {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectWithBtn, setselectWithBtn] = useState({});
  const [catego, setcat] = useState("");
  const [lang, setlang] = useState([]);
  const [tag, settag] = useState([]);
  const [isopen, setIsOpen] = useState(false);
  const { file, setFormData, formData } = useContext(DataMeteoContext);

  const handleIsOpen = () => {
    setIsOpen(!isopen);
  };

  const handleOneStep = () => {
    setStep(2);
  };
  const hadleGoHome = () => {
    setStep(1);
  };
  var notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const verifystep3 = (e) => {
    e.preventDefault();
    if (!tag || !catego) {
      return notyf.error("Il est obliqatoire de remplire tout les champs");
    } else {
      handleNextStep(e);
    }
  };
  const handleNextStep = (e) => {
    e.preventDefault();

    if (!step1Data || !selectedOption || !selectedOption2) {
      setStep((prevStep) => prevStep);
      return notyf.error("Il est obliqatoire de remplire tout les champs");
    }

    const formDataObject = {
      titre: step1Data.titre,
      descr: step1Data.description,
      planDeProduction: selectedOption,
      frequence: selectedOption2,
      categorie: catego,
      tags: tag,
      langue: lang,
    };
    formDataObject[formDataObject.categorie] =
      formDataObject.categorie === "audio"
        ? file
        : formDataObject.categorie === "image"
        ? file
        : formDataObject.categorie === "video"
        ? file
        : formDataObject.categorie === "pdf"
        ? file
        : formDataObject.categorie === "text"
        ? file
        : null;

    if (step === 4) {
      setFormData([...formData, formDataObject]);
      hadleGoHome();

      return notyf.success("Enregistrer avec succes ");
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleStep1 = (e) => {
    setStep1Data({
      ...step1Data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <SelectContext.Provider
        value={{
          selectedOption,
          setSelectedOption,
          setselectWithBtn,
          selectWithBtn,
          setcat,
          catego,
        }}
      >
        <selectContext.Provider
          value={{
            selectedOption2,
            setSelectedOption2,
            lang,
            setlang,
            tag,
            settag,
          }}
        >
          <div className=" max-w-lg mx-auto p-4 pt-32">
            <form>
              {/*----------- step deux here--------------------------- */}
              {step === 2 && (
                <>
                  <div className="h-18 fixed top-0 bg-custom-white fixed w-full left-0 shadow-md ">
                    <TopHeader />
                    <BackNavStep
                      title="Étape 1: Titre et Description"
                      set={handlePrevStep}
                    />
                  </div>
                  <div className=" m-auto mb-44">
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
                        onChange={handleStep1}
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
                        name="description"
                        onChange={handleStep1}
                        required
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

                      <UnSelectcopy option={frequence} />
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
                </>
              )}

              {step === 3 && (
                <div className="mb-48">
                  <div className="h-18 fixed top-0 bg-custom-white fixed w-full left-0 shadow-md ">
                    <TopHeader />
                    <BackNavStep
                      title="Étape 2: Tags, Catégories et Langue"
                      set={handlePrevStep}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="categories"
                      className="text-text-gray block mb-2"
                    >
                      Sélectionnez les tags
                      <span className="text-custom-red"> *</span>
                    </label>
                    <UnSelectRecherchecopy options={Tags} recqui={tag} />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="langues"
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
                      className="block mx-auto duration-200 shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                      onClick={verifystep3}
                    >
                      Suivant
                    </button>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="flex flex-col">
                  <div className="h-18 fixed top-0 bg-custom-white fixed w-full left-0 shadow-md ">
                    <TopHeader />
                    <BackNavStep
                      title="Étape 3: Téléversement des fichiers"
                      set={handlePrevStep}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="files"
                      className="text-text-gray block mb-2"
                    >
                      Téléverser des fichiers
                    </label>
                    <InputFile accepte={catego} />

                    <div className="flex items-center gap-2 grid grid-cols-4 w-full h-32 bg-borde-gray cursor-pointer rounded-md mt-4">
                      {Array.isArray(file) &&
                        file.map((fileItem, index) => (
                          <React.Fragment key={index}>
                            {fileItem.type.includes("image") && (
                              <img
                                src={URL.createObjectURL(fileItem)}
                                alt="Selected File"
                                className="w-32 h-32 object-cover rounded-md "
                              />
                            )}

                            {fileItem?.type.includes("pdf") && (
                              <>
                                {console.log(fileItem)}
                                <embed
                                  src={URL.createObjectURL(fileItem)}
                                  type="application/pdf"
                                  className="w-32 h-32 object-cover rounded-md overflow-hidden"
                                />
                                {/* <PDFViewer pdfUrl={fileItem} /> */}
                                {/* <iframe
                                  src={URL.createObjectURL(fileItem)}
                                  title="PDF Viewer"
                                  className="w-100 h-100"
                                /> */}
                                {/* <iframe
                                  src={URL.createObjectURL(fileItem)}
                                  title="PDF Viewer"
                                  className="w-100 h-100"
                                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                /> */}
                              </>
                            )}
                            {fileItem.type.includes("audio") && (
                              <audio controls>
                                <source
                                  src={URL.createObjectURL(fileItem)}
                                  type={fileItem.type}
                                />
                              </audio>
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
                      onClick={handleNextStep}
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <div className="h-18 left-0 top-0 bg-custom-white fixed w-full shadow-md ">
                    <Header />
                  </div>

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
                    <Link to="/contenu/categorieimage" className="duration-200">
                      <CardCategorie
                        image="https://source.unsplash.com/jin4W1HqgL4/300x300"
                        type={<BsImages className="text-deep-green mr-2" />}
                        titre="Categorie Image"
                        description="Des systèmes alimentaires sains, durables et inclusifs sont essentiels à la réalisation des objectifs mondiaux de développement. Le développement de l’agriculture est l’un des leviers les plus puissants sur lequel agir pour mettre fin à l’extrême pauvreté, renforcer le partage de la prospérité et nourrir les 9,7 milliards … "
                        onClick={handleIsOpen}
                      />
                    </Link>
                    <Link to="/contenu/categorieaudio" className="duration-200">
                      <CardCategorie
                        image="https://source.unsplash.com/4fegNAjoAl4/300x300"
                        type={<FiVolume2 className="text-deep-green mr-2" />}
                        titre="Categorie Audio"
                        description="Découvrez des podcasts, des interviews et des reportages audio mettant en lumière les défis, les innovations et les réussites de l'agriculture."
                        onClick={handleIsOpen}
                      />
                    </Link>
                    <Link to="/contenu/categorievideo" className="duration-200">
                      <CardCategorie
                        image="https://source.unsplash.com/niUkImZcSP8/300x300"
                        type={<BiVideo className="text-deep-green mr-2" />}
                        titre="Categorie Video"
                        description="
                  Des vidéos inspirantes mettant en lumière le travail acharné des agriculteurs pour cultiver et récolter une variété de cultures. 
                  "
                        onClick={handleIsOpen}
                      />
                    </Link>
                    <Link to="/contenu/categoriepdf" className="duration-200">
                      <CardCategorie
                        image="https://source.unsplash.com/pakTZIspHO0/300x300"
                        type={<TbPdf className="text-deep-green mr-2" />}
                        titre="Categorie pdf"
                        description="
                    Plongez dans le fascinant monde des agriculteurs à travers des contenus PDF . 
                    "
                        onClick={handleIsOpen}
                      />
                    </Link>
                    <Link
                      to="/contenu/categoriearticle"
                      className="duration-200"
                    >
                      <CardCategorie
                        image="https://source.unsplash.com/HNL240HrK_M/300x300"
                        type={<GrArticle className="text-deep-green mr-2" />}
                        titre="Categorie Article"
                        description="Des systèmes alimentaires sains, durables et inclusifs sont essentiels à la réalisation des objectifs mondiaux de développement. Le développement de l’agriculture est l’un des leviers les plus puissants sur lequel agir pour mettre fin à l’extrême pauvreté, renforcer le partage de la prospérité et nourrir les 9,7 milliards … "
                        onClick={handleIsOpen}
                      />
                    </Link>
                    <Link to="/contenu/categorietexte" className="duration-200">
                      <CardCategorie
                        image="https://source.unsplash.com/2zDw14yCYqk/300x300"
                        type={<BsTextLeft className="text-deep-green mr-2" />}
                        titre="Categorie Texte"
                        description="Des systèmes alimentaires sains, durables et inclusifs sont essentiels à la réalisation des objectifs mondiaux de développement. Le développement de l’agriculture est l’un des leviers les plus puissants sur lequel agir pour mettre fin à l’extrême pauvreté, renforcer le partage de la prospérité et nourrir les 9,7 milliards … "
                        onClick={handleIsOpen}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </form>
          </div>{" "}
        </selectContext.Provider>
      </SelectContext.Provider>
      {/* </selectWithBouton> */}

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
