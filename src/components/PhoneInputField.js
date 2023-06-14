import React from "react";
import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ label, name, ...rest }) => {
    const [field, meta, helpers] = useField(name);

    const handleOnChange = (value) => {
        helpers.setValue("+" + value);
    };

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <PhoneInput
                    {...field}
                    {...rest}
                    onChange={handleOnChange}
                    inputProps={{
                        name,
                        id: name,
                        className: "",
                    }}
                    country="cd"
                    inputStyle={{
                        width: "100%",
                        padding: "15px",
                        paddingLeft: "49px",
                    }}
                />
                {meta.error && meta.touched && (
                    <div className="text-sm text-custom-red mt-1 ml-1">
                        {meta.error}
                    </div>
                )}
            </div>
        </div>
    );
};
export default PhoneInputField;
