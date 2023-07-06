import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function SelectComponent() {
  return (
    <div class="sm:col-span-3">
      <label
        for="country"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        Country
      </label>
      <div class="mt-2">
        <select
          id="country"
          name="country"
          autocomplete="country-name"
          class="border mt-2 border-borde-gray text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5"
        >
          {/* border mt-2 border-borde-gray text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5  */}
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
  );
}
