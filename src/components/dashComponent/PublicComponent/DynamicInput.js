import React from "react";
import AudioInput from "../Cotenu/form/inputType/TypeAudio";
import VideoInput from "../Cotenu/form/inputType/TypeVideo";
import FileInput from "../Cotenu/form/inputType/TypeTextuelle";

const DynamicInput = ({
    label,
    type,
    value,
    tailTexte,
    classes,
    name,
    editor,
    seteditor,
}) => {
    let inputComponent;

    switch (type) {
        case "audio":
            inputComponent = <AudioInput label={label} />;
            break;
        case "video":
            inputComponent = <VideoInput label={label} value={value} />;
            break;
        case "textuel":
            inputComponent = (
                <FileInput
                    label={label}
                    seteditor={seteditor}
                    editor={editor}
                />
            );
            break;
        default:
            inputComponent = (
                <input
                    type={type}
                    id={label}
                    className={`border border-borde-gray text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 ${classes}`}
                    value={value}
                    name={name ? name : "title"}
                    // required
                    maxLength={tailTexte}
                />
            );
            break;
    }

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={label} className="font-medium text-text-gray">
                {label}
            </label>
            {inputComponent}
        </div>
    );
};

export default DynamicInput;
