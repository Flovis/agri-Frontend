import { useState } from "react";
import { BiPlay } from "react-icons/bi";

const CardVideo = ({ videoFile, description, titre }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=" mx-auto rounded-lg bg-custom-white w-56 overflow-hidden">
      <div className="relative">
        <video
          src={URL.createObjectURL(videoFile)}
          controls
          className="w-full h-40 sm:h-56 object-cover"
        />
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <BiPlay className="h-20 w-20 text-custom-red" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-md font-medium text-gray-800">{titre} </h3>
        <p className="text-xs text-text-gray">{description}</p>
      </div>
    </div>
  );
};

export default CardVideo;
