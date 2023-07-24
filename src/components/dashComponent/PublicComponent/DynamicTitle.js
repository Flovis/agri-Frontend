import React from "react";

const DynamicTitle = ({ text, level = 1, size, md }) => {
  const HeadingComponent = `h${level}`;

  return (
    <HeadingComponent
      className={`font-bold text-text-gray text-${size} md:text-${md} md:text-lg`}
      name="title"
    >
      {text}
    </HeadingComponent>
  );
};

export default DynamicTitle;
