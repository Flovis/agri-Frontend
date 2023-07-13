import React, { useState } from "react";
// import Notification from "./CardNotification";
import { useNavigate } from "react-router-dom";

export default function GestionNotification() {
  const navigate = new useNavigate();

  const handleClick = () => {
    navigate("/contenu/notification");
  };
  const radios = [
    {
      name: "Hobby plan",
      description: "For personal or non-commercial projects.",
    },
    {
      name: "Pro plan",
      description: "For team collaboration with advanced features.",
    },
    {
      name: "Enterprise plan",
      description: "For teams with security,and performance needs.",
    },
  ];

  return (
    <div className=" mx-auto px-4 bg-custom-white">
      <h2 className="text-gray-800 font-medium">Notification</h2>
      <ul className="mt-6 space-y-3 overflow-y-auto h-80 ">
        {radios.map((item, idx) => (
          <li key={idx} onClick={handleClick}>
            <label htmlFor={item.name} className="block relative">
              <input
                id={item.name}
                type="radio"
                defaultChecked={idx == 1 ? true : false}
                name="payment"
                class="sr-only peer"
              />
              <div className="w-full p-5 cursor-pointer rounded-lg border border-borde-gray bg-white shadow-sm ring-borde-gray peer-checked:ring-2 duration-200">
                <div className="pl-7">
                  <h3 className="leading-none text-gray-800 font-medium">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
