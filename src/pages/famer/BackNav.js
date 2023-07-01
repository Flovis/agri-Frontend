import React from "react";
import { BiArrowBack, BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackNav = ({ linkTo, title }) => {
  return (
    <div>
      <div className="flex items-center gap-10 p-4 bg-custom-white">
        <Link to={linkTo}>
          <div className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-borde-gray">
            <BiArrowBack className="text-xl" />
          </div>
        </Link>
        <div className="flex justify-between items-center w-full">
          <div className="font-bold">{title}</div>
          <button className="bg-deep-green duration-200 p-2 rounded-md flex items-center text-md text-custom-white">
            <BiPlusMedical className="text-xl" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackNav;
