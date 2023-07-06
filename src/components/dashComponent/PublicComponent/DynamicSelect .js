import React, { useState } from "react";

const DynamicSelect = ({ label, options, classes, nameData, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSelectedOption(inputValue);
    filterOptions(inputValue);
    if (onChange) {
      onChange(e);
    }
  };

  const filterOptions = (inputValue) => {
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFilteredOptions([]);
  };

  return (
    <div className="relative">
      <label className="text-sm font-medium text-text-gray my-2">{label}</label>
      <input
        type="text"
        className={`border mt-2 border-borde-gray text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 ${classes}`}
        value={selectedOption}
        onChange={handleInputChange}
        placeholder="Rechercher..."
        name={nameData}
        // required
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute w-full bg-custom-white border border-borde-gray rounded-md mt-2 h-28 overflow-y-auto z-10">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DynamicSelect;
