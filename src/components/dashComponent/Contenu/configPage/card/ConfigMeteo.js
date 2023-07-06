import React, { useState } from "react";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import DynamicTextarea from "../../../PublicComponent/DynamicTextarea ";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import { useNavigate } from "react-router-dom";
import ModalContenu from "../../../Modal/ModalContenu";

export default function ConfigMeteo() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    navigate("/contenu/listemeteo");
  };

  const handleContenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title="configuration Méteo"
          linkTo="/alert"
        />
      </div>
      {isOpen && <ModalContenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      <form className="flex flex-col justify-center items-center gap-4 mt-32">
        <div className="w-[90%] flex flex-col gap-px">
          <div className="w-[90%]">
            <div>
              <DynamicTitle
                text="Associé  un message ou contenu à cet alert"
                size="md"
              />
            </div>
          </div>
          <div className=" mt-4">
            <DynamicTextarea label="Message" rows={3} name="description" />
          </div>
          <div className="flex justify-end my-4">
            <DynamicButton
              label={<MdOutlineProductionQuantityLimits />}
              onClick={handleContenu}
            />
          </div>
          <DynamicButton label="Enregistrer" onClick={handleclick} />
        </div>
      </form>
    </>
  );
}
