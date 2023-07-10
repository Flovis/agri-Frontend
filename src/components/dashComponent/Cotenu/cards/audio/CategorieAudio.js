import React, { useRef, useState } from "react";
import { BiSelectMultiple } from "react-icons/bi";

export default function CardAudio({ titre, description, audioFile, image }) {
  const audioRef = useRef(null);
  const [isElementVisible, setElementVisible] = useState(false);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  };

  const playAudio = () => {
    audioRef.current.play().catch((error) => {
      console.error("Erreur lors de la lecture du fichier audio:", error);
    });
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const toggleElementVisibility = () => {
    setElementVisible(!isElementVisible);
  };

  const closeElement = () => {
    setElementVisible(false);
  };

  return (
    <div className="mx-auto rounded-lg overflow-hidden grid grid-cols-3 gap-4 bg-custom-white">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between ">
          <h2 className="text-sm font-semibold mb-2">{titre} </h2>
          <button>
            <BiSelectMultiple className="text-deep-green" />{" "}
          </button>
        </div>
        <div
          className={`${
            isElementVisible ? "absolute  inset-x-0 mx-2" : "hidden"
          } bg-custom-white border  border-borde-gray p-4 rounded-md`}
        >
          {/* Content */}
          <p className="text-sm">{description}</p>
          <audio
            ref={audioRef}
            src={URL?.createObjectURL(audioFile)}
            controls
            className=" bg-custom-white "
            style={{ color: "#000000" }}
          ></audio>
          <button
            onClick={toggleElementVisibility}
            className="bg-red-500 text-white font-semibold py-px px-2 rounded-full"
          >
            Close
          </button>
        </div>
        <div>
          <button
            onClick={toggleElementVisibility}
            className="bg-deep-green text-custom-white font-semibold py-px px-2 rounded-full w-28"
          >
            Voir l'audio
          </button>
        </div>
      </div>
    </div>
  );
}
