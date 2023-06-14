import React from "react";

const CardNotification = ({title, content}) => {
    return (
        <div>
            <div className="w-full h-auto p-4 border-t border-borde-gray hover:bg-deep-green hover:text-custom-white">
                <div className="font-bold">{title}</div>
                <div className="">{content}</div>
            </div>
        </div>
    );
};

export default CardNotification;
