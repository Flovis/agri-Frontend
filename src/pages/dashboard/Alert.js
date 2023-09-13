import React from "react";
import Header from "../../components/dashComponent/header/Header";
import TodayMeteo from "../../components/dashComponent/forcast/cards/TodayMeteo";
import sky from "../../sky.jpg";

export default function Alert() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${sky})` }}
    >
      <div className="h-18 top-0 bg-custom-white fixed w-full shadow-md md:shadow-none ">
        <Header />
      </div>

      <div className="flex flex-row-reverse">
        <div className="flex-1">
          <TodayMeteo />
        </div>
      </div>
    </div>
  );
}
