import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CardPrintContenu({ image, slug, nom }) {
  return (
    <div className="max-w-md bg-white border border-borde-gray rounded-lg ">
      <img
        src={image || `https://source.unsplash.com/${slug}/300x300`}
        alt="Image"
        className="object-cover w-full h-56 rounded-t-lg "
      />
      <div className="p-4">
        <h2 className="text-sm text-text-gray font-semibold text-gray-800 flex">
          {nom} <BiPlayCircle />
        </h2>
        {/* <p className="text-gray-500">Type: pdf</p> */}
        <p className="text-text-gray text-[10px]">Langue: Français</p>
        <div className="flex items-center justify-between ">
          <Link to="/alert">
            <button className="p-2 bg-deep-green rounded-md text-sm text-custom-white">
              Publier
            </button>
          </Link>
          <p className="text-text-gray text-[10px] ">22/06/2023</p>
        </div>
      </div>
    </div>
  );
}
