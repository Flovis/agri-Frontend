import React from "react";
import NavBottom from "./NavBottom";
import BackNav from "./BackNav";
import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Footer from "../../components/dashComponent/footer/Footer";

const Profile = () => {
    return (
        <div>
            <BackNav linkTo="/agriculteur/contenu" title="Profile" />
            <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 overflow-hidden border border-borde-gray rounded-full dark:bg-gray-600">
                    <svg
                        className="absolute w-18 h-18 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span clasName="top-0 left-7 absolute  w-3.5 h-3.5 border-2 border-white bg-deep-green dark:border-gray-800 rounded-full"></span>
                </div>
            </div>
            <Footer
                data={[
                    {
                        to: "/agriculteur/contenu",
                        icon: <RxHome className="text-2xl" />,
                        nom: "Accuiel",
                    },
                    {
                        to: "/agriculteur/notifications",
                        icon: <RiNotification2Line className="text-2xl" />,
                        nom: "Notifications",
                    },
                    {
                        to: "/agriculteur/plan-de-production",
                        icon: <BsCalendarWeek className="text-2xl" />,
                        nom: "Production",
                    },
                    {
                        to: "/agriculteur/profile",
                        icon: <CgProfile className="text-2xl" />,
                        nom: "Profile",
                    },
                ]}
            />
        </div>
    );
};

export default Profile;
