import React from "react";

import Select from "react-select";
import { colourOptions } from "./doc/data";

export function SelectJS() {
  <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />;
}
