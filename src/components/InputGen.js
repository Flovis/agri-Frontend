import React from "react";
import Select from "react-select";

const InputGen = ({
  options,
  inputValue,
  onInputChange,
  classnameInput,
  classnameSelect,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      <Select options={options} className={classnameSelect} />
      <input
        type={type}
        className={`border ${classnameInput}`}
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGen;
