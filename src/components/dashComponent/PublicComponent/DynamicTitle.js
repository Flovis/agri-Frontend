import React from "react";

const DynamicTitle = ({ text, level = 1, size }) => {
  const HeadingComponent = `h${level}`;

  return (
    <HeadingComponent
      className={`font-bold text-text-gray text-${size}`}
      name="title"
    >
      {text}
    </HeadingComponent>
  );
};

export default DynamicTitle;
