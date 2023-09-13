import React from "react";

export default function CardCategorie({
  image,
  titre,
  description,
  type,
  onClick,
}) {
  return (
    <div
      className="bg-white rounded-lg border border-borde-gray p-4"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        {type}

        <h2 className="text-xl font-semibold">{titre}</h2>
      </div>
      <img
        src={image}
        alt={titre}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
