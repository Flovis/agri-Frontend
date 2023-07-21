import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import Geoloc from "../../components/dashComponent/cards/Geoloc";
import Footer from "../../components/dashComponent/footer/Footer";
import Header from "../../components/dashComponent/header/Header";
import SumilationCoords from "../../components/dashComponent/retouche/SumilationCoords";
import { useMediaQuery } from "react-responsive";
import FooterSlider from "../../components/dashComponent/footer/FooterSlider";
import data from "../../data/DataFooter";

export default function Localisation() {
  const [markers, setMarkers] = useState([]);
  const [polygon, setPolygon] = useState([]);
  const isMedium = useMediaQuery({ minWidth: 768 });

  const handleMapClick = (el) => {
    const { latitude, longitude } = el;
    const newMarker = { latitude, longitude };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const handlePolygonClick = () => {
    setPolygon(markers);
  };

  return (
    <div>
      <div className="h-18 bg-custom-white fixed w-full shadow-md md:shadow-none">
        <Header />
      </div>
      <div className=" flex flex-row-reverse w-full">
        <div className="max-w-xl   inset-x-auto md:max-w-screen-xl md: md:mx-auto md: flex-1 pt-[120px]">
          <div className="">
            <Geoloc />
          </div>
          <div className=" w-44">
            <SumilationCoords />
          </div>
        </div>
        <div className="mb-20"></div>
        {!isMedium ? (
          <Footer data={data} />
        ) : (
          <FooterSlider navigation={data} />
        )}
      </div>
    </div>
  );
}
