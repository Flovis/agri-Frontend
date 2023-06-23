import React, { useEffect, useState } from "react";
import { FaCloudSun } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import ProductionCycleChart from "./ChartProduction";
import DashCard from "./DashCard";

export default function DashReview({ meteo }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className=" flex flex-col gap-6">
      <div className="flex justify-between">
        <div className=" py-2 px-4 bg-deep-green w-28 text-center text-custom-white rounded-3xl">
          champs
        </div>
        <div className=" py-2 px-4 bg-deep-green w-28 text-center text-custom-white rounded-3xl">
          recolte
        </div>
        <div className=" py-2 px-4 bg-deep-green w-28 text-center text-custom-white rounded-3xl">
          Alert
        </div>
      </div>
      <div className=" rounded-md p-2 flex items-center justify-between ">
        <h1 className="text-xl font-bold">Weather forcast</h1>
        <Link to="/alert">
          <FiArrowUpRight
            size={24}
            className="border bg-[#d1cfcd] border-[#d1cfcd]"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center bg-custom-white p-4 rounded-md">
        <div className="flex items-center gap-2">
          <div>
            <FaCloudSun className="text-[#ffcc01] text-2xl" />
          </div>
          <div className=" flex flex-col ">
            <p className="text-deep-green font-bold">Aujourd'hui</p>
            <p className="-my-1 font-extrabold">
              {" "}
              {meteo ? (
                `${Math.floor(meteo?.main.temp - 273)}°C`
              ) : (
                <PulseLoader color="#36d7b7" />
              )}
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <p className="font-bold">
              {" "}
              {hours < 10 ? "0" + hours : hours}:
              {minutes < 10 ? "0" + minutes : minutes}{" "}
            </p>
            <p className="text-borde-gray font-bold">(7:19 / 18:30) </p>
          </div>
          <div className="flex gap-2">
            <p className="flex items-center font-bold">
              <WiHumidity className="text-[#0ca2ed] text-xl" />
              {meteo ? (
                `${Math.floor(meteo?.main.humidity)} %`
              ) : (
                <PulseLoader color="#36d7b7" />
              )}
            </p>
            <p className="flex items-center font-bold">
              <WiWindy className="text-[#0ca2ed] text-xl" />
              {meteo ? (
                `${(meteo?.wind.speed * 3, 6)}Km/h`
              ) : (
                <PulseLoader color="#36d7b7" />
              )}
            </p>
          </div>
        </div>
      </div>
      {/* dessus */}

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
          <p className="font-extrabold">2 jours</p>
          <p>de retard</p>{" "}
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
      {/* RECOLTE */}
      {/* <WeatheForecastChart /> */}
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
