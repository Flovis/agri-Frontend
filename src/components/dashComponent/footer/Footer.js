import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Footer({ data }) {
    const { auth } = useAuth();

    let filteredData;

    if (auth?.role === 3) {
        filteredData = data.filter((dat) => dat.nom !== "Contenu");
    } else {
        filteredData = data;
    }

    // console.log(filteredData.length);

    // console.log("Role", auth?.role);

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-custom-white border-t border-borde-gray">
            <div
                className={`grid h-full max-w-lg  grid-cols-4 mx-auto font-medium`}
            >
                {filteredData?.map((li, index) => (
                    <NavLink
                        key={index}
                        to={li.to}
                        exact
                        isActive={(match, location) =>
                            match || location.pathname === li.to
                        }
                        className={(nav) =>
                            nav.isActive
                                ? "inline-flex flex-col items-center justify-center px-5 text-[#488575] border-t-2 border-[#488575] bg-meduim-green"
                                : "inline-flex flex-col items-center justify-center px-5 hover:bg-borde-gray"
                        }
                    >
                        <div className="flex flex-col items-center justify-center">
                            {li.icon}
                            <span className="text-sm font-semibold tracking-wide">
                                {li.nom}
                            </span>
                        </div>
                        {/* <LuHome className="text-2xl" /> */}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
