import React from "react";
import { ImClock, ImLeaf } from "react-icons/im";
import TopHeader from "../../../header/TopHeader";
import BackNav from "../../../../../pages/famer/BackNav";
import CardMusic from "./CardMusic";

export default function LecteurAudio() {
  return (
    <div className="mt-20">
      <div className="h-18 absolute top-0 bg-deep-green w-full shadow-md">
        <TopHeader />
        <BackNav linkTo="/contenu/audio" title="Audio" />
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div
          className=""
          style={{
            background: 'url("https://source.unsplash.com/1oiHjZf5Vig")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="border-2 border-borde-gray rounded-full p-2">
          <div className="w-32 h-32 rounded-full flex items-center justify-center bg-deep-green">
            <ImLeaf className="text-4xl text-custom-white" />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <input
            type="range"
            name="timeline"
            id="timeline"
            className="w-96 h-4 mx-4 bg-borde-gray rounded-full outline-none appearance-none"
          />
          <div className="flex items-center text-text-gray">
            <ImClock className="text-sm mr-1" />
            <span className="text-sm">3:45</span>
          </div>
        </div>
        <div className="w-[95%] h-[35rem] mt-4 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col gap-2">
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
          </div>
        </div>
      </div>
    </div>
  );
}
