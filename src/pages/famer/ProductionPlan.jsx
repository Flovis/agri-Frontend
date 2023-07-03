import React, { useEffect, useState } from "react";
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

const ProductionPlan = () => {
    const { auth } = useAuth();
    console.log(auth.id);

    const URL = `/allProduction/${auth.id}`;
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await backendAxios.get(URL, {
                    headers: { "Content-Type": "application/json" },
                }); // Replace "/api/your-endpoint" with the actual endpoint URL
                setProduits(response.data.productionPlan);
                console.log(response.data.productionPlan);
                console.log(produits);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const datas = [
        {
            id: 1,
            crop: "Tomates",
            quantity: 100,
            startDate: "2023-06-15",
            endDate: "2023-09-30",
        },
        {
            id: 2,
            crop: "Carottes",
            quantity: 200,
            startDate: "2023-07-01",
            endDate: "2023-10-31",
        },
        {
            id: 3,
            crop: "Poivrons",
            quantity: 150,
            startDate: "2023-06-20",
            endDate: "2023-09-15",
        },
        {
            id: 4,
            crop: "Pommes de terre",
            quantity: 300,
            startDate: "2023-06-25",
            endDate: "2023-10-15",
        },
        {
            id: 5,
            crop: "Courgettes",
            quantity: 120,
            startDate: "2023-07-10",
            endDate: "2023-09-30",
        },
        // Ajoutez autant d'objets de plan de production que nécessaire
    ];
    return (
        <div className="mb-[40px]">
            <BackNav linkTo="/agriculteur/contenu" title="Plan de production" />
            <div className="">
                <div className="w-full h-[150px] flex flex-col items-center justify-center bg-[#d1fae5]">
                    <div className="font-medium text-text-gray">
                        Nombre de produits
                    </div>
                    <div className="text-center text-[70px] text-[#042f2e]">
                        {produits ? produits.length : 0}
                    </div>
                </div>
            </div>
            <div className="pt-2 w-full flex flex-wrap">
                {produits?.length ? (
                    produits.map((produit, index) => (
                        <div className="w-1/2" key={index}>
                            <PlanProdCard
                            id={index+1}
                                title={produit.Product.name}
                                debutDate={produit.dateDebut}
                            />
                        </div>
                    ))
                ) : (
                    <div>Aucun produit au plan</div>
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
