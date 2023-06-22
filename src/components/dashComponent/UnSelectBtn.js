import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";

const UnSelectBtn = ({ option }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionChange = (selected) => {
    setSelectedOption(selected.value);
    setShowOptions(false);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex">
      <div className=" inline-block w-full ">
        <div className=" border border-borde-gray rounded-l-md p-1 bg-custom-white">
          <div
            className="flex items-center justify-between p-3 bg-custom-white cursor-pointer"
            onClick={handleToggleOptions}
          >
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-text-gray"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 5.75a.75.75 0 1 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5zm6.5 0a.75.75 0 1 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5zm6.5 0a.75.75 0 1 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-text-gray">{selectedOption}</p>
            </div>
            <div className="flex items-center">
              <svg
                className={`w-4 h-4 text-text-gray ${
                  showOptions ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14.75a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 1 1 1.06-1.06L10 12.94l3.97-3.97a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {showOptions && (
            <div className="absolute w-[350px] bg-custom-white rounded-b-md mt-3 ">
              {option?.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 my-3   hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleOptionChange(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <button className="bg-deep-green hover:bg-meduim-green font-bold py-2 px-4 rounded-r-md text-custom-white">
        <BiPlusMedical />
      </button>
    </div>
  );
};

export default UnSelectBtn;
