import React, { useRef, useState } from "react";
import { BiHeart, BiPlay } from "react-icons/bi";
import { ImMusic } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";

export default function CardMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const audioRef = useRef(null);

  const handlePlayPause = ({ file }) => {
    const audio = audioRef?.current?.audioEl?.current;
    if (file) {
      setFile(file);
      setUrl(URL.createObjectURL(file));
      setIsPlaying(false);
    }
    if (audio) {
      if (audio.paused) {
        audio?.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleAudioError = () => {
    setFile(null);
    setUrl("");
    setIsPlaying(false);
  };

  return (
    <div className="flex  items-center gap-4 p-4 bg-custom-white rounded-lg  duration-300 ease-in-out hover:bg-borde-gray">
      <div className="flex items-center justify-center w-10 h-10 bg-deep-green rounded-full">
        <ImMusic className="text-custom-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">Titre son</h3>
      </div>
      <div className="flex items-center gap-2">
        <FiClock className="text-text-gray" />
        <span className="text-text-gray">3:45</span>
      </div>
      <div className="flex items-center gap-2">
        <BiHeart className="text-text-gray cursor-pointer" />
        <button
          className="mr-2 p-1 bg-custom-white text-borde-gray focus:outline-none rounded-xl"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <FaPause className="text-custom-red" />
          ) : (
            <FaPlay className="text-custom-red" />
          )}
        </button>
        {url && (
          <ReactAudioPlayer
            src={url}
            className="hidden"
            controls
            onError={handleAudioError}
            volume={1}
            ref={audioRef}
            autoPlay={isPlaying}
          />
        )}
      </div>
    </div>
  );
}
