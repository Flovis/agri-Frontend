import { useContext } from "react";
import { BiEnvelope } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiPhone } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import DataMeteoContext from "../../../context/MeteoContext";
import CardNotification from "./CardNotification";

const Header = () => {
    const { notification } = useContext(DataMeteoContext);
    return (
        <header className="">
            <div className=" h-12 bg-[#488575] w-full flex items-center justify-between px-5">
                <div className="flex gap-4  text-custom-white">
                    <HiPhone />
                    <BiEnvelope />
                </div>
                <div className="text-custom-white">français</div>
            </div>
            <div className="flex h-16  items-center justify-between p-4 bg-gray-800 text-white">
                <div className="flex items-center">
                    <h1 className="text-xl font-extrabold text-[#488575]">
                        AGRI TECH
                    </h1>
                </div>
                <div className="flex items-center">
                    <button className="relative">
                        <RiNotification2Line className="h-6 w-6 mr-3 cursor-pointer" />
                        <strong className="">
                            <div className="absolute -top-[3PX] -right-[-6px] w-4 h-4 bg-custom-red rounded-full flex items-center justify-center text-custom-white text-xs">
                                {notification}
                            </div>
                        </strong>
                    </button>

                    <CgProfile className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;
