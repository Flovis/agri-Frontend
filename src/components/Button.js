import React from "react";
//   "block mx-auto shadow bg-[#08C18A] hover:bg-[#06B581] text-custom-white
// font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
const Button = ({ value, icon, typ, className }) => {
  return (
    <button type={typ} className={className}>
      {value || icon}
    </button>
  );
};

export default Button;
