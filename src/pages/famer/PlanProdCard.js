import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const PlanProdCard = ({ title, quantity, debutDate,id }) => {
    return (
        <div className="w-full h-auto p-4 border-t border-borde-gray hover:bg-deep-green hover:text-custom-white">
            <div className="flex justify-between items-center">
                <div className="font-bold"><span>{id +". "}</span>{title}</div>
                <div className="flex items-center gap-4">
                    <button className="px-2 py-2 text-xl rounded-full">
                        {" "}
                        <BsTrash />
                    </button>
                    <button className="px-2 py-2 text-xl rounded-full">
                        {" "}
                        <BsPencilSquare />
                    </button>
                </div>
            </div>
            <div className="text-sm">Quantité: {" " + quantity}</div>
            <div className="text-sm">Date de début: {" " + debutDate}</div>
        </div>
    );
};

export default PlanProdCard;
