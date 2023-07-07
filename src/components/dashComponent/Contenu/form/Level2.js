import React, { useState } from "react";
import DynamicInput from "../../PublicComponent/DynamicInput";
import DynamicSelect from "../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../PublicComponent/DynamicTitle";
import TopHeader from "../../header/TopHeader";
import BackNavStep from "../../header/BackNav";
import DynamicDataSet from "../../PublicComponent/DynamicDataSet";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useLocation, useNavigate } from "react-router-dom";

const Level2 = ({ onPrevious, onSubmit }) => {
  // Hooks and variables
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultType = searchParams.get("type");
  const navigate = new useNavigate();
  const [form, setform] = useState("");

  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  // Event handlers
  const handlePrevious = () => {
    navigate(`/contenu/getform?type=${defaultType}`);
    onPrevious(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    setform(data);
    onSubmit(data);
    navigate(`/contenu/${defaultType}`);
  };

  // JSX rendering
  return (
    <>
      {/* Top header */}
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          title={defaultType}
          classes="hidden"
          type={defaultType}
          linkTo={`/contenu/getform?type=${defaultType}`}
          handlePrevious={handlePrevious}
        />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 mt-32"
      >
        <div className="w-[90%] flex flex-col gap-4">
          <div className="">
            <DynamicTitle text="Informations complémentaires" size="xl" />
          </div>

          <div>
            <DynamicDataSet label="Sélectionner le produit" />
          </div>

          <div className="-mt-2">
            <DynamicInput
              label="Télécharger le fichier média"
              type={defaultType}
            />
          </div>

          {/* Conditional rendering based on `defaultType` */}
          {defaultType === "video" && (
            <div className="-mt-4">
              <DynamicInput label="ou Link" />
            </div>
          )}

          <div className="-mt-4">
            <DynamicSelect
              label="Sélectionner le tag"
              options={["Option 1", "Option 2", "Option 3"]}
              nameData="tag"
            />
          </div>

          <div className="my-4">
            <DynamicButton
              label="Enregistrer"
              getsizeClasses="w-full"
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Level2;
