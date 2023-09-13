import React from "react";

const DynamicCheckbox = ({
  name,
  value,
  isChecked,
  handleCheckboxChange,
  label,
  type,
  ref,
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
        ref={ref}
      />
      <label htmlFor={name} className="text-[11px]">
        {label}{" "}
      </label>
    </div>
  );
};

export default DynamicCheckbox;
