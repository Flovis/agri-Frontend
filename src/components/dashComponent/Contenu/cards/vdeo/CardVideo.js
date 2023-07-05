import React from "react";
import { FaPlay } from "react-icons/fa";

export default function CardVideo({
  url,
  handlePlayPause,
  handleVideoError,
  videoRef,
  isPlaying,
}) {
  return (
    <div className="grid grid-cols-1 p-3">
      <div className="relative">
        <video
          src={url}
          controls
          className="w-full h-auto"
          onClick={handlePlayPause}
          onError={handleVideoError}
          ref={videoRef}
        />
        <button
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-white ${
            isPlaying ? "hidden" : ""
          }`}
          onClick={handlePlayPause}
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
}
