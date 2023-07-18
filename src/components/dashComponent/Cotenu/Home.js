import { useState } from "react";
import { Notyf } from "notyf";
import DynamicButton from "../PublicComponent/DynamicButton ";
import { BiPlusMedical } from "react-icons/bi";
import Step from "./step/Step";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);

  const navigate = new useNavigate();
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const handleGotoForm = () => {
    navigate(`/contenu/getform/`);
  };

  const handleclick = (type) => {
    setOpen(!open);
    navigate(`/contenu/fichier?type=${type}`);
  };
  return (
    <div className="py-28 h-screen">
      <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-between items-center  md:px-8 lg:flex-nowrap">
        <div className="max-w-full my-8 mb-10 space-y-3 flex justify-between">
          <p className=" mt-4 text-text-gray text-xl font-semibold sm:text-2xl">
            categories
          </p>
          {/* btn add contenu */}
          <DynamicButton
            label={
              <p className="flex font-extrabold items-center gap-2">
                {<BiPlusMedical />}
                <p>Ajout Contenu</p>
              </p>
            }
            onClick={handleGotoForm}
          />
        </div>
        {/* content adding */}
        {<Step />}
        <div className="flex-none mt-10  lg:mt-0">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:[&>*]:my-20  items-center justify-center [&>*]:bg-custom-white [&>*]:w-full md:[&>*]:h-36 [&>*]:h-20 [&>*]:flex sm:[&>*]:px-10 [&>*]:rounded-lg">
            <li
              onClick={() => handleclick("audio")}
              className="flex items-center flex-col md:flex-row md:gap-4 justify-center m-auto  cursor-pointer   "
            >
              <img
                src="./assets/fichier.png"
                alt="png"
                className="w-12 md:w-20  flex-none"
              />
              <p className="font-extrabold text-gray">Audio</p>
            </li>
            <li
              onClick={() => handleclick("video")}
              className="flex items-center flex-col  cursor-pointer  justify-center m-auto md:flex-row md:gap-4"
            >
              <img
                src="./assets/fichier.png"
                alt="png"
                className="w-12 md:w-20  flex-none"
              />
              <p className="font-extrabold text-gray">Video</p>
            </li>
            <li
              onClick={() => handleclick("textuel")}
              className="flex items-center  cursor-pointer flex-col  justify-center m-auto md:flex-row md:gap-4  "
            >
              <img
                src="./assets/fichier.png"
                alt="png"
                className="w-12 md:w-20  flex-none"
              />
              <p className="font-extrabold text-gray">Textuel</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
