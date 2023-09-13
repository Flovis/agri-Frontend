const Popup = ({ onClose }) => {

  const handleConfigureProduction = () => {};

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[gray] bg-opacity-50">
      <div className="bg-[white] p-4 rounded-lg w-64">
        <button
          className="mb-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
          onClick={handleConfigureMeteo}
        >
          Configuration Alert Meteo
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          onClick={handleConfigureProduction}
        >
          Configuration Alert plan Production
        </button>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup;
