import React, { createContext, useContext, useState } from "react";
import DynamicTitle from "../../PublicComponent/DynamicTitle";
import UseTimer from "../../../../hooks/useTime";
import DaysCard from "./DaysCard";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import { useNavigate } from "react-router-dom";
import AjoutCat from "../../Modal/AjoutLangue";
import { BiPlusMedical } from "react-icons/bi";
import Footer from "../../footer/Footer";
import FooterSlider from "../../footer/FooterSlider";
import data from "../../../../data/DataFooter";
import { useMediaQuery } from "react-responsive";
import "./today.css";
import DataMeteoContext from "../../../../context/MeteoContext";
import getIcon from "../../../../conditions/GetIconWeather";

export default function TodayMeteo() {
  const isMedium = useMediaQuery({ minWidth: 768 });
  const isMediumComponent = useMediaQuery({ minWidth: 779, maxWidth: 1200 });

  const {
    hours,
    minutes,
    weatherIcon,
    temperature,
    humidity,
    windSpeed,
    pressurePercentage,
    minMaxTemperatures,
  } = UseTimer();

  const {
    dataMeteoContextValue: { forecast },
  } = useContext(DataMeteoContext);

  const ic = [...new Set(forecast && forecast?.map((ico) => ico.icon))];
  let icon = getIcon(ic);

  const jours = Object.keys(minMaxTemperatures);
  // const navigate = new useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`${
          isMediumComponent ? "md:overflow-y-auto md: " : ""
        }  w-screen  mt-32     md:flex md:flex-row-reverse md:mt-0`}
      >
        <div class="container mx-auto  md:pt-36 md:max-w-screen-xl mb-14 animation">
          <div class="font-bold mx-6 flex justify-between items-center">
            <DynamicTitle text="Prévision Météorologique" size="sm" />

            <DynamicButton
              label={
                <p class="flex font-extrabold items-center gap-2">
                  {<BiPlusMedical />}
                  <p>Configuration</p>
                </p>
              }
              onClick={handleOpen}
            />
          </div>
          <div className=" h-full   md:flex items-center md:-mt-8 justify-center">
            <div
              class={` ${
                isMediumComponent
                  ? "md:flex-col md:overflow-y-auto md:h-[32rem]"
                  : ""
              } md:flex gap-6      md:max-w-screen-xl `}
            >
              <div class="mt-2 md:mt-0">
                <div class="mt-4 md:mt-10">
                  <div class="w-full mb-5 animate-scale-in">
                    <div class="flex items-center justify-center mx-20 slideIn">
                      <div class="mr-8">
                        <p class="text-6xl bounce">{weatherIcon}</p>
                      </div>
                      <div>
                        <p class="text-5xl font-extrabold text-deep-green">
                          {temperature}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {isOpen && <AjoutCat isOpen={isOpen} setIsOpen={setIsOpen} />}

                <div class="flex items-center  delayedFadeIn justify-center w-full md:w-[32rem]">
                  <div class="bg-custom-white w-[90%] md:w-[70%] rounded-lg p-6 h-[max-content]">
                    <div class="grid grid-cols-3 gap-6">
                      <div class="flex flex-col items-center justify-center animate-delayed-fade-in">
                        <p class="text-xl font-bold">{temperature}</p>
                        <p class="text-sm text-text-gray">Température</p>
                      </div>
                      <div class="flex flex-col items-center justify-center">
                        <p class="text-xl font-bold">{windSpeed}</p>
                        <p class="text-sm text-text-gray">Vent</p>
                      </div>
                      <div class="flex flex-col items-center justify-center">
                        <p class="text-xl font-bold">
                          {hours}:{minutes}
                        </p>
                        <p class="text-sm text-text-gray">Lever</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-6 mt-4">
                      <div class="flex flex-col items-center justify-center">
                        <p class="text-xl font-bold">{pressurePercentage} %</p>
                        <p class="text-sm text-text-gray">Pression</p>
                      </div>
                      <div class="flex flex-col items-center justify-center">
                        <p class="text-xl font-bold">{humidity}</p>
                        <p class="text-sm text-text-gray">Humidité</p>
                      </div>
                      <div class="flex flex-col items-center justify-center">
                        <p class="text-xl font-bold">
                          {hours}:{minutes}
                        </p>
                        <p class="text-sm text-gray-500">Coucher</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mx-4 flex scaleIn items-center justify-center text-3xl mt-4 p-4 bg-gradient-to-r from-borde-gray to-clear-green rounded-lg shadow-lg">
                  {icon}
                </div>
              </div>
              {/* <!-- PRÉVISION DE 7 JOURS --> */}
              <div>
                <div class="mx-6 text-md font-bold my-6 text-text-gray">
                  Prévision de 7 jours
                </div>
                <div class="flex items-center  md:h-60 justify-center px-2 md:mt-10 h-36">
                  <div class="overflow-x-auto  flex md:flex-none md:grid md:grid-cols-2 gap-6">
                    {jours?.map((day, index) => (
                      <DaysCard
                        day={day}
                        minMaxTemperatures={minMaxTemperatures[day]}
                        key={day}
                        icon={icon[index]}
                        animation={`animation-day${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {!isMedium ? (
            <Footer data={data} />
          ) : (
            <FooterSlider navigation={data} />
          )}
        </div>
      </div>
    </>
  );
}
