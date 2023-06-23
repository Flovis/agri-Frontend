import React, { useEffect, useState } from "react";
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { PulseLoader } from "react-spinners";

export default function CardMeteo({ meteo }) {
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
  );
}
