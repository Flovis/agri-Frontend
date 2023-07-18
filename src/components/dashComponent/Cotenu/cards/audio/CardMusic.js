import React, { useEffect, useRef, useState } from "react";
import { BiHeart, BiPlay } from "react-icons/bi";
import { ImMusic } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";

export default function CardMusic({ ...props }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    if (props.file.file) {
      setUrl(props.file.file);
    }
  }, [props.file.file]);

  const handlePlayPause = () => {
    const audioElement = audioRef?.current?.audioEl.current;

    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const handleAudioError = () => {
    setUrl("");
    setIsPlaying(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 p-4 bg-custom-white rounded-lg duration-300 ease-in-out hover:bg-borde-gray">
        <div className="flex items-center justify-center w-10 h-10 bg-deep-green rounded-full">
          <ImMusic className="text-custom-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium">{props.file.titre}</h3>
        </div>
        <div className="flex items-center gap-2">
          <FiClock className="text-text-gray" />
          <span className="text-text-gray">
            {formatTime(audioRef?.current?.audioEl.current.duration || 0)}
          </span>
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
      <div className="text-[10px] absolute px-1">{props.file.description}</div>
    </div>
  );
}
