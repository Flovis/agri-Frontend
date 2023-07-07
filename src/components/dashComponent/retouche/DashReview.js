import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardMeteo from "./CardMeteo";
import ProductionCycleChart from "./ChartProduction";
import DashCard from "./DashCard";

export default function DashReview({ meteo }) {
  return (
    <div className=" flex flex-col gap-6">
      <div className=" rounded-md p-2 flex items-center justify-between ">
        <h1 className="text-xl font-bold">Météo actuelle</h1>
        <Link to="/alert">
          <FiArrowUpRight
            size={24}
            className="border bg-[#d1cfcd] border-[#d1cfcd]"
          />
        </Link>
      </div>

      <CardMeteo />

      {/* chart */}
      <div className=" rounded-md p-2 flex items-center justify-between ">
        <h1 className="text-xl font-bold">Tâches actuelles</h1>
        <FiArrowUpRight
          size={24}
          className="border bg-[#d1cfcd] border-[#d1cfcd]"
        />{" "}
      </div>
      <div className="flex justify-between items-center bg-custom-white p-4 rounded-md gap-2">
        <div className="bg-[#ff5e5e] w-44 p-4 rounded-md flex flex-col items-center justify-center font-semibold text-custom-white ">
          <p className="font-extrabold">2 jours</p>
          <p>de retard</p>{" "}
        </div>
        <div className="text-sm">
          <p className="rounded-md">
            La pulvérisation prévue n'a pas été effectuée, il a{" "}
            <strong className="text-[#ff5e5e]">2 jours de retard </strong>{" "}
          </p>
          <p className="bg-[#d1cfcd] w-20 text-center rounded-md font-bold">
            Flovis #1
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-custom-white p-4 rounded-md gap-2">
        <div className="bg-deep-green w-44 py-4 px-0 rounded-md flex flex-col items-center justify-center font-semibold text-custom-white ">
          <p className="font-extrabold">3 jours</p>
          <p>restant</p>{" "}
        </div>
        <div className="text-sm">
          <p className="rounded-md">
            Fertilisation du champ nécessaire dans .
            <strong className="text-deep-green">3 jours </strong>{" "}
          </p>
          <p className="bg-[#d1cfcd] w-20 text-center rounded-md font-bold">
            Kassapa #1
          </p>
        </div>
      </div>
      <DashCard />

      <div className="">
        <div>
          <div className=" rounded-md p-2 flex items-center justify-between ">
            <h1 className="text-xl font-bold">Cultures</h1>
            <FiArrowUpRight
              size={24}
              className="border bg-[#d1cfcd] border-[#d1cfcd]"
            />{" "}
          </div>
        </div>
      </div>
      {/* cycle */}
      <ProductionCycleChart />
    </div>
  );
}
