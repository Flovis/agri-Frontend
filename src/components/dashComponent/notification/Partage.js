import React, { useState } from "react";
import DynamicInput from "../../../PublicComponent/DynamicInput";
import DynamicSelect from "../../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";

import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaShareAltSquare } from "react-icons/fa";
import CardRetard from "../../../notification/CardRetard";

const Partages = ({ onPrevious, onSubmit, formData }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const defaultType = searchParams.get("type");
    const navigate = new useNavigate();
    const [form, setform] = useState("");
    //   console.log("formDataPage", formData);

    const notyf = new Notyf({
        duration: 1000,
        position: {
            x: "right",
            y: "top",
        },
    });

    const handlePrevious = () => {
        onPrevious(form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        setform(data);
        onSubmit(data);
        navigate(`/contenu/${defaultType}`);
    };

    return (
        <>
            <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md ">
                <TopHeader />
                <BackNavStep
                    title="configuration"
                    classes="hidden"
                    handlePrevious={handlePrevious}
                />
            </div>

            {<p></p>}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-4 mt-32 "
            >
                <div className="w-[90%] flex flex-col gap-4">
                    <div className="flex justify-between">
                        <DynamicTitle text=" Draft " size="xl" />
                        <FaShareAltSquare
                            className="text-2xl text-deep-green"
                            type="submit"
                        />
                    </div>
                    {/* {formData?.map((el) => { */}
                    <CardRetard formdata={formData} />;{/* })} */}
                    
                    <div className="mt-4 flex items-center">
                        <DynamicButton
                            label="Enregistrer"
                            getsizeClasses="w-full"
                            type="submit"
                            // onClick={handleSubmit}
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Partages;
