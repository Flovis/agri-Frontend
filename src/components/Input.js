import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Input = ({
    type = "text",
    label,
    name,
    placeholder,
    required,
    id,
    
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    };
    const inputType = showPassword ? "text" : type;
    const isRequired = required ? true : false;

    // const [field, meta] = useField(name);

    return (
        <div className="relative">
            <label htmlFor={id} className="text-gray-600 text-md mb-[150px]">
                {label}
            </label>{" "}
            <span className="text-custom-red"> *</span>
            <input
                type={inputType}
                name={name}
                id={id}
                placeholder={placeholder}
                required={isRequired}
                className={`border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 ${classes}`}
            />
            {/* {meta.error && meta.touched && (
                <div className="text-sm text-custom-red mt-1 ml-1">
                    {meta.error}
                </div>
            )} */}
            {type === "password" && (
                <button
                    type="button"
                    className="absolute flex  top-1/2 insert-y-o right-3 text-text-gray focus:outline-none"
                    onClick={visiblePassword}
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
            )}
        </div>
    );
};

export default Input;
