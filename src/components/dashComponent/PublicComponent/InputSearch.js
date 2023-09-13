import React, { useState } from "react";
import DynamicButton from "./DynamicButton ";
import { BiSearch } from "react-icons/bi";

export default function InputSearch({ data, placeholder, onChange }) {
  return (
    <>
      <div className="mb-4 w-full border flex bg-custom-white border-borde-gray rounded-lg">
        <input
          type="text"
          name="search"
          className="w-full rounded-lg border border-borde-gray text-text-gray text-md focus:outline-none focus:ring-borde-gray focus:border-borde-gray block  p-3"
          onChange={onChange}
          placeholder={placeholder}
        />
        {/* <DynamicButton label={<BiSearch />} onClick={handleSearch} /> */}
      </div>
    </>
  );
}
