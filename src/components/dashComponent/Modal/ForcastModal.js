import CardAlert2 from "../cards/CardAlert2";

const ForcastModal = ({ onClose, data }) => {
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const weatherData = [
    {
      icon: "sun",
      name: "New York",
      temperature: 25,
      condition: "Sunny",
    },
    {
      icon: "cloud",
      name: "London",
      temperature: 18,
      condition: "Cloudy",
    },
    {
      icon: "rain",
      name: "Paris",
      temperature: 15,
      condition: "Rainy",
    },
    {
      icon: "sun",
      name: "New York",
      temperature: 25,
      condition: "Sunny",
    },
    {
      icon: "cloud",
      name: "London",
      temperature: 18,
      condition: "Cloudy",
    },
    {
      icon: "rain",
      name: "Paris",
      temperature: 15,
      condition: "Rainy",
    },
    {
      icon: "rain",
      name: "Paris",
      temperature: 15,
      condition: "Rainy",
    },
  ];

  const currentDate = new Date();

  return (
    <div className="fixed  inset-x-0 flex items-center justify-center z-50 bottom-0 w-full duration-200  ">
      <div className="bg-white w-[95%] rounded-lg shadow-lg p-4 bg-custom-white h-96 flex items-center justify-center overflow-y-auto ">
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
        <div className="mt-96 p-11">
          <CardAlert2 data={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default ForcastModal;
