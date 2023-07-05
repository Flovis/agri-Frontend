import React from "react";
import { BiArrowBack, BiPlusMedical } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const BackNavStep = ({ linkTo, title, set, classes, type, handlePrevious }) => {
  console.log("title: ", title);
  const navigate = useNavigate({});

  const handleForm = ({}) => {
    navigate(`/contenu/getform?type=${type}`);
  };

  return (
    <div onClick={set}>
      <div className="flex items-center gap-10 p-4 bg-custom-white">
        <Link to={linkTo}>
          <div
            onClick={handlePrevious}
            className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-borde-gray"
          >
            <BiArrowBack className="text-xl" />
          </div>
        </Link>
        <div className="flex justify-between w-full items-center">
          <div className="font-bold">{title}</div>
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
  );
};

export default BackNavStep;
