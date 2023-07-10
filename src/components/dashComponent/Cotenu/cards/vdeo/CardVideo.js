import { useState } from "react";

const CardVideo = ({ videos }) => {
  return (
    <div className="min-h-screen bg-gray-100  items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        {/* <h1 className="text-2xl font-bold mb-6">Vidéos</h1> */}
        {videos && videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="mb-4 relative ">
              {video.includes("watch?v=") ? (
                <iframe
                  title={`Vidéo ${index}`}
                  width="100%"
                  height="200"
                  src={video.replace("watch?v=", "embed/")}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <embed
                    src={video}
                    className="w-full h-[200px] mb-10"
                    controls={false}
                    autoplay={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#ff0000] rounded-lg px-3 py-1">
                      <svg
                        className="w-6 h-6 text-custom-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>Aucune vidéo disponible.</p>
        )}
      </div>
    </div>
  );
};

export default CardVideo;
