import React from "react";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";

export default function ListeAlert() {
  return (
    <>
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title="Liste de configuration"
          linkTo="/alert"
        />
      </div>
      <form className="flex flex-col justify-center items-center gap-4 mt-32">
        <div className="w-[90%] flex flex-col gap-px">
          <div className="w-[90%]">
            <div>
              <DynamicTitle
                text="Liste de tout le configuration en attente"
                size="md"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
