import React, { useContext, useEffect, useState } from "react";
import NavBottom from "./NavBottom";
import BackNav from "./BackNav";
import CardNotification from "./CardNotification";
import FloatButton from "./FloatButton";
import PlanProdCard from "./PlanProdCard";
import { Link } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Footer from "../../components/dashComponent/footer/Footer";
import useAuth from "../../hooks/useAuth";
import { backendAxios } from "../../api/axios";
import io from "socket.io-client";

import { SocketContext } from "../../context/SocketContext";
// const socket = io("http://localhost:3500");

const ProductionPlan = () => {
    const { auth } = useAuth();
    console.log(auth.id);

    const { socket, setSocket } = useContext(SocketContext);
    console.log("socket", socket);

    const URL = `/allProduction/${auth.id}`;
    const [produits, setProduits] = useState([]);

    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.emit("ok", "Toujours");
        socket.on("Test", (msg) => {
            // console.log(msg);
            setMessage(msg);
        });
        return () => {
            // Nettoyer les écouteurs lorsque le composant est démonté
            socket.off("Test");
        };
    }, []);
    console.log("le message", message);
    // useEffect(() => {
    //     // Mettre à jour le message lorsqu'il y a des changements
    //     console.log("Nouveau message :", message);
    //     setMessage(message)
    // }, [message]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await backendAxios.get(URL, {
                    headers: { "Content-Type": "application/json" },
                }); // Replace "/api/your-endpoint" with the actual endpoint URL
                setProduits(response.data.productionPlan);
                // console.log(response.data.productionPlan);
                // console.log(produits);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="mb-[40px]">
            <BackNav linkTo="/agriculteur/contenu" title="Plan de production" />
            <div className="">
                <div className="w-full h-[150px] flex flex-col items-center justify-center bg-[#D1FAE5]">
                    <div className="font-medium text-text-gray">
                        Nombre de produits
                    </div>
                    <div className="text-center text-[70px] text-[#042f2e]">
                        {produits ? produits.length : 0}
                    </div>
                </div>
            </div>
            <div className="h-full pt-2 w-full flex flex-wrap">
                {produits?.length ? (
                    produits.map((produit, index) => (
                        <div className="w-1/2" key={index}>
                            <PlanProdCard
                                id={index + 1}
                                title={produit.Product.name}
                                debutDate={produit.dateDebut}
                            />
                        </div>
                    ))
                ) : (
                    <div className="flex h-full w-full justify-center items-center">
                        Aucun produit au plan
                    </div>
                )}
            </div>

            <Link to="/agriculteur/plan-de-production/ajouter">
                <FloatButton
                    value={<VscAdd className="text-custom-white text-xl" />}
                />
            </Link>
            <NavBottom
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

export default ProductionPlan;
