import React, { useState } from "react";

const DynamicDataList = ({ label, options, classes }) => {
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [listId, setListId] = useState(generateListId());

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const filtered = options?.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
    setValue(inputValue);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newOption = e.target.value.trim();
      setSelectedOptions([...selectedOptions, newOption]);
      setFilteredOptions([...filteredOptions, newOption]);
      setValue("");
    }
  };
  function generateListId() {
    return `datalist-${Math.random().toString(36).substr(2, 9)}`;
  }
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={label}
        className="text-sm font-medium text-text-gray mb-1"
      >
        {label}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        placeholder={`Entrez des ${label.toLowerCase()}`}
        list={listId}
        className={`border border-borde-gray text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 ${classes}`}
        value={value}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      <datalist id={listId}>
        {filteredOptions?.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option} value={option} />
            ))}
          </optgroup>
        ))}
      </datalist>
      <div>
        {selectedOptions?.map((option) => (
          <span
            key={option}
            className="inline-block bg-gray-200 px-2 py-1 rounded-md mr-2 mt-2"
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DynamicDataList;
