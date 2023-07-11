import React, { useState } from "react";
import DynamicButton from "./DynamicButton ";
import { BiSearch } from "react-icons/bi";

export default function InputSearch({ data }) {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const Search = (data) => {
    Array.isArray(data).filter((item) => item.cycle === search);
  };

  return (
    <>
      <input type="text" name="search" onChange={onChange} />
      <DynamicButton label={<BiSearch />} onClick={Search} />
    </>
  );
}
