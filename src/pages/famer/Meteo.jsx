import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import NavBottom from "./NavBottom";
import { useState } from "react";
import Aside from "./Aside";
const Meteo = () => {
    const [showAside, setShowAside] = useState(false);
    const handleToggleAside = () => {
        setShowAside(!showAside);
    };
    const datas = [
        {
            title: "Alerte météo : Fortes pluies attendues",
            publish: "Publié il y a 2 heures",
            content:
                "Une alerte météorologique a été émise pour la région. Des fortes pluies sont prévues dans les prochaines heures, avec des cumuls pouvant atteindre 50 mm. Soyez prudents et prenez les précautions nécessaires.",
        },
        {
            title: "Avis de tempête : Vent violent en approche",
            publish: "Publié il y a 5 heures",
            content:
                "Une tempête est en formation et devrait frapper la région dans les prochaines heures. Des rafales de vent pouvant dépasser les 100 km/h sont attendues. Assurez-vous de sécuriser vos biens et de rester à l'abri.",
        },
        {
            title: "Avertissement de canicule",
            publish: "Publié il y a 7 heures",
            content:
                "Une période de canicule est prévue dans les jours à venir, avec des températures dépassant les 35°C. Veillez à vous hydrater régulièrement, à éviter les activités extérieures aux heures les plus chaudes et à prendre soin des personnes vulnérables.",
        },
        {
            title: "Alerte météo : Orages violents en approche",
            publish: "Publié il y a 10 heures",
            content:
                "Une alerte aux orages a été émise pour la région. Des orages violents accompagnés de fortes précipitations, de grêle et de vents forts sont attendus. Restez à l'écoute des informations officielles et mettez-vous à l'abri si nécessaire.",
        },
        {
            title: "Vigilance neige et verglas",
            publish: "Publié il y a 13 heures",
            content:
                "Une vigilance neige et verglas a été activée pour la région. Des chutes de neige sont prévues, pouvant entraîner des conditions de conduite difficiles et des risques de verglas. Soyez prudents sur les routes et adaptez votre conduite.",
        },
    ];

    return (
        <div className="lg:w-[900px] m-auto mb-14">
            <Nav onclickAvatar={handleToggleAside} />
            <Aside onclickHiddenMenu={handleToggleAside} state={showAside} />

            <div className="w-full">
                {datas.map((data) => (
                    <Card
                        title={data.title}
                        publish={data.publish}
                        content={data.content}
                    />
                ))}
            </div>

            <NavBottom />
        </div>
    );
};

export default Meteo;
