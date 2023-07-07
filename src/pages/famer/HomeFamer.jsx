import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Card from "./Card";
import NavBottom from "./NavBottom";
import Aside from "./Aside";

import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import TopHeader from "../../components/dashComponent/header/TopHeader";
import CardMeteo from "../../components/dashComponent/retouche/CardMeteo";
import { io } from "socket.io-client";
import { SocketContext } from "../../context/SocketContext";
// const socket = io("http://localhost:3500");

// console.log("kadea", socket);
const HomeFamer = ({ meteo }) => {
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        socket.on("NouveauPlan", (data) => {
            console.log("NouveauPlan", data);
        });
        // socket.on("disconnect", () => {
        //     console.log("Disconnected from the socket.io server");
        // });
        // // return () => {
        // //     socket.disconnect();
        // // };
    }, []);

    const [showAside, setShowAside] = useState(false);
    const handleToggleAside = () => {
        setShowAside(!showAside);
    };
    const datas = [
        {
            title: "Bonne Pratique pour Mais",
            publish: "2h",
            content:
                "Le maïs est une espèce peu rustique qui résiste assez mal au froid. Semis : Semer de mars à juin. A partir de mars en godet ou en place à partir de mai, en poquets* de 3 à 4 graines espacés de 40 cm sur des rangs, eux-mêmes espacés de 70 cm",
            produit: "manioc",
            image: "",
        },
        {
            title: "Etape de recolte",
            publish: "5h",
            content:
                "Cultiver le maïs dans votre jardin peut vous sembler compliqué ou délicat. Ma fiche pratique sur cette céréale, que l’on mange comme un",
            produit: "Tomates",
            image: "",
        },
        {
            title: "Etape de plantation",
            publish: "7h",
            content:
                "Où planter votre maïs ? Celui-ci apprécie le voisinage de divers légumes : courge, fève, haricot, melon et pois. N’hésitez pas à le placer dans un endroit proche de ces plantes.Pour la période de semis, si vo",
            produit: "oignons",
            image: "",
        },
        {
            title: "Arrosage",
            publish: "10h",
            content:
                "Le semis peut s’effectuer en avril, soit en abri pour un replantage lors des beaux jours, soit en terre sous mini-serre. Cette serre protégera la future plante des températures basses, mais également des chats qui pourraient trouver le carré confortable",
            produit: "corn",
            image: "",
        },
        {
            title: "Les légumes",
            publish: "13h",
            content:
                "Les animaux aussi mangent de cette graminée, mais la leur n’est pas de la même variété que la nôtre et s’appelle maïs-fourrage. Le maïs dont nous dégustons les grains s’appelle le maïs doux ou sucré. Il existe aussi d’autres sortes de cette céréale utilisée pour ",
            produit: "oranges",
            image: "",
        },
    ];

    return (
        <>
            <TopHeader />
            <div className="lg:w-[900px] m-auto mb-14">
                <Nav onclickAvatar={handleToggleAside} />
                <Aside
                    onclickHiddenMenu={handleToggleAside}
                    state={showAside}
                />

                <div className="w-full">
                    <div className="mt-5">
                        <p className="px-4 font-medium text-lg ">
                            Informations Météologique
                        </p>
                        <CardMeteo meteo={meteo} />
                    </div>
                    {datas.map((data, index) => (
                        <Card
                            key={index}
                            title={data.title}
                            publish={data.publish}
                            content={data.content}
                            imageLink={`https://source.unsplash.com/featured/?${data.produit}`}
                        />
                    ))}
                </div>

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
        </>
    );
};

export default HomeFamer;
