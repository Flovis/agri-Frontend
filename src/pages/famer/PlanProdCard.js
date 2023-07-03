import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const PlanProdCard = ({ title, debutDate, id }) => {
    return (
        <div className="h-[100px] p-4 m-1 bg-custom-white rounded-lg  hover:bg-deep-green hover:text-custom-white">
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">
                    <span>{id + ". "}</span>
                    {title}
                </div>
            </div>
            <div className="text-sm">Début: {" " + debutDate}</div>
            <div className="flex items-center gap-4 w-full">
                {/* <button className="px-2 py-2 text-xl rounded-full">
                    {" "}
                    <BsTrash />
                </button>
                <button className="px-2 py-2 text-xl rounded-full">
                    {" "}
                    <BsPencilSquare />
                </button> */}
            </div>
        </div>
    );
};

export default PlanProdCard;
