import React, { useState } from "react";
import DynamicInput from "../../PublicComponent/DynamicInput";
import DynamicSelect from "../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import TopHeader from "../../header/TopHeader";
import BackNavStep from "../../header/BackNav";
import DynamicTextarea from "../../PublicComponent/DynamicTextarea ";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import {  useNavigate } from "react-router-dom";

const Level1 = ({ onNext }) => {
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
    const data = Object.fromEntries(formdata);
    if (data.cycle === "" || data.title === "" || data.description === "") {
      notyf.error("veillez remplir les champs svp");
    } else {
      onNext(data);


    }
  };

  return (
    <>
      <div className="z-50 fixed h-18  top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title="Ajout Contenu"
          linkTo={`/contenu`}
        />
      </div>

      <main className="mb-10 mt-20 w-full h-full flex flex-col items-center justify-center px-4 items-center">
        <div className="max-w-sm w-full mt-4">
          <div className="-mb-3">
            <div className="mt-5 space-y-1">
              <h3 className="text-text-gray text-xl font-bold sm:text-xl ">
                Informations de base
              </h3>
            </div>
          </div>
          <form onSubmit={handleNext} className="mt-8 space-y-5">
            <div>
              <DynamicSelect
                label="Sélectionner le cycle de production"
                options={[
                  "semence",
                  "croissance",
                  "recolte",
                  "conditionnement",
                ]}
                nameData="cycle"
              />
            </div>
            <div>
              <DynamicSelect
                label="Sélectionner une catégorie"
                options={["audio", "video", "textuel"]}
                nameData="category"
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
            <div className="">
              <DynamicButton
                label="Suivant"
                getsizeClasses="w-full "
                type="submit"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Level1;
