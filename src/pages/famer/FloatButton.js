import React from "react";

const FloatButton = ({ onClick, value}) => {
    return (
        
            <button
                className="fixed bottom-16 right-4 bg-deep-green text-custom-white px-6 py-6 rounded-full shadow font-bold hover:bg-deep-green"
                onClick={onClick}
            >
                {value}
            </button>
      
    );
};

export default FloatButton;
