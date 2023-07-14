const CardVideo = ({ titre, link }) => {
  return (
    <div>
      <div className="max-w-md w-full bg-custom-white  rounded-lg p-6">
        {link && link.length > 0 ? (
          <div className="mb-4 relative ">
            (
            <iframe
              title={titre}
              width="100%"
              height="200"
              src={link.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
            )(
            <>
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
            )
          </div>
        ) : (
          <p>Aucune vidéo disponible.</p>
        )}
      </div>
    </div>
  );
};

export default CardVideo;
