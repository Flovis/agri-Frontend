import React from "react";
import { LuHome } from "react-icons/lu";
import Button from "../../components/Button";
import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavBottom = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-custom-white border-t border-borde-gray">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                <NavLink
                    to="/agriculteur/contenu"
                    exact
                    isActive={(match, location) =>
                        match || location.pathname === "/agriculteur/meteo"
                    }
                    className={(nav) =>
                        nav.isActive
                            ? "inline-flex flex-col items-center justify-center px-5 text-deep-green border-t-2 border-deep-green bg-meduim-green"
                            : "inline-flex flex-col items-center justify-center px-5 hover:bg-borde-gray"
                    }
                >
                    <LuHome className="text-2xl" />
                </NavLink>
                <NavLink
                    to="/agriculteur/notifications"
                    className={(nav) =>
                        nav.isActive
                            ? "inline-flex flex-col items-center justify-center px-5 text-deep-green border-t-2 border-deep-green bg-meduim-green"
                            : "inline-flex flex-col items-center justify-center px-5 hover:bg-borde-gray"
                    }
                >
                    <RiNotification2Line className="text-2xl" />
                </NavLink>
                <NavLink
                    to="/agriculteur/plan-de-production"
                    className={(nav) =>
                        nav.isActive
                            ? "inline-flex flex-col items-center justify-center px-5 text-deep-green border-t-2 border-deep-green bg-meduim-green"
                            : "inline-flex flex-col items-center justify-center px-5 hover:bg-borde-gray"
                    }
                >
                    <BsCalendarWeek className="text-xl" />
                </NavLink>
            </div>
        </div>
    );
};

export default NavBottom;
