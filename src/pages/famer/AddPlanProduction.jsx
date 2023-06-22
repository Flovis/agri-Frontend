import React, { useState, useMemo, useCallback } from "react";
import BackNav from "./BackNav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import moment from "moment";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import data from "./data.json";
import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Footer from "../../components/dashComponent/footer/Footer";

const AddPlanProduction = () => {
    const allData = Object.keys(data);
    // console.log(allData);
    let product;

    const [selectedProduct, setSelectedProduct] = useState();
    const [startDate, setStartDate] = useState("");

    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    };

    if (selectedProduct) {
        console.log(selectedProduct.value);
    }
    const onSelect = useCallback((selectedProduct) => {
        console.log(selectedProduct);
        setSelectedProduct(selectedProduct);
    }, []);

    const itemsProduct = useMemo(() =>
        allData.map((data) => ({ id: data, value: data }))
    );
    if (selectedProduct) {
        product = data[selectedProduct.value];
        console.log();
    }

    return (
        <div>
            <BackNav
                linkTo="/agriculteur/plan-de-production"
                title="Ajouter un produit"
            />
            <form action="">
                <div className="w-full p-5">
                    <div className="w-full mb-1 md:mb-5 ">
                        <label htmlFor="produit" className="text-md mb-[150px]">
                            Nom du produit
                        </label>
                        <DatalistInput
                            id="produit"
                            className="produit"
                            inputProps={{ className: "p-12" }}
                            labelProps={{ className: "" }}
                            listboxProps={{
                                className: "",
                            }}
                            listboxOptionProps={{
                                className: "",
                            }}
                            label=""
                            placeholder="Tomates"
                            onSelect={onSelect}
                            items={itemsProduct}
                        />
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
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            required
                            onChange={handleStartDate}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 mt-4">
                        {product && startDate && (
                            <>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Semence:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.semence.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Croissance:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.croissance.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Récolte:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.recolte.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Conditionnement:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.conditionnement.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-full mt-3 md:mb-5">
                        <Button
                            value="Ajouter"
                            typ="submit"
                            className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                        />
                    </div>
                </div>
            </form>

            <div className="w-full p-5"></div>
            {/* <NavBottom /> */}
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

export default AddPlanProduction;
