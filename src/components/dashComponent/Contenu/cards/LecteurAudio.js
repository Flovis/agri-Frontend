import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function LecteurAudio() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player bg-gray-100 rounded-lg p-4 shadow-md flex items-center">
      <div className="audio-controls mr-4">
        <button
          className="play-button bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          onClick={togglePlay}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <div className="audio-info flex-1">
        <h3 className="audio-title text-xl font-semibold mb-1">
          Titre de la chanson
        </h3>
        <p className="audio-artist text-gray-500">Artiste</p>
      </div>
    </div>
  );
}
