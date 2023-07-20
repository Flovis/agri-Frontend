import React, { useContext, useState } from "react";
import DynamicButton from "../PublicComponent/DynamicButton ";
// import { Notyf } from "notyf";
// import { useNavigate } from "react-router-dom";
import { OurContext } from "../../../context/SelectContext";
import CardVideo from "../Cotenu/cards/vdeo/CardVideo";
import CardMusic from "../Cotenu/cards/audio/CardMusic";
import Text from "../Cotenu/cards/text/Text";

export default function ModalContenu({ isOpen, setIsOpen }) {
  const { datas } = useContext(OurContext);

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="z-50 fixed inset-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-60 ">
        <div
          className="p-4 border border-borde-gray bg-custom-white  rounded-lg w-[90%] z-50 relative"
          // onSubmit={handleSubmit}
        >
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              choix du contenu
            </h3>
            <hr />
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300 border grid grid-cols-3">
            {datas?.map((item, index) => (
              <React.Fragment key={index}>
                {/* <div>
                
                  {item.Content_Category.category_name === "audio" && (
                    <CardMusic key={index} file={item} />
                  )}
                </div> */}
                <div className="">
                  {/* <h2>Contenu video</h2> */}
                  {item.Content_Category.category_name === "video" && (
                    <CardVideo key={index} file={item} classes="border" />
                  )}
                </div>
                {/* <div>
                
                  {item.Content_Category.category_name === "texte" && (
                    <Text key={index} file={item} />
                  )}
                </div> */}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-end">
            <DynamicButton label="Valider" type="submit" />
          </div>
        </div>
      </div>
    </>
  );
}
