import React from "react";
import Select from "react-select";

export function SelectJS({ colourOptions }) {
  return (
    <Select
      defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={colourOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}
