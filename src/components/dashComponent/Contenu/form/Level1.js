import React from "react";
import DynamicInput from "../../PublicComponent/DynamicInput";
import DynamicSelect from "../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../PublicComponent/DynamicTitle";
import TopHeader from "../../header/TopHeader";
import BackNavStep from "../../header/BackNav";
import DynamicTextarea from "../../PublicComponent/DynamicTextarea ";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useLocation, useNavigate } from "react-router-dom";

const Level1 = ({ onNext, onPrevious }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultType = searchParams.get("type");
  const navigate = new useNavigate();
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const handleNext = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("category", defaultType);
    const data = Object.fromEntries(formdata);
    onNext(data);
  };

  return (
    <>
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title={defaultType}
          type={defaultType}
          linkTo={`/contenu/${defaultType}`}
        />
      </div>
      <form
        onSubmit={handleNext}
        className="flex flex-col justify-center items-center gap-4 mt-32"
      >
        <div className="w-[90%] flex flex-col gap-px">
          <div className="w-[90%]">
            <DynamicTitle text="Informations de base" size="xl" />
          </div>
          <div className="mt-2">
            <DynamicSelect
              label="Sélectionner le cycle de production"
              options={["semence", "croissance", "recolte", "conditionnement"]}
              nameData="cycle"
            />
          </div>
          <div>
            <DynamicInput label="Titre du contenu" name="title" />
          </div>
          <div>
            <DynamicTextarea
              label="Description du contenu"
              rows={3}
              name="description"
            />
          </div>
          <div className="-mt-2">
            <DynamicSelect
              label="Langue du contenu"
              options={["Français", "Kikongo", "Swahili"]}
              name="language"
              nameData="language"
            />
          </div>
          <div className="mt-4">
            <DynamicButton
              label="Suivant"
              getsizeClasses="w-full mb-10"
              type="submit"
              // onClick={}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Level1;
