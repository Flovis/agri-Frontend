import React from "react";

const DynamicTextarea = ({
  value,
  onChange,
  rows = 4,
  placeholder,
  className,
  label,
  name,
}) => {
  return (
    <div>
      {label && (
        <label className="text-text-gray block mb-2 font-medium -mt-2">
          {label}
        </label>
      )}
      <textarea
        className={`resize-none border-borde-gray w-full border rounded focus:outline-none focus:ring-borde-gray focus:ring-borde-gray p-2 ${className}`}
        value={value}
        // onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        name={name}
        // required
        maxLength={250}
      />
    </div>
  );
};

export default DynamicTextarea;
