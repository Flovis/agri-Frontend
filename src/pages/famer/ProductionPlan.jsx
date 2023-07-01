import React from "react";
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

const ProductionPlan = () => {
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
        <div>
            <BackNav linkTo="/agriculteur/contenu" title="Plan de production" />
            {datas.map((data, index) => (
                <PlanProdCard
                    title={data.crop}
                    quantity={data.quantity}
                    debutDate={data.startDate}
                    id={data.id}
                    key={index}
                />
            ))}
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
