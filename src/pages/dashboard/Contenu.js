import React from "react";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import Home from "../../components/dashComponent/Cotenu/Home";
import { useMediaQuery } from "react-responsive";
import data from "../../data/DataFooter";
import FooterSlider from "../../components/dashComponent/footer/FooterSlider";

export default function Contenu() {
  const isMedium = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <div className="h-18 fixed top-0 bg-custom-white fixed w-full shadow-md md:shadow-none">
        <Header />
      </div>

      <div className="flex flex-row-reverse w-full border border-spacing-5">
        <div className="flex-1">
          <Home />
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
