import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

const TopHeader = () => {
  return (
    <div className="bg-[#488575]">
      <div className=" h-12 bg-[#488575] max-w-screen-xl mx-auto flex items-center justify-between px-5">
        <div className="flex gap-4  text-custom-white">
          <HiPhone />
          <BiEnvelope />
        </div>
        <div className="text-custom-white">français</div>
      </div>
    </div>
  );
};

export default TopHeader;
