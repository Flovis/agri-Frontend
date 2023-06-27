import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { selectContext } from "../../context/SelectContext";

const UnSelectcopy = ({ option }) => {
  const { selectedOption2, setSelectedOption2 } = useContext(selectContext);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionChange2 = (selected) => {
    setSelectedOption2(selected.value);
    setShowOptions(false);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="">
      <div className=" inline-block w-full ">
        <div className=" border border-borde-gray rounded-md p-1 bg-custom-white">
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
              <p className="text-text-gray">{selectedOption2}</p>
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
            <div className="absolute w-[350px] bg-custom-white h-40 overflow-auto rounded-b-md mt-3 ">
              {option?.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 my-3   hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    handleOptionChange2(option);
                  }}
                  aria-required
                >
                  {option.label}
                </div>
              ))}
              {option?.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 my-3   hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    handleOptionChange2(option);
                  }}
                  aria-required
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
UnSelectcopy.propTypes = {
  option: PropTypes.array.isRequired,
};

export default UnSelectcopy;
