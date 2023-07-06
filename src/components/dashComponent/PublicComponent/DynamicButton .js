import React from "react";

const DynamicButton = ({ label, getsizeClasses, onClick, type }) => {
  return (
    <button
      className={`px-4 py-2 text-custom-white bg-deep-green rounded-md focus:outline-none ${getsizeClasses}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default DynamicButton;
