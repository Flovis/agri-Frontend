import React from "react";
import { Link } from "react-router-dom";
import { BiVideo } from "react-icons/bi";
import { FiVolume2 } from "react-icons/fi";
import { TbPdf } from "react-icons/tb";
import CardCategorie from "../cards/CardCategorie";

const Step1 = () => {
  return (
    <div>
      <div className="flex items-center mb-4 justify-between">
        <div className="flex">
          <div className="w-2 h-6 bg-deep-green"></div>
          <h2 className="text-xl font-bold mx-2">Base de connaissance</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-20">
        <Link to={`/contenu/audio`} className="duration-200">
          <CardCategorie
            image="https://source.unsplash.com/BN6iQEVN0ZQ/300x300"
            type={<FiVolume2 className="text-custom-red mr-2" />}
            titre="Categorie Audio"
            description="Découvrez des podcasts, des interviews et des reportages audio mettant en lumière les défis, les innovations et les réussites de l'agriculture."
          />
        </Link>
        <Link to={`/contenu/video`} className="duration-200">
          <CardCategorie
            image="https://source.unsplash.com/Z0rh7_Xumco/300x300"
            type={<BiVideo className="text-custom-red mr-2" />}
            titre="Categorie Video"
            description="Des vidéos inspirantes mettant en lumière le travail acharné des agriculteurs pour cultiver et récolter une variété de cultures."
            // Mettez à jour l'état lors du clic sur la carte vidéo
          />
        </Link>

        <Link to={`/contenu/textuel`} className="duration-200">
          <CardCategorie
            image="https://source.unsplash.com/4hTVRYshNuE/300x300"
            type={<TbPdf className="text-custom-red mr-2" />}
            titre="Categorie textuelles"
            description="Plongez dans le fascinant monde des agriculteurs à travers des contenus PDF."
            // Mettez à jour l'état lors du clic sur la carte textuelle
          />
        </Link>
      </div>
    </div>
  );
};

export default Step1;
