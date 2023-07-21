import React from "react";
import { useLocation } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import DynamicSelect from "../../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import DynamicDataSet from "../../../PublicComponent/DynamicDataSet";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import ModalContenu from "../../../Modal/ModalContenu";
// import Fichier from "../../Fichier";
// import { useCart } from "react-use-cart";
// import { OurContext } from "../../../../../context/SelectContext";
// import { TbRuler } from "react-icons/tb";

const ContenuSelect = ({ onNext, SelectRef, handleSelectChange }) => {
  // const { myItem } = useContext(OurContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultType = searchParams.get("type");
  // const navigate = useNavigate();

  // console.log("items: ", myItem);

  const handleNext = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("typeAlert", "plan de producton");

    const notyf = new Notyf({
      duration: 1000,
      position: {
        x: "right",
        y: "top",
      },
    });

    const cycle = formdata.get("cycle");
    const productName = formdata.get("productName");

    if (
      cycle !== "selectionne le cycle" &&
      cycle !== "" &&
      productName !== ""
    ) {
      notyf.success("Configuration sauvegardée avec succès");
      const data = Object.fromEntries(formdata);
      onNext(data);
    } else {
      notyf.error("Veuillez remplir le formulaire");
    }
  };

  return (
    <>
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title="configuration"
          type={defaultType}
          linkTo={`/alert`}
        />
      </div>
      <form
        onSubmit={handleNext}
        className=" max-w-screen-xl flex justify-center   mt-32 mx-auto"
      >
        <div className="w-full px-4 md:px-56 flex flex-col gap-px mt-4">
          <div className="w-[90%] mb-4">
            <DynamicTitle text="Configuration" size="xl" />
          </div>

          <div className="flex gap-2 mb-2">
            <DynamicSelect
              label="Cycle"
              options={[
                "selectionne le cycle",
                "semence",
                "croissance",
                "recolte",
                "conditionnement",
              ]}
              nameData="cycle"
            />
          </div>
          <div className="-mt-2"></div>
          <div>
            <DynamicDataSet label="Sélectionner le produit" />
          </div>
          <div>
            <DynamicSelect
              label="Quelle est la catégorie préférée"
              onChange={handleSelectChange}
              options={["choisi la preference", "audio", "video", "texte"]}
              ref={SelectRef}
            />
          </div>
          <div>
            <DynamicSelect
              label="Canal"
              options={[
                "selectionne le canal d'envoi",
                "whatsapp",
                "sms",
                "notification",
              ]}
              nameData="canal"
            />
          </div>
          <div className="mt-4">
            <DynamicButton
              label={<MdOutlineProductionQuantityLimits />}
              type="submit"
            />
          </div>
          <div className="mt-4">
            {/* <DynamicButton
              label="Suivant"
              getsizeClasses="w-full mb-10"
              type="submit"
             
            /> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContenuSelect;
