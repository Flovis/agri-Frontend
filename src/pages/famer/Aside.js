import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import { BsCalendarWeek } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

// import {BiUser} from "react-icons/bi"

const Aside = ({ onclickHiddenMenu, state }) => {
    const handleToggleMenu = () => {
        onclickHiddenMenu();
    };
    return (
        <div className="">
            <aside
                className={
                    state
                        ? "fixed top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-0 duration-200  md:translate-x-0 lg:w-64"
                        : "fixed top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-full duration-200 md:translate-x-0 lg:w-64"
                }
            >
                <div class="flex h-full w-full overflow-y-auto">
                    <div className="bg-custom-white w-3/4 lg:w-64">
                        <div className="flex justify-between items-center p-4 mb-3">
                            <div className="font-bold">Profile</div>
                            <div
                                className="w-8 h-8 rounded-full flex justify-center items-baseline hover:bg-borde-gray"
                                onClick={handleToggleMenu}
                            >
                                <GrClose className="m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-col p-4">
                            <div className="flex justify-between ">
                                <div>
                                    <div className="relative w-10 h-10 overflow-hidden border border-borde-gray rounded-full dark:bg-gray-600">
                                        <svg
                                            className="absolute w-12 h-12 text-gray-400 -left-1"
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
                                    </div>
                                    <div className="font-bold">
                                        Flovis kabanda
                                    </div>
                                    <div className="text-sm text-text-gray">
                                        flovis@gmail.com
                                    </div>
                                </div>
                                <Link
                                    to="/agriculteur/profile"
                                    className="bg-deep-green w-8 h-8 rounded-full flex items-center justify-center"
                                >
                                    <BsFillPencilFill className="text-custom-white" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <NavLink
                                to="/agriculteur/profile"
                                className="h-12 flex items-center font-bold hover:bg-deep-green hover:text-custom-white pl-4 gap-4"
                            >
                                <div>
                                    <BiUser className="text-xl" />
                                </div>
                                <div>Profile</div>
                            </NavLink>
                            <NavLink
                                to="/agriculteur/plan-de-production"
                                className="h-12 flex items-center font-bold hover:bg-deep-green hover:text-custom-white pl-4 gap-4"
                            >
                                <div>
                                    <BsCalendarWeek className="text-xl" />
                                </div>
                                <div>Plan de production</div>
                            </NavLink>

                            <NavLink
                                to=""
                                className="h-12 flex items-center font-bold hover:bg-deep-green hover:text-custom-white pl-4 gap-4"
                            >
                                <div>
                                    <BiLogOut className="text-xl" />
                                </div>
                                <div>Se déconnecter</div>
                            </NavLink>
                        </div>
                    </div>
                    <div
                        className="bg-text-gray bg-opacity-20 w-1/4 lg:hidden"
                        onClick={handleToggleMenu}
                    ></div>
                </div>
            </aside>
        </div>
    );
};

export default Aside;
