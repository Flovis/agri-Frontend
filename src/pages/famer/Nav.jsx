import Button from "../../components/Button";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GrNotification } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";

const Nav = ({ onclickAvatar }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.pageYOffset;
    //         const scrollingUp = prevScrollPos > currentScrollPos;

    //         setVisible(scrollingUp || currentScrollPos < 10); // Show the navbar when scrolling up or when close to the top

    //         setPrevScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [prevScrollPos]);

    return (
        <>
            <div
                className={`w-full bg-custom-white border-b border-borde-gray h-16`}
            >
                <div className="p-4 flex items-center justify-between w-full">
                    <div
                        className="relative w-8 h-8 overflow-hidden border border-borde-gray rounded-full dark:bg-gray-600"
                        onClick={onclickAvatar}
                    >
                        <svg
                            className="absolute w-10 h-10 text-gray-400 -left-1"
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
                    <div>
                        {" "}
                        <h1
                            className={`text-white origin-left flex font-medium text-md`}
                        >
                            <p className="leading-normal font-bold text-xl">
                                AgriTech
                            </p>
                        </h1>
                    </div>
                    <div>
                        <Button
                            typ="button"
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                            icon={<BiSearch className="text-2xl" />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
