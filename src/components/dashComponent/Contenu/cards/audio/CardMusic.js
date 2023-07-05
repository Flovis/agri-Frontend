import React from "react";
import { BiHeart, BiPlay } from "react-icons/bi";
import { ImMusic } from "react-icons/im";
import { FiClock } from "react-icons/fi";

export default function CardMusic() {
  return (
    <div className="flex items-center gap-4 p-4 bg-custom-white rounded-lg shadow-md duration-300 ease-in-out hover:bg-borde-gray">
      <div className="flex items-center justify-center w-10 h-10 bg-deep-green rounded-full">
        <ImMusic className="text-custom-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">Titre de la musique</h3>
        <p className="text-text-gray">Artiste</p>
      </div>
      <div className="flex items-center gap-2">
        <FiClock className="text-text-gray" />
        <span className="text-text-gray">3:45</span>
      </div>
      <div className="flex items-center gap-2">
        <BiHeart className="text-text-gray cursor-pointer" />
        <BiPlay className="text-custom-red cursor-pointer" />
      </div>
    </div>
  );
}
