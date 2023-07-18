import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MoonLoader } from "react-spinners";

const CardVideo = ({ ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <div className="max-w-md w-full bg-custom-white rounded-lg p-6">
        {props.file.link && props.file.link.length > 0 ? (
          <div className="mb-4 relative">
            {isPlaying ? (
              <ReactPlayer url={props.file.link} playing={isPlaying} controls />
            ) : (
              <div
                className="w-full h-40 bg-cover bg-center bg-no-repeat cursor-pointer"
                onClick={handlePlay}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="bg-[#ff0000] rounded-lg px-3 py-1"
                    onClick={handlePlay}
                  >
                    <svg
                      className={`${
                        isPlaying ? "w-full h-full" : "w-6 h-6"
                      } text-custom-white`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <MoonLoader color="#488575" />
        )}
      </div>
    </div>
  );
};

export default CardVideo;
//  style={{
//                   backgroundImage: `url('https://img.youtube.com/vi/${
//                     props.file.link.split("v=")[1]
//                   }/maxresdefault.jpg')`,
//                 }}
