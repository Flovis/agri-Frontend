import React, { useRef, useState, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoInput = React.memo(({ classes, onChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const videoRef = useRef(null);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, []);

  const handleVideoChange = useCallback((event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile(selectedFile);
      setUrl(fileUrl);
      setIsPlaying(false);
    }
  }, []);

  const handleVideoError = useCallback(() => {
    setFile(null);
    setUrl("");
    setIsPlaying(false);
  }, []);

  return (
    <div>
      <div
        className={`border border-borde-gray bg-custom-white rounded-lg overflow-hidden ${classes}`}
      >
        {url && (
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
        )}
        <div className="flex items-center bg-white p-3">
          <label
            htmlFor="video-input"
            className="flex-grow rounded p-2 cursor-pointer"
          >
            {file ? file.name : "Choisissez le fichier vidéo"}
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
            id="video-input"
            name="file"
          />
        </div>
      </div>
    </div>
  );
});

export default VideoInput;
