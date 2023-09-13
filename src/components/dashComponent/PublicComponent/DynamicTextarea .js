import React from "react";

const DynamicTextarea = ({
  value,
  onChange,
  rows,
  placeholder,
  className,
  label,
  name,
}) => {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <textarea
        name={name}
        // required
        rows={rows}
        className="w-full border-borde-gray mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-borde-gray shadow-sm rounded-lg"
      ></textarea>
    </div>
  );
};

export default DynamicTextarea;
