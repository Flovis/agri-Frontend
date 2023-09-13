import React from "react";

const VideoInput = React.memo(() => {
    return (
        <div>
            <label
                htmlFor="video-input"
                className="flex-grow rounded p-2 cursor-pointer -mb-3 text-text-gray"
            ></label>
            <input
                type="url"
                className={`border border-borde-gray -mt-3 text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 `}
                name="link"
            />
        </div>
    );
});

export default VideoInput;
