import React from "react";
import { BiArrowBack, BiPlusMedical } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const BackNavStep = ({ linkTo, title, set, classes, handlePrevious }) => {
  const navigate = useNavigate({});

  const handleForm = ({}) => {
    navigate(`/contenu/getform`);
  };

  return (
    <div className="bg-custom-white h-16">
      <div onClick={set} className="max-w-screen-xl mx-auto ">
        <div className="fixed  flex items-center gap-10 p-4 bg-custom-white z-[100%] ">
          <Link to={linkTo}>
            <div
              onClick={handlePrevious}
              className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-borde-gray"
            >
              <BiArrowBack className="text-xl" />
            </div>
          </Link>
          <div className="flex justify-between w-full items-center">
            <div className="font-bold -ml-8">{title} </div>
            <button
              className={` ${classes} bg-deep-green duration-200 p-2 rounded-md flex items-center text-md text-custom-white`}
              onClick={handleForm}
            >
              <BiPlusMedical className="text-xl" />
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackNavStep;
