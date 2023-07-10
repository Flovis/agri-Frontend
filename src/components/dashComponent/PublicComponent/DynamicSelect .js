import { useState } from "react";
import Select from "react-select";
const DynamicSelect = ({ label, options, classes, nameData, onChange }) => {
    return (
        <div className="relative">
            <label className="text-sm font-medium text-gray-500 my-2">
                {label}
            </label>
            <select
                className={`border mt-2 bg-custom-white border-borde-gray text-text-gray text-md rounded-lg focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full p-3.5 ${classes}`}
                onChange={onChange}
                name={nameData}
            >
                {options?.map((el) => {
                    return (
                        <option key={el} className=" hover:bg-deep-green">
                            {el}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default DynamicSelect;
