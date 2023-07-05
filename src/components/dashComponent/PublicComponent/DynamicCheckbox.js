import React, { useState } from "react";

const DynamicCheckbox = ({
  name,
  value,
  isChecked,
  handleCheckboxChange,
  label,
  type,
}) => {
  //   const [isChecked, setIsChecked] = useState(false);

  //   const handleCheckboxChange = (event) => {
  //     setIsChecked(event.target.checked);
  //   };

  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className="mr-2"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="horaire1">{label} </label>
    </div>
  );
};

export default DynamicCheckbox;
