import React from "react";

export default function CardRetard({ formData }) {
  return (
    <div className="flex justify-between items-center bg-custom-white p-4 rounded-md gap-2">
      <div className="bg-[#ff5e5e] w-44 p-4 rounded-md flex flex-col items-center justify-center font-semibold text-custom-white ">
        <p className="font-extrabold">2 jours de retard</p>
      </div>
      <div className="text-sm">
        <p className="rounded-md">
          {/*        
              <p> {formData.cycle}</p>
              <p>{formData.category}</p>
              <p> {formData.description}</p>
              <p>{el.frequence}</p>
              <p> {el.canal}</p>
              <p> {el.group}</p>
           */}
          La pulvérisation prévue n'a pas été effectuée, il a
          <strong className="text-[#ff5e5e]">2 jours de retard </strong>{" "}
        </p>
        <p className="bg-[#d1cfcd] w-20 text-center rounded-md font-bold">
          Flovis #1
        </p>
      </div>
    </div>
  );
}
