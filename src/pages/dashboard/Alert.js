import React from "react";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import TodayMeteo from "../../components/dashComponent/forcast/cards/TodayMeteo";
import { useMediaQuery } from "react-responsive";
import FooterSlider from "../../components/dashComponent/footer/FooterSlider";
import data from "../../data/DataFooter";

export default function Alert() {
  const isMedium = useMediaQuery({ minWidth: 768 });
  return (
    <div className="">
      <div className="h-18 top-0 bg-custom-white fixed w-full shadow-md md:shadow-none ">
        <Header />
      </div>

      <div className="flex">
        <div className="">
          <TodayMeteo />
        </div>
        <div>
          {!isMedium ? (
            <Footer data={data} />
          ) : (
            <FooterSlider navigation={data} />
          )}
        </div>
      </div>
    </div>
  );
}
