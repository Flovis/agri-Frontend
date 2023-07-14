import React, { useState } from "react";
import DynamicButton from "./DynamicButton ";
import { BiSearch } from "react-icons/bi";

export default function InputSearch({ data }) {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length >= 3) {
      handleSearch(value);
    }
  };

  const filterData = (searchValue) => {
    if (data) {
      return data.filter((item) => item.cycle === searchValue);
    }
    return [];
  };

  const handleSearch = (searchValue) => {
    const filteredData = filterData(searchValue);

    console.log(filteredData);
  };

  return (
    <>
      <div className="mb-4 w-full border flex bg-custom-white border-borde-gray rounded-lg">
        <input
          type="text"
          name="search"
          className="w-full rounded-l-lg border border-borde-gray text-text-gray text-md focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3"
          onChange={onChange}
        />
        <DynamicButton label={<BiSearch />} onClick={handleSearch} />
      </div>
    </>
  );
}
