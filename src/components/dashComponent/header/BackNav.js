import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackNavStep = ({ linkTo, title, set }) => {
  return (
    <div onClick={set}>
      <div className="flex items-center gap-10 p-4 bg-custom-white">
        <Link to={linkTo}>
        <div className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-borde-gray">
          <BiArrowBack className="text-xl" />
        </div>
        </Link>
        <div className="font-bold">{title}</div>
      </div>
    </div>
  );
};

export default BackNavStep;
