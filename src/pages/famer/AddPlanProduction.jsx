import React, { useState } from "react";
import BackNav from "./BackNav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { validationSchema } from "../../validation/validationSchemas";
import PhoneInputField from "../../components/PhoneInputField";
import moment from "moment";

const AddPlanProduction = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [durationInDays, setDurationInDays] = useState(0);
    const [durationInMonths, setDurationInMonths] = useState(0);
    const [displayDuration, setDisplayDuration] = useState("");

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        calculateDuration(event.target.value, endDate);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        calculateDuration(startDate, event.target.value);
    };

    const calculateDuration = (start, end) => {
        if (start && end) {
            const startMoment = moment(start, "YYYY-MM-DD");
            const endMoment = moment(end, "YYYY-MM-DD");
            const durationInDays = endMoment.diff(startMoment, "days");
            const durationInMonths = endMoment.diff(startMoment, "months");

            setDurationInDays(durationInDays);
            setDurationInMonths(durationInMonths);

            const remainingDays = durationInDays % 30;
            const remainingMonths = Math.floor(durationInDays / 30);

            const displayDuration =
                (remainingMonths > 0 ? remainingMonths + " mois " : "") +
                (remainingDays > 0 ? remainingDays + " jours" : "");

            setDisplayDuration(displayDuration);
        }
    };
    return (
        <div>
            <BackNav
                linkTo="/agriculteur/plan-de-production"
                title="Ajouter un produit"
            />
            <div className="w-full p-5">
                <div className="w-full mb-1 md:mb-5 ">
                    <label
                        htmlFor="produit"
                        className="text-gray-600 text-md mb-[150px]"
                    >
                        Nom du produit
                    </label>
                    <input
                        type="text"
                        name="produit"
                        id=""
                        className="border border-borde-gray text-text-gray text-md rounded-lg block w-full p-3.5 "
                        placeholder="Riz"
                        required
                    />
                </div>
                <section className="nmt-4 pt-4">
                    <div className="mb-4 text-center">
                        Durée de production:{" "}
                        <span className="font-bold"> {displayDuration}</span>
                    </div>

                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_debut"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de debut
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_fin"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de fin
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleEndDateChange}
                        />
                    </div>
                </section>
                {/* =================================== */}
                <section className="border-t border-deep-green mt-4 pt-4">
                    <div className="mb-4 text-center">
                        Etape de Semence:{" "}
                        <span className="font-bold"> {displayDuration}</span>
                    </div>

                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_debut"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de debut
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_fin"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de fin
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleEndDateChange}
                        />
                    </div>
                </section>
                {/* =================================== */}
                <section className="border-t border-deep-green mt-4 pt-4">
                    <div className="mb-4 text-center">
                        Etape de Croissance:{" "}
                        <span className="font-bold"> {displayDuration}</span>
                    </div>

                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_debut"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de debut
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_fin"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de fin
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleEndDateChange}
                        />
                    </div>
                </section>
                {/* =================================== */}
                <section className="border-t border-deep-green mt-4 pt-4">
                    <div className="mb-4 text-center">
                        Etape de Récolte:{" "}
                        <span className="font-bold"> {displayDuration}</span>
                    </div>

                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_debut"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de debut
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_fin"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de fin
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleEndDateChange}
                        />
                    </div>
                </section>
                {/* =================================== */}
       
                <section className="border-t border-deep-green mt-4 pt-4 mb-4">
                    <div className="mb-4 text-center">
                        Etape de Conditionnement :{" "}
                        <span className="font-bold"> {displayDuration}</span>
                    </div>

                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_debut"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de debut
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_fin"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de fin
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            required
                            onChange={handleEndDateChange}
                        />
                    </div>
                </section>
                {/* =================================== */}
                <div className="w-full mb-3md:mb-5">
                    <Button
                        value="Ajouter"
                        typ="submit"
                        className="block mx-auto shadow bg-deep-green hover:bg-[#06B581] text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                    />
                </div>
            </div>

            <div className="w-full p-5"></div>
        </div>
    );
};

export default AddPlanProduction;
