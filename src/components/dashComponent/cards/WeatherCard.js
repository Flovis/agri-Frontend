import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import DashReview from "../retouche/DashReview";
import FooterSlider from "../footer/FooterSlider";
import { useMediaQuery } from "react-responsive";
import data from "../../../data/DataFooter";

export default function WeatherCard() {
  const isMedium = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <div className="h-18 bg-custom-white fixed w-full shadow-md md:shadow-none">
        <Header />
      </div>
      <div className="flex flex-row-reverse  h-screen">
        <div
          className="h-full w-screen mx-auto"
          style={{
            overflowY: "scroll",
          }}
        >
          <div className="h-48 pt-36 px-4">
            <DashReview />
          </div>
        </div>

        {!isMedium ? (
          <Footer data={data} />
        ) : (
          <FooterSlider navigation={data} />
        )}
      </div>
    </div>
  );
}
