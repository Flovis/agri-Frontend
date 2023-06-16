const ForcastModal = ({ onClose }) => {
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const currentDate = new Date();

  return (
    <div className="fixed inset-x-0 flex items-center z-50 bottom-0 w-full duration-200">
      <div className="bg-white w-full rounded-lg shadow-lg p-4">
        <button
          className="absolute border border-deep-green bg-custom-white top-4 right-4 text-gray-500 hover:text-gray-700"
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
        <div className="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2 bg-[#eff0f2] h-96 border border-deep-green rounded-lg ">
          <div className="bg-gray-100 p-2 rounded-lg h-80 mt-4 grid grid-cols-4 gap-2">
            {[0, 1, 2, 3, 4, 5, 6].map((jour, index) => {
              const day = new Date(currentDate);
              day.setDate(currentDate.getDate() + index);
              const options = { weekday: "long" };
              const dayName = new Intl.DateTimeFormat("fr-FR", options).format(
                day
              );
              if (day.toDateString() === currentDate.toDateString()) {
                return (
                  <div
                    key={index}
                    className="w-20 bg-custom-white flex flex-col items-center font-bold text-sm "
                  >
                    <span>Aujourd'hui</span>
                    <span>{day.getDate()}</span>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="w-20 bg-custom-white flex flex-col items-center font-bold text-sm "
                >
                  <span>{dayName}</span>
                  <span>{day.getDate()}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForcastModal;
